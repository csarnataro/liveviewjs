import { WebSocket } from "ws";
import { LiveViewComponent, LiveViewSocket, StringPropertyValues } from "../component/types";
import { PhxClickPayload, PhxDiffReply, PhxFormPayload, PhxHeartbeatIncoming, PhxIncomingMessage, PhxJoinIncoming, PhxLivePatchIncoming, PhxOutgoingLivePatchPush, PhxOutgoingMessage, PhxKeyDownPayload, PhxKeyUpPayload, PhxBlurPayload, PhxFocusPayload, PhxHookPayload } from "./types";
import jwt from 'jsonwebtoken';
import { SessionData } from "express-session";
import { newHeartbeatReply, newPhxReply } from "./util";
import { BaseLiveViewComponent } from "../component/base_component";
import { deepDiff } from "../templates/diff";

export class LiveViewComponentManager {

  private context: unknown;
  private component: LiveViewComponent<unknown, unknown>;
  private signingSecret: string;
  private intervals: NodeJS.Timeout[] = [];
  private lastHeartbeat: number = Date.now();
  private socketIsClosed: boolean = false;
  private healthy: boolean = true;
  csrfToken?: string;

  constructor(component: LiveViewComponent<unknown, unknown>, signingSecret: string) {
    this.component = component;
    this.signingSecret = signingSecret;
    this.context = {};
    if (component instanceof BaseLiveViewComponent) {
      component.registerComponentManager(this);
    }
  }

  async handleJoin(ws: WebSocket, message: PhxJoinIncoming) {
    const [joinRef, messageRef, topic, event, payload] = message;
    const { url: urlString, redirect: redirectString } = payload;
    const joinUrl = urlString || redirectString;
    // checked one of these was defined in MessageRouter
    const url = new URL(joinUrl!);
    // @ts-ignore
    const urlParams = Object.fromEntries(url.searchParams);

    // extract params, session and socket from payload
    const { params: payloadParams, session: payloadSession, static: payloadStatic } = payload;
    // set component manager csfr token
    this.csrfToken = payloadParams._csrf_token;

    let session: Omit<SessionData, "cookie">;
    try {
      session = jwt.verify(payloadSession, this.signingSecret) as Omit<SessionData, "cookie">;
      // compare sesison csrfToken with csrfToken from payload
      if (session.csrfToken !== this.csrfToken) {
        // if session csrfToken does not match payload csrfToken, reject join
        console.error("Rejecting join due to mismatched csrfTokens", session.csrfToken, this.csrfToken);
        return;
      }
    } catch (e) {
      console.error("Error decoding session", e);
      return;
    }

    const liveViewSocket = this.buildLiveViewSocket(ws, topic);
    // pass in phx_join payload params, session, and socket
    this.context = await this.component.mount(payloadParams, session, liveViewSocket);

    // update socket with new context
    liveViewSocket.context = this.context;
    this.context = await this.component.handleParams(urlParams, joinUrl!, liveViewSocket);

    const view = this.component.render(this.context);

    // send full view parts (statics & dynaimcs back)
    const replyPayload = {
      response: {
        rendered: view.partsTree()
      },
      status: "ok"
    }

    this.sendPhxReply(ws, newPhxReply(message, replyPayload));
  }

  async onHeartbeat(ws: WebSocket, message: PhxHeartbeatIncoming) {
    this.lastHeartbeat = Date.now();
    this.sendPhxReply(ws, newHeartbeatReply(message));
  }

  async onEvent(ws: WebSocket, message: PhxIncomingMessage<PhxClickPayload | PhxFormPayload | PhxKeyUpPayload | PhxKeyDownPayload | PhxBlurPayload | PhxFocusPayload | PhxHookPayload>) {
    const [joinRef, messageRef, topic, _, payload] = message;
    const { type, event } = payload;

    // click and form events have different value in their payload
    // TODO - handle uploads
    let value: unknown;
    if (type === "click") {
      value = payload.value;
    } else if (type === "form") {
      // @ts-ignore - URLSearchParams has an entries method but not typed
      value = Object.fromEntries(new URLSearchParams(payload.value))
      // TODO - check value for _csrf_token here from phx_submit and validate against session csrf?
      // TODO - check for _target variable from phx_change here and remove it from value?
    } else if (type === "keyup" || type === "keydown") {
      value = payload.value;
    } else if (type === "blur" || type === "focus") {
      value = payload.value;
    } else if (type === "hook") {
      value = payload.value;
    } else {
      console.error("Unknown event type", type);
      return;
    }

    if (isEventHandler(this.component)) {
      const previousContext = this.context;
      // @ts-ignore - already checked if handleEvent is defined
      this.context = await this.component.handleEvent(event, value, this.buildLiveViewSocket(ws, topic));

      // get old render tree and new render tree for diffing
      const oldView = this.component.render(previousContext);
      const view = this.component.render(this.context);

      const diff = deepDiff(oldView.partsTree(), view.partsTree());

      const replyPayload = {
        response: {
          diff
        },
        status: "ok"
      }

      this.sendPhxReply(ws, newPhxReply(message, replyPayload));
    }
    else {
      console.error("no handleEvent method in component. add handleEvent method in your component to fix this error");
      return;
    }


  }

