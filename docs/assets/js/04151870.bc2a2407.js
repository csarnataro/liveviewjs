"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[6847],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(n),m=a,v=h["".concat(s,".").concat(m)]||h[m]||d[m]||r;return n?i.createElement(v,l(l({ref:t},p),{},{components:n})):i.createElement(v,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=n(7896),a=(n(2784),n(876));const r={sidebar_position:1},l="User Events / Bindings",o={unversionedId:"user-events-slash-bindings/overview",id:"user-events-slash-bindings/overview",title:"User Events / Bindings",description:"Four main User Events",source:"@site/docs/06-user-events-slash-bindings/overview.md",sourceDirName:"06-user-events-slash-bindings",slug:"/user-events-slash-bindings/overview",permalink:"/docs/user-events-slash-bindings/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"User Events",permalink:"/docs/category/user-events"},next:{title:"Additional Bindings",permalink:"/docs/user-events-slash-bindings/additional-bindings"}},s={},u=[{value:"Four main User Events",id:"four-main-user-events",level:2},{value:"Click Events",id:"click-events",level:3},{value:"Click Event Example",id:"click-event-example",level:4},{value:"Form Events",id:"form-events",level:3},{value:"Key Events",id:"key-events",level:3},{value:"Key Event Example",id:"key-event-example",level:4},{value:"Focus / Blur Events",id:"focus--blur-events",level:3},{value:"Focus / Blur Examples",id:"focus--blur-examples",level:4},{value:"Additional Bindings",id:"additional-bindings",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-events--bindings"},"User Events / Bindings"),(0,a.kt)("h2",{id:"four-main-user-events"},"Four main User Events"),(0,a.kt)("p",null,"There are four main types of user events that a LiveView can listen to and respond to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click events"),(0,a.kt)("li",{parentName:"ul"},"Form events"),(0,a.kt)("li",{parentName:"ul"},"Key events"),(0,a.kt)("li",{parentName:"ul"},"Focus events")),(0,a.kt)("p",null,'To listen for user events there are a set of "bindings" (a.k.a. attributes) that you add to the HTML elements in your LiveView ',(0,a.kt)("inlineCode",{parentName:"p"},"render")," method. "),(0,a.kt)("h3",{id:"click-events"},"Click Events"),(0,a.kt)("p",null,"User clicks are the most common type of user event and there are two types of click bindings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"phx-click")," - Add this binding to an HTML element (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},'<... phx-click="myEvent" ...>'),") and when a user clicks on the element the event (i.e. value of the attribute) will be sent to the server. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"phx-click-away")," - This binding is similar to ",(0,a.kt)("inlineCode",{parentName:"li"},"phx-click")," except that an event will occur when the user clicks outside of the element.")),(0,a.kt)("h4",{id:"click-event-example"},"Click Event Example"),(0,a.kt)("p",null,"Let's say we want to send the ",(0,a.kt)("inlineCode",{parentName:"p"},"increment"),' event to the server when the user clicks on the "+" button:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<button phx-click="increment">+</button>\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEvent")," method would receive an event that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  type: "increment"\n}\n')),(0,a.kt)("h3",{id:"form-events"},"Form Events"),(0,a.kt)("p",null,"Form events are triggered by the user interacting with form inputs.  There are two types of form bindings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"phx-change")," - When a user changes the value of a form element, the event named by the ",(0,a.kt)("inlineCode",{parentName:"li"},"phx-change")," attribute will be sent to the server along with all the form values. This is typically used for form validation purposes prior to form submission.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"phx-submit")," - This binding is initiated when a user submits a form and the event named by the ",(0,a.kt)("inlineCode",{parentName:"li"},"phx-submit")," attribute will be sent to the server along with all the form values. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form action="#" phx-change="validate" phx-submit="save">\n  ...\n</form>\n')),(0,a.kt)("p",null,"Adding ",(0,a.kt)("inlineCode",{parentName:"p"},"phx-change")," to a form means that any time a user changes the value of a form element, the ",(0,a.kt)("inlineCode",{parentName:"p"},"validate")," event will be sent to the server along with the form values. Typically, ",(0,a.kt)("inlineCode",{parentName:"p"},"phx-change")," handles form validation prior to form submission."),(0,a.kt)("p",null,"Adding ",(0,a.kt)("inlineCode",{parentName:"p"},"phx-submit")," to a form means that when the user submits the form, the ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," event will be sent to the server along with all the form values. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"  In LiveViewJS, Forms are typically used in conjunction with ",(0,a.kt)("a",{parentName:"p",href:"/docs/forms-and-changesets/changesets"},(0,a.kt)("inlineCode",{parentName:"a"},"LiveViewChangeset")),"s. ",(0,a.kt)("inlineCode",{parentName:"p"},"LiveViewChangeset"),"s are designed to work together with form events to make form validation and submission easy and powerful.  We'll dive into more details later on in the next section.")),(0,a.kt)("h3",{id:"key-events"},"Key Events"),(0,a.kt)("p",null,"Key events are triggered by the user pressing a key on the keyboard.  There are key bindings for both the element-level and the window-level:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"phx-keydown"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"phx-window-keydown")," - When a user presses a key down on the keyboard, the event named by the attribute will be sent to the server along with the key that was pressed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"phx-keyup"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"phx-window-keyup")," - When a user releases a key on the keyboard, the event named by the attribute will be sent to the server along with the key that was released.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"phx-key")," is an optional attribute which limits triggering of the key events to the key provided in the attribute (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'phx-key="ArrowUp"'),").  You can find a list of the keys on ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values"},"MDN Keyboard Values"),"."),(0,a.kt)("h4",{id:"key-event-example"},"Key Event Example"),(0,a.kt)("p",null,"Let's say we want to send the ",(0,a.kt)("inlineCode",{parentName:"p"},"key_event")," event to the server along with the ",(0,a.kt)("inlineCode",{parentName:"p"},'{key: "ArrowUp"}'),' payload when the user presses the "ArrowUp" key:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},' <div phx-window-keydown="key_event" phx-key="ArrowUp" />\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEvent")," method would receive an event that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  type: "key_event",\n  key: "ArrowUp"\n}\n')),(0,a.kt)("h3",{id:"focus--blur-events"},"Focus / Blur Events"),(0,a.kt)("p",null,"If a HTML element emits focus and blur events, you can use the following bindings to send events to the server upon focus and/or blur:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"phx-focus")," - When a user focuses on an element, the event named by the ",(0,a.kt)("inlineCode",{parentName:"li"},"phx-focus")," attribute will be sent to the server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"phx-blur")," - When a user blurs from an element, the event named by the ",(0,a.kt)("inlineCode",{parentName:"li"},"phx-blur")," attribute will be sent to the server.")),(0,a.kt)("p",null,"Similar to key events, there are window-level and element-level bindings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"phx-window-focus")," - When a user focuses on the window, the event named by the ",(0,a.kt)("inlineCode",{parentName:"li"},"phx-window-focus")," attribute will be sent to the server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"phx-window-blur")," - When a user blurs from the window, the event named by the ",(0,a.kt)("inlineCode",{parentName:"li"},"phx-window-blur")," attribute will be sent to the server.")),(0,a.kt)("h4",{id:"focus--blur-examples"},"Focus / Blur Examples"),(0,a.kt)("p",null,"Let's say we want to send the ",(0,a.kt)("inlineCode",{parentName:"p"},"focus_event")," event to the server when the user focuses on the input and the ",(0,a.kt)("inlineCode",{parentName:"p"},"blur_event")," event when the user blurs from the input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input name="text" phx-focus="focus_event" phx-blur="blur_event"/>\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEvent")," method would receive an event that looks like this on focus:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  type: "focus_event"\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEvent")," method would receive an event that looks like this on blur:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  type: "blur_event"\n}\n')),(0,a.kt)("h3",{id:"additional-bindings"},"Additional Bindings"),(0,a.kt)("p",null,"There are other bindings that provide additional functionality for your LiveView and work in conjunction with the event bindings we reviewed above."))}d.isMDXComponent=!0}}]);