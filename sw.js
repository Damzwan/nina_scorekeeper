if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let u={};const a=e=>i(e,l),o={module:{uri:l},exports:u,require:a};s[l]=Promise.all(r.map((e=>o[e]||a(e)))).then((e=>(n(...e),u)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/_layout.C42NS-wl.css",revision:null},{url:"_app/immutable/assets/0.DHDBrgME.css",revision:null},{url:"_app/immutable/assets/ProgressBar.Cirlo5Z8.css",revision:null},{url:"_app/immutable/chunks/entry.DbZF6vua.js",revision:null},{url:"_app/immutable/chunks/index.BBuoky1e.js",revision:null},{url:"_app/immutable/chunks/index.vkvyt7xZ.js",revision:null},{url:"_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.OagVuy-W.js",revision:null},{url:"_app/immutable/chunks/scheduler.Bl6bqnqL.js",revision:null},{url:"_app/immutable/entry/app.CCIr_ypm.js",revision:null},{url:"_app/immutable/entry/start.CmxelXJs.js",revision:null},{url:"_app/immutable/nodes/0.rAwiWyiq.js",revision:null},{url:"_app/immutable/nodes/1.wXjk_GAE.js",revision:null},{url:"_app/immutable/nodes/2.ZLUBPgOb.js",revision:null},{url:"android-chrome-192x192.png",revision:"2daeb645ea191857e5f7adf25a470f6d"},{url:"android-chrome-512x512.png",revision:"c36c01e1436cf16cfafba3ef455434f1"},{url:"apple-touch-icon.png",revision:"877fc0b489b2f9e99510eab7c9c11717"},{url:"favicon-16x16.png",revision:"e882f3d396ca53e928b8b38973617ca1"},{url:"favicon-32x32.png",revision:"d92b38d7d28392f93369798ca1bfe867"},{url:"favicon.ico",revision:"9dc9bfc0d6108dd65e3bd384a29bd46f"},{url:"mstile-150x150.png",revision:"a39e3f3114017b66197914304b6ebe5c"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"screenshots/1.png",revision:"73c9fdd64ca94c40fe30b694cc64dc5f"},{url:"service-worker.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"site.webmanifest",revision:"1e8806e74612e73ee3ea14b1624b4fd5"},{url:"manifest.webmanifest",revision:"f5f7725ca75256c139ec7f00ac97bc8e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/nina_scorekeeper/")))}));