  async onLivePatch(ws: WebSocket, message: PhxLivePatchIncoming) {
    const [joinRef, messageRef, topic, event, payload] = message;

    const { url: urlString } = payload;
    const url = new URL(urlString);
    // @ts-ignore - URLSearchParams has an entries method but not typed
    const params = Object.fromEntries(url.searchParams);

    const previousContext = this.context;
    this.context = await this.component.handleParams(params, urlString, this.buildLiveViewSocket(ws, topic));

    // get old render tree and new render tree for diffing
    const oldView = this.component.render(previousContext);
    const view = this.component.render(this.context);

    // TODO - why is the diff causing live_patch to fail??
    const diff = deepDiff(oldView.partsTree(), view.partsTree());

    const replyPayload = {
      response: {
        diff: view.partsTree(false)
      },
      status: "ok"
    }

    this.sendPhxReply(ws, newPhxReply(message, replyPayload));
  }

  async onPushPatch(liveViewSocket: LiveViewSocket<unknown>, patch: { to: { path: string, params: StringPropertyValues<any> } }) {
    const urlParams = new URLSearchParams(patch.to.params);
    const to = `${patch.to.path}?${urlParams}`
    const message: PhxOutgoingLivePatchPush = [
      null, // no join reference
      null, // no message reference
      liveViewSocket.id,
      "live_patch",
      { kind: "push", to }
    ]

    // @ts-ignore - URLSearchParams has an entries method but not typed
    const params = Object.fromEntries(urlParams);

    this.context = await this.component.handleParams(params, to, liveViewSocket);

    if (liveViewSocket.connected && liveViewSocket.ws) {
      this.sendPhxReply(liveViewSocket.ws!, message)
    }
  }

  repeat(fn: () => void, intervalMillis: number) {
    this.intervals.push(setInterval(fn, intervalMillis));
  }

  shutdown() {
    this.intervals.forEach(clearInterval);
    this.healthy = false;
  }

  get isHealthy() {
    if (this.socketIsClosed || !this.healthy) {
      return false;
    } else {
      const now = Date.now();
      const diff = now - this.lastHeartbeat;
      return diff < 60000;
    }
  }

  private sendInternal(ws: WebSocket, event: any, topic: string): void {
    // console.log("sendInternal", event);

    if (isInfoHandler(this.component)) {
      const previousContext = this.context;
      // @ts-ignore - already checked if handleInfo is defined
      this.context = this.component.handleInfo(event, this.buildLiveViewSocket(ws, topic));

      // get old render tree and new render tree for diffing
      const oldView = this.component.render(previousContext);
      const view = this.component.render(this.context);

      const diff = deepDiff(oldView.partsTree(), view.partsTree());

      const reply: PhxDiffReply = [
        null, // no join reference
        null, // no message reference
        topic,
        "diff",
        diff
      ]

      this.sendPhxReply(ws, reply);
    }
    else {
      console.error("received internal event but no handleInfo in component", this.component);
    }
  }


  private buildLiveViewSocket(ws: WebSocket, topic: string): LiveViewSocket<unknown> {
    return {
      id: topic,
      connected: true, // websocket is connected
      ws, // the websocket
      context: this.context,
      sendInternal: (event) => this.sendInternal(ws, event, topic),
      repeat: (fn, intervalMillis) => this.repeat(fn, intervalMillis),
    }
  }

  private sendPhxReply(ws: WebSocket, reply: PhxOutgoingMessage<any>) {
    ws.send(JSON.stringify(reply), { binary: false }, (err: any) => {
      if (err) {
        this.socketIsClosed = true;
        this.shutdown();
        console.error(`socket readystate:${ws.readyState}. Shutting down topic:${reply[2]}. For component:${this.component}. Error: ${err}`);
      }
    });
  }

}

export function isInfoHandler(component: LiveViewComponent<unknown, unknown>) {
  return "handleInfo" in component;
}

export function isEventHandler(component: LiveViewComponent<unknown, unknown>) {
  return "handleEvent" in component;
}