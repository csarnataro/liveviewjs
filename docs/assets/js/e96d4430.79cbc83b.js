"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[4379],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,m=u["".concat(p,".").concat(c)]||u[c]||h[c]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7896),a=(n(2784),n(876));const r={sidebar_position:1},i="Overview",l={unversionedId:"file-upload/overview",id:"file-upload/overview",title:"Overview",description:"File uploads are another common feature of web applications. LiveViewJS provides built in support for file uploads, image previews, upload progress, drag and drop, error handling, and more.  Handling file uploads can be intimidating, but LiveViewJS makes it easy.",source:"@site/docs/08-file-upload/overview.md",sourceDirName:"08-file-upload",slug:"/file-upload/overview",permalink:"/docs/file-upload/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Uploading Files",permalink:"/docs/category/uploading-files"},next:{title:"Built-in Image Preview",permalink:"/docs/file-upload/image-preview"}},p={},s=[{value:"Learn by Example",id:"learn-by-example",level:2},{value:"Example LiveView Code",id:"example-liveview-code",level:2},{value:"Configure the upload",id:"configure-the-upload",level:2},{value:"User Interface",id:"user-interface",level:2},{value:"Setup the Form",id:"setup-the-form",level:3},{value:"File Input and Drag and Drop",id:"file-input-and-drag-and-drop",level:3},{value:"Dynamic Help Text",id:"dynamic-help-text",level:3},{value:"Show preview, progress, and cancel for entries",id:"show-preview-progress-and-cancel-for-entries",level:3},{value:"Show errors as well",id:"show-errors-as-well",level:3},{value:"<code>handleEvent</code> Cases",id:"handleevent-cases",level:2},{value:"<code>cancel</code> event",id:"cancel-event",level:3},{value:"<code>save</code> event",id:"save-event",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:s};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"File uploads are another common feature of web applications. ",(0,a.kt)("strong",{parentName:"p"},"LiveViewJS")," provides built in support for file uploads, image previews, upload progress, drag and drop, error handling, and more.  Handling file uploads can be intimidating, but ",(0,a.kt)("strong",{parentName:"p"},"LiveViewJS")," makes it easy."),(0,a.kt)("h2",{id:"learn-by-example"},"Learn by Example"),(0,a.kt)("p",null,"We're going to start with a complete example and then walk through the code. The example LiveView allows you to create a new photo album with a name and up to 3 photos."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"  This example is available as part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/examples")," directory in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/floodfx/liveviewjs"},"LiveViewJS repository")," and runs on both the Express (NodeJS) and Oak (Deno) servers.")),(0,a.kt)("h2",{id:"example-liveview-code"},"Example LiveView Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  createLiveView,\n  error_tag,\n  form_for,\n  html,\n  LiveViewChangeset,\n  live_file_input,\n  live_img_preview,\n  mime,\n  SingleProcessPubSub,\n  submit,\n  text_input,\n  UploadEntry,\n} from "liveviewjs";\nimport { nanoid } from "nanoid";\nimport { z } from "zod";\nimport { InMemoryChangesetDB } from "../../datastore/InMemory";\n\ntype PhotosContext = {\n  photoGroups: PhotoGroup[];\n  changeset: LiveViewChangeset<PhotoGroup>;\n};\n\ntype PhotosEvents =\n  | { type: "validate"; name: string }\n  | { type: "save"; name: string; urls: string[] }\n  | { type: "cancel"; config_name: string; ref: string };\n\nexport const photosLiveView = createLiveView<PhotosContext, PhotosEvents>({\n  mount: async (socket) => {\n    if (socket.connected) {\n      // listen to photos topic\n      await socket.subscribe(photoGroupTopic);\n    }\n    // setup the default context\n    socket.assign({\n      photoGroups: photoGroupStore.list(),\n      changeset: photoGroupStore.changeset(),\n    });\n    // configure the upload constraints\n    socket.allowUpload("photos", {\n      accept: [".png", ".jpg", ".jpeg", ".gif"], // only allow images\n      maxEntries: 3,\n      maxFileSize: 10 * 1024 * 1024, // 10MB\n    });\n  },\n  handleEvent: async (event, socket) => {\n    switch (event.type) {\n      case "validate": {\n        // just validate the changeset\n        socket.assign({ changeset: photoGroupStore.validate(event) });\n        break;\n      }\n      case "save": {\n        // first get the completed file uploads and map them to urls\n        // Note: the files are guaranteed to be completed here because\n        // save is the event called after all the uploads are complete\n        const { completed } = await socket.uploadedEntries("photos");\n\n        // set the urls on the event (which was not set via the form)\n        event.urls = completed.map(filename);\n\n        // attempt to save the photo\n        const photoCreate = photoGroupStore.create(event);\n        if (!photoCreate.valid) {\n          // if the photo is not valid, assign the changeset and return\n          // so that the form is re-rendered with the errors\n          socket.assign({\n            changeset: photoCreate,\n          });\n          return;\n        }\n        // Yay! We\'ve successfully saved the photo, so we can consume (i.e. "remove")\n        // the uploaded entries from the "photos" upload config\n        await socket.consumeUploadedEntries("photos", async (meta, entry) => {\n          // we could create thumbnails, scan for viruses, etc.\n          // but for now move the data from the temp file (meta.path) to a public directory\n          meta.fileSystem.createOrAppendFile(`./public/${filename(entry)}`, meta.path);\n        });\n        // update the context with new photos and clear the form\n        socket.assign({\n          photoGroups: photoGroupStore.list(),\n          changeset: photoGroupStore.changeset(),\n        });\n        break;\n      }\n      case "cancel": {\n        const { config_name, ref } = event;\n        // remove the uploaded entry from the upload config\n        socket.cancelUpload(config_name, ref);\n      }\n    }\n  },\n  // Handle broadcast events from the pub/sub subscription for the "photoGroup" topic\n  handleInfo: (info, socket) => {\n    const { data } = info;\n    socket.assign({\n      photoGroups: [data],\n      changeset: photoGroupStore.changeset(),\n    });\n  },\n  // Render the view\n  render: (ctx, meta) => {\n    const { photoGroups, changeset } = ctx;\n    const { uploads } = meta;\n    return html`\n      <h2>My Photo Groups</h2>\n\n      \x3c!-- Render the form --\x3e\n      ${form_for<PhotoGroup>("#", meta.csrfToken, {\n        id: "photo-form",\n        phx_change: "validate",\n        phx_submit: "save",\n      })}\n        \x3c!-- photo group name input --\x3e\n        <div>\n          Photo Group Name: \n          ${text_input<PhotoGroup>(changeset, "name")}\n          ${error_tag<PhotoGroup>(changeset, "name")}\n        </div>\n\n        <div>\n          \x3c!-- file input / drag and drop --\x3e\n          <div phx-drop-target="${uploads.photos.ref}" style="border: 2px dashed #ccc; padding: 10px; margin: 10px 0;">\n            ${live_file_input(uploads.photos)}\n            or drag and drop files here \n          </div>        \n          \x3c!-- help text --\x3e\n          <div style="font-size: 10px; padding-bottom: 3rem">\n            Add up to ${uploads.photos.maxEntries} photos\n            (max ${uploads.photos.maxFileSize / (1024 * 1024)} MB each)\n          </div>\n        </div>\n        \n        \x3c!-- any errors from the upload --\x3e\n        ${uploads.photos.errors?.map((error) => html`<p class="invalid-feedback">${error}</p>`)}\n\n        \x3c!-- render the preview, progress, and cancel button of the selected files --\x3e\n        ${uploads.photos.entries.map(renderEntry)}\n\n        \x3c!-- submit button --\x3e\n        ${submit("Upload", { phx_disable_with: "Saving...", disabled: uploads.photos.errors.length > 0 })}\n      </form>\n      \n      \x3c!-- render the photo groups --\x3e\n      <ul id="photo_groups_list" phx-update="prepend">\n        ${photoGroups.map(renderPhotoGroup)}          \n      </ul>\n    `;\n  },\n});\n\n// Render a preview of the uploaded file with progress bar and cancel button\nfunction renderEntry(entry: UploadEntry) {\n  return html`\n    <div style="display: flex; align-items: center;">\n      <div style="width: 250px; border: 1px solid black; margin: 2rem 0;">${live_img_preview(entry)}</div>\n      <div style="display: flex; align-items: center; margin-left: 2rem;">\n        <progress\n          style="position: relative; top: 8px; width: 150px; height: 1em;"\n          value="${entry.progress}"\n          max="100"></progress>\n        <span style="margin-left: 1rem;">${entry.progress}%</span>\n      </div>\n      <div style="display: flex; align-items: center;">\n        <a style="padding-left: 2rem;" phx-click="cancel" phx-value-config_name="photos" phx-value-ref="${entry.ref}"\n          >\ud83d\uddd1</a\n        >\n        ${entry.errors?.map((error) => html`<p style="padding-left: 1rem;" class="invalid-feedback">${error}</p>`)}\n      </div>\n    </div>\n  `;\n}\n\n// Render a photo group with a list of photos\nfunction renderPhotoGroup(photoGroup: PhotoGroup) {\n  return html`<li id="${photoGroup.id}">\n    ${photoGroup.urls.map(\n      (url, i) => html`\n        <h3>${photoGroup.name}(${i + 1})</h3>\n        <img src="${url}" />\n      `\n    )}\n  </li>`;\n}\n\n// Define the shape of the Photo type\nconst PhotoGroupSchema = z.object({\n  id: z.string().default(nanoid),\n  name: z.string().min(1).max(100),\n  urls: z.array(z.string()).min(1).default([]),\n});\n\n// Infer the type from the schema\ntype PhotoGroup = z.infer<typeof PhotoGroupSchema>;\n\n// Pubsub topic for photos\nconst photoGroupTopic = "photoGroup";\n\n// InMemory DB for photoGroup that publishes changes to the "photos" topic\nconst photoGroupStore = new InMemoryChangesetDB<PhotoGroup>(PhotoGroupSchema, {\n  pubSub: new SingleProcessPubSub(),\n  pubSubTopic: photoGroupTopic,\n});\n\n/**\n * `filename` maps the upload entry to a filename based on the mime type of the entry\n * concatenated with the entry\'s uuid\n */\nfunction filename(entry: UploadEntry) {\n  const exts = mime.lookupExtensions(entry.client_type);\n  const ext = exts.length > 0 ? exts[0] : "bin";\n  return `${entry.uuid}.${ext}`;\n}\n')),(0,a.kt)("p",null,"Let's review each part in more detail to understand what's going on."),(0,a.kt)("h2",{id:"configure-the-upload"},"Configure the upload"),(0,a.kt)("p",null,"First, we need to tell LiveView that we want to upload files and we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"socket.allowUpload")," method in ",(0,a.kt)("inlineCode",{parentName:"p"},"mount")," to do so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'mount: (socket) => {\n...\n  // configure the upload constraints\n  socket.allowUpload("photos", {\n    accept: [".png", ".jpg", ".jpeg", ".gif"], // only allow images\n    maxEntries: 3,\n    maxFileSize: 10 * 1024 * 1024, // 10MB\n  });\n...\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"allowUpload")," method takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"config_name")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"UploadConfig")," object. The ",(0,a.kt)("inlineCode",{parentName:"p"},"config_name")," is used to identify the upload config elsewhere in the LiveView lifecycle methods. More details on ",(0,a.kt)("a",{parentName:"p",href:"upload-config-options"},"config options"),"."),(0,a.kt)("h2",{id:"user-interface"},"User Interface"),(0,a.kt)("p",null,"There is a lot going on in our LiveView's ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," function so let's walk through that."),(0,a.kt)("h3",{id:"setup-the-form"},"Setup the Form"),(0,a.kt)("p",null,"As usual, we start by rendering the form with the ",(0,a.kt)("inlineCode",{parentName:"p"},"form_for")," helper and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"phx-change")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"phx-submit")," events to ",(0,a.kt)("inlineCode",{parentName:"p"},"validate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," respectively. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'...\n${form_for<PhotoGroup>("#", meta.csrfToken, {\n    id: "photo-form",\n    phx_change: "validate",\n    phx_submit: "save",\n  })}\n...\n')),(0,a.kt)("p",null,"We will look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEvent")," method later to see how especially the ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," event is handled."),(0,a.kt)("h3",{id:"file-input-and-drag-and-drop"},"File Input and Drag and Drop"),(0,a.kt)("p",null,"Next, we need a place for the user to choose files for upload. We use the ",(0,a.kt)("inlineCode",{parentName:"p"},"live_file_input")," helper to render the file input and the ",(0,a.kt)("inlineCode",{parentName:"p"},"phx-drop-target")," attribute to make the element a drop target for files. The ",(0,a.kt)("inlineCode",{parentName:"p"},"phx-drop-target")," attribute takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," which is used to identify the upload config in the LiveView lifecycle methods. You'll notice we are referencing the ",(0,a.kt)("inlineCode",{parentName:"p"},"uploads.photos")," config we configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"mount")," earlier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'...\n\x3c!-- file input / drag and drop --\x3e\n<div phx-drop-target="${uploads.photos.ref}" style="border: 2px dashed #ccc; padding: 10px; margin: 10px 0;">\n  ${live_file_input(uploads.photos)}\n  or drag and drop files here \n</div>  \n...\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"  \ud83e\udd2f We just added a drag and drop target to our user interface with a single attribute (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},'phx-drop-target="${uploads.photos.ref}"'),")! Pretty cool, right!? Thanks Phoenix LiveView team!! \ud83d\ude4c")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"  The ",(0,a.kt)("inlineCode",{parentName:"p"},"live_file_input")," helper goes beyond just rendering the file input, it also adds some required attributes to the file input and works with the rest of ",(0,a.kt)("strong",{parentName:"p"},"LiveViewJS")," to handle uploads. You should always use it rather than rendering the file input yourself.")),(0,a.kt)("h3",{id:"dynamic-help-text"},"Dynamic Help Text"),(0,a.kt)("p",null,"A very nice aspect of having the upload config available in ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," is it allows us to dynamically render help text based on the upload config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"...\nAdd up to ${uploads.photos.maxEntries} photos\n(max ${uploads.photos.maxFileSize / (1024 * 1024)} MB each)\n...\n")),(0,a.kt)("h3",{id:"show-preview-progress-and-cancel-for-entries"},"Show preview, progress, and cancel for entries"),(0,a.kt)("p",null,"When a user selects (or drags and drops) files for upload, the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta.uploads")," object is automatically updated with those entries (and any errors for the upload or entries).  We can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"upload.entries")," (and ",(0,a.kt)("inlineCode",{parentName:"p"},"upload.errors"),") to show the user what will be uploaded or what errors in their selections."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"...\n\x3c!-- render the preview, progress, and cancel button of the selected files --\x3e\n${uploads.photos.entries.map(renderEntry)}\n...\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"renderEntry")," function shows the image preview using ",(0,a.kt)("inlineCode",{parentName:"p"},"live_img_preview")," and the progress of the upload using a ",(0,a.kt)("inlineCode",{parentName:"p"},"progress")," element. We also render a cancel button using the ",(0,a.kt)("inlineCode",{parentName:"p"},"phx-click")," event to cancel the upload."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"  \ud83e\udd2f Since we are allowing images only, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"live_img_preview")," helper to render a preview of the image before it is uploaded.  Again, pretty amazing that we get an image preview for free! Thanks Phoenix LiveView team!! \ud83d\ude4c")),(0,a.kt)("h3",{id:"show-errors-as-well"},"Show errors as well"),(0,a.kt)("p",null,"We configured the file uploads to only allow certain image file types, limited the number of files to 3, and limited the file size to 10MB. If the user selects files that don't meet these constraints, the ",(0,a.kt)("inlineCode",{parentName:"p"},"uploads")," object will be updated with the errors for the given config. We can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"upload.photos.errors")," to show the user what errors they have made for the upload config and ",(0,a.kt)("inlineCode",{parentName:"p"},"entry.errors")," to show the errors for a given entry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'...\n\x3c!-- render the errors for the upload config --\x3e\n${uploads.photos.errors?.map((error) => html`<p class="invalid-feedback">${error}</p>`)}\n...\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'...\n\x3c!-- render the errors for the entry --\x3e\n${entry.errors?.map((error) => html`<p class="invalid-feedback">${error}</p>`)}\n...\n')),(0,a.kt)("p",null,"Whew, we've got some pretty amazing functionality in our UI and we haven't even uploaded any files yet! Let's look at the LiveView lifecycle methods to see how we handle the uploads."),(0,a.kt)("h2",{id:"handleevent-cases"},(0,a.kt)("inlineCode",{parentName:"h2"},"handleEvent")," Cases"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"handleEvent")," has two main events that it is handling for us: ",(0,a.kt)("inlineCode",{parentName:"p"},"cancel"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"save"),". Let's look at each of these in turn."),(0,a.kt)("h3",{id:"cancel-event"},(0,a.kt)("inlineCode",{parentName:"h3"},"cancel")," event"),(0,a.kt)("p",null,"A user may want to remove an entry from the setup of files they have selected.  Perhaps the file is too large or the wrong type or they've simply changed their mind. Our ",(0,a.kt)("inlineCode",{parentName:"p"},"renderEntry")," function renders a cancel button next to each entry that fires off the ",(0,a.kt)("inlineCode",{parentName:"p"},"cancel")," event enabling the user to remove the entry from the upload. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'...\nhandleEvent: (event, socket) => {\n  ...\n  case "cancel": {\n    const { ref } = event;\n    // remove the entry from the upload config\n    socket.cancelUpload("photos", ref);\n    break;\n  }\n  ...\n}\n...\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"  A user can cancel an upload anytime before the ",(0,a.kt)("inlineCode",{parentName:"p"},"socket.consumeUploadedEntries")," method is called. ")),(0,a.kt)("h3",{id:"save-event"},(0,a.kt)("inlineCode",{parentName:"h3"},"save")," event"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," event is automatically fired when the user submits the form. In the case of file uploads, this event is not sent to the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEvent")," method until after all the files have been fully uploaded. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"  The upload progress for each entry will automatically be updated and the ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," method will be executed as they are uploaded allowing us to show the user the progress of the upload.")),(0,a.kt)("p",null,"Let's look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," event handler:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'...\nhandleEvent: (event, socket) => {\n  ...\n  case "save": {\n    // first get the completed file uploads and map them to urls\n    // Note: the files are guaranteed to be completed here because\n    // save is the event called after all the uploads are complete\n    const { completed } = await socket.uploadedEntries("photos");\n\n    // set the urls on the event (which was not set via the form)\n    event.urls = completed.map(filename);\n\n    // attempt to save the photo\n    const photoCreate = photoGroupStore.create(event);\n    if (!photoCreate.valid) {\n      // if the photo is not valid, assign the changeset and return\n      // so that the form is re-rendered with the errors\n      socket.assign({\n        changeset: photoCreate,\n      });\n      return;\n    }\n    // Yay! We\'ve successfully saved the photo, so we can consume (i.e. "remove")\n    // the uploaded entries from the "photos" upload config\n    await socket.consumeUploadedEntries("photos", async (meta, entry) => {\n      // we could create thumbnails, scan for viruses, etc.\n      // but for now move the data from the temp file (meta.path) to a public directory\n      meta.fileSystem.createOrAppendFile(`./public/${filename(entry)}`, meta.path);\n    });\n    // update the context with new photos and clear the form\n    socket.assign({\n      photoGroups: photoGroupStore.list(),\n      changeset: photoGroupStore.changeset(),\n    });\n    break;\n  }\n  ...\n}\n')),(0,a.kt)("p",null,"It's pretty well commented but to summarize:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We get the completed uploads from the ",(0,a.kt)("inlineCode",{parentName:"li"},"photos")," upload config. (Note: the files are guaranteed to be completed here because ",(0,a.kt)("inlineCode",{parentName:"li"},"save")," is the event called only after all the uploads are complete)."),(0,a.kt)("li",{parentName:"ol"},"We map each entry to a url and add the ",(0,a.kt)("inlineCode",{parentName:"li"},"urls")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"event")," (which will become the ",(0,a.kt)("inlineCode",{parentName:"li"},"photoGroup"),")."),(0,a.kt)("li",{parentName:"ol"},"We attempt to save the ",(0,a.kt)("inlineCode",{parentName:"li"},"photoGroup")," and check if the changeset is valid. If not, we return here to show the errors rather than ",(0,a.kt)("inlineCode",{parentName:"li"},"consumeUploadedEntries"),"."),(0,a.kt)("li",{parentName:"ol"},"If the changeset is valid, we ",(0,a.kt)("inlineCode",{parentName:"li"},"consumeUploadedEntries")," which will move the files from the temp directory to the public directory and importantly, remove these files from the upload config."),(0,a.kt)("li",{parentName:"ol"},"Finally, We update the ",(0,a.kt)("inlineCode",{parentName:"li"},"context")," and clear the form.")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Thanks for sticking with us through that.  It was long and detailed and hopefully it was helpful.  We think ",(0,a.kt)("strong",{parentName:"p"},"LiveViewJS")," provides some pretty amazing out of the box support for file uploads."))}h.isMDXComponent=!0}}]);