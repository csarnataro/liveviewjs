import { Application, nanoid, Router, send, LiveViewRouter, WsMessageRouter, SingleProcessPubSub } from "./deps.ts";

import { configLiveViewHandler } from "./liveViewAppAdaptor.ts";
import { rootTemplateRenderer, liveViewRootRenderer } from "./liveViewRenderers.ts";
import { DenoJwtSerDe } from "./serDe.ts";
import { DenoWsAdaptor } from "./wsAdaptor.ts";

import { LightLiveViewComponent } from "https://deno.land/x/liveviewjs@0.3.0-rc.2/packages/examples/mod.ts";

const app = new Application();
const router = new Router();

const messageRouter = new WsMessageRouter(
  new DenoJwtSerDe(),
  new SingleProcessPubSub(),
  liveViewRootRenderer);
const liveRouter: LiveViewRouter = {
  "/light": new LightLiveViewComponent(),
};



router.get("/liveview.js", async (ctx) => {
  await send(ctx, "liveview.js", {
    root: "./",
    index: "liveview.js",
  });
});

router.get("/live/websocket", async (ctx) => {
  console.log("connected to ws");
  const ws = await ctx.upgrade();
  const id = nanoid();
  ws.onopen = (ev) => {
    // console.log("onopen", id);
  };
  ws.onmessage = async (ev) => {
    // console.log("onmessage", ev.data, id);
    const wsAdaptor = new DenoWsAdaptor(ws);
    await messageRouter.onMessage(
      wsAdaptor,
      ev.data,
      liveRouter,
      id
    );
  };
  ws.onclose = async (ev) => {
    await messageRouter.onClose(ev.code, id);
  };
});

app.use(configLiveViewHandler(
  () => liveRouter,
  rootTemplateRenderer,
  {title: "Deno Demo", suffix: " · LiveViewJS"},
  liveViewRootRenderer
));

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 9001 });