import{s as He,e as b,a as U,t as R,c as g,b as E,R as we,g as P,f as d,d as F,p as r,i as J,h as s,S as oe,T as X,n as ye,B as Me,k as ot,U as vt,V as ce,W as fe,l as We,X as Le,j as $,D as bt,Y as Ke,r as Pe,Z as Ve}from"../chunks/scheduler.DkGsqPKb.js";import{S as Re,i as Fe,t as Ye,c as Lt,a as Qe,g as Ht,f as Oe,b as Bt,d as At,m as Nt,e as Ut}from"../chunks/index.Owmoe9IB.js";import{g as xe}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.BPvJdXsA.js";function ge(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}var je=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pt={exports:{}};(function(t,e){(function(l,a){a()})(je,function(){function l(u,f){return typeof f>"u"?f={autoBom:!1}:typeof f!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),f={autoBom:!f}),f.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\uFEFF",u],{type:u.type}):u}function a(u,f,v){var p=new XMLHttpRequest;p.open("GET",u),p.responseType="blob",p.onload=function(){c(p.response,f,v)},p.onerror=function(){console.error("could not download file")},p.send()}function n(u){var f=new XMLHttpRequest;f.open("HEAD",u,!1);try{f.send()}catch{}return 200<=f.status&&299>=f.status}function i(u){try{u.dispatchEvent(new MouseEvent("click"))}catch{var f=document.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),u.dispatchEvent(f)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof je=="object"&&je.global===je?je:void 0,h=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(u,f,v){var p=o.URL||o.webkitURL,y=document.createElement("a");f=f||u.name||"download",y.download=f,y.rel="noopener",typeof u=="string"?(y.href=u,y.origin===location.origin?i(y):n(y.href)?a(u,f,v):i(y,y.target="_blank")):(y.href=p.createObjectURL(u),setTimeout(function(){p.revokeObjectURL(y.href)},4e4),setTimeout(function(){i(y)},0))}:"msSaveOrOpenBlob"in navigator?function(u,f,v){if(f=f||u.name||"download",typeof u!="string")navigator.msSaveOrOpenBlob(l(u,v),f);else if(n(u))a(u,f,v);else{var p=document.createElement("a");p.href=u,p.target="_blank",setTimeout(function(){i(p)})}}:function(u,f,v,p){if(p=p||open("","_blank"),p&&(p.document.title=p.document.body.innerText="downloading..."),typeof u=="string")return a(u,f,v);var y=u.type==="application/octet-stream",_=/constructor/i.test(o.HTMLElement)||o.safari,k=/CriOS\/[\d]+/.test(navigator.userAgent);if((k||y&&_||h)&&typeof FileReader<"u"){var A=new FileReader;A.onloadend=function(){var C=A.result;C=k?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),p?p.location.href=C:location=C,p=null},A.readAsDataURL(u)}else{var N=o.URL||o.webkitURL,M=N.createObjectURL(u);p?p.location=M:location.href=M,p=null,setTimeout(function(){N.revokeObjectURL(M)},4e4)}});o.saveAs=c.saveAs=c,t.exports=c})})(Pt);var Ft=Pt.exports;const Zt=Rt(Ft),qt=""+new URL("../assets/party.BzyVRFyu.mp3",import.meta.url).href;function Gt(t){let e,l,a,n="Home team name",i,o,h,c,u,f="Away team name",v,p,y,_,k,A,N,M,C;return{c(){e=b("div"),l=b("label"),a=b("span"),a.textContent=n,i=U(),o=b("input"),h=U(),c=b("label"),u=b("span"),u.textContent=f,v=U(),p=b("input"),y=U(),_=b("div"),k=b("button"),A=R("Start"),this.h()},l(T){e=g(T,"DIV",{class:!0});var S=E(e);l=g(S,"LABEL",{class:!0});var K=E(l);a=g(K,"SPAN",{"data-svelte-h":!0}),we(a)!=="svelte-18iwuod"&&(a.textContent=n),i=P(K),o=g(K,"INPUT",{class:!0,type:!0,placeholder:!0}),K.forEach(d),h=P(S),c=g(S,"LABEL",{class:!0});var G=E(c);u=g(G,"SPAN",{"data-svelte-h":!0}),we(u)!=="svelte-fbz3qk"&&(u.textContent=f),v=P(G),p=g(G,"INPUT",{class:!0,type:!0,placeholder:!0}),G.forEach(d),y=P(S),_=g(S,"DIV",{class:!0});var I=E(_);k=g(I,"BUTTON",{type:!0,class:!0});var B=E(k);A=F(B,"Start"),B.forEach(d),I.forEach(d),S.forEach(d),this.h()},h(){r(o,"class","input"),r(o,"type","text"),r(o,"placeholder","Kessel-Loco"),r(l,"class","label"),r(p,"class","input"),r(p,"type","text"),r(p,"placeholder","Anderslecht"),r(c,"class","label"),r(k,"type","button"),k.value=N=t[0].away_team_name,r(k,"class","btn variant-filled-tertiary rounded-md"),r(_,"class","w-full flex justify-end"),r(e,"class","flex flex-col modal bg-surface-100-800-token shadow-xl p-4 space-y-3")},m(T,S){J(T,e,S),s(e,l),s(l,a),s(l,i),s(l,o),oe(o,t[0].home_team_name),s(e,h),s(e,c),s(c,u),s(c,v),s(c,p),oe(p,t[0].away_team_name),s(e,y),s(e,_),s(_,k),s(k,A),M||(C=[X(o,"input",t[3]),X(p,"input",t[4]),X(k,"click",t[2])],M=!0)},p(T,[S]){S&1&&o.value!==T[0].home_team_name&&oe(o,T[0].home_team_name),S&1&&p.value!==T[0].away_team_name&&oe(p,T[0].away_team_name),S&1&&N!==(N=T[0].away_team_name)&&(k.value=N)},i:ye,o:ye,d(T){T&&d(e),M=!1,Me(C)}}}function zt(t,e,l){let a;const n=xe();ot(t,n,u=>l(5,a=u));const i={home_team_name:localStorage.getItem("home_team")||"",away_team_name:""};function o(){a[0].response&&a[0].response(i),n.close()}function h(){i.home_team_name=this.value,l(0,i)}function c(){i.away_team_name=this.value,l(0,i)}return[i,n,o,h,c]}class Xt extends Re{constructor(e){super(),Fe(this,e,zt,Gt,He,{})}}function Jt(t){let e,l,a,n="Scorer:",i,o,h,c,u,f="Start",v,p;return{c(){e=b("div"),l=b("label"),a=b("span"),a.textContent=n,i=U(),o=b("input"),h=U(),c=b("div"),u=b("button"),u.textContent=f,this.h()},l(y){e=g(y,"DIV",{class:!0});var _=E(e);l=g(_,"LABEL",{class:!0});var k=E(l);a=g(k,"SPAN",{"data-svelte-h":!0}),we(a)!=="svelte-1dimo40"&&(a.textContent=n),i=P(k),o=g(k,"INPUT",{class:!0,type:!0,placeholder:!0}),k.forEach(d),h=P(_),c=g(_,"DIV",{class:!0});var A=E(c);u=g(A,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),we(u)!=="svelte-17cmydc"&&(u.textContent=f),A.forEach(d),_.forEach(d),this.h()},h(){r(o,"class","input"),r(o,"type","text"),r(o,"placeholder","Aku"),r(l,"class","label"),r(u,"type","button"),r(u,"class","btn variant-filled-tertiary rounded-md"),r(c,"class","w-full flex justify-end"),r(e,"class","flex flex-col modal bg-surface-100-800-token shadow-xl p-4 space-y-3")},m(y,_){J(y,e,_),s(e,l),s(l,a),s(l,i),s(l,o),oe(o,t[0].player_name),s(e,h),s(e,c),s(c,u),v||(p=[X(o,"input",t[3]),X(u,"click",t[2])],v=!0)},p(y,[_]){_&1&&o.value!==y[0].player_name&&oe(o,y[0].player_name)},i:ye,o:ye,d(y){y&&d(e),v=!1,Me(p)}}}function Kt(t,e,l){let a;const n=xe();ot(t,n,c=>l(4,a=c));const i={player_name:""};function o(){a[0].response&&a[0].response(i),n.close()}function h(){i.player_name=this.value,l(0,i)}return[i,n,o,h]}class Wt extends Re{constructor(e){super(),Fe(this,e,Kt,Jt,He,{})}}function Yt(t){let e,l,a,n="Going out:",i,o,h,c,u,f="Going in:",v,p,y,_,k,A="Start",N,M;return{c(){e=b("div"),l=b("label"),a=b("span"),a.textContent=n,i=U(),o=b("input"),h=U(),c=b("label"),u=b("span"),u.textContent=f,v=U(),p=b("input"),y=U(),_=b("div"),k=b("button"),k.textContent=A,this.h()},l(C){e=g(C,"DIV",{class:!0});var T=E(e);l=g(T,"LABEL",{class:!0});var S=E(l);a=g(S,"SPAN",{"data-svelte-h":!0}),we(a)!=="svelte-1qynpt6"&&(a.textContent=n),i=P(S),o=g(S,"INPUT",{class:!0,type:!0,placeholder:!0}),S.forEach(d),h=P(T),c=g(T,"LABEL",{class:!0});var K=E(c);u=g(K,"SPAN",{"data-svelte-h":!0}),we(u)!=="svelte-174q48x"&&(u.textContent=f),v=P(K),p=g(K,"INPUT",{class:!0,type:!0,placeholder:!0}),K.forEach(d),y=P(T),_=g(T,"DIV",{class:!0});var G=E(_);k=g(G,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),we(k)!=="svelte-17cmydc"&&(k.textContent=A),G.forEach(d),T.forEach(d),this.h()},h(){r(o,"class","input"),r(o,"type","text"),r(o,"placeholder","Aku"),r(l,"class","label"),r(p,"class","input"),r(p,"type","text"),r(p,"placeholder","Aku"),r(c,"class","label"),r(k,"type","button"),r(k,"class","btn variant-filled-tertiary rounded-md"),r(_,"class","w-full flex justify-end"),r(e,"class","flex flex-col modal bg-surface-100-800-token shadow-xl p-4 space-y-3")},m(C,T){J(C,e,T),s(e,l),s(l,a),s(l,i),s(l,o),oe(o,t[0].player_out),s(e,h),s(e,c),s(c,u),s(c,v),s(c,p),oe(p,t[0].player_in),s(e,y),s(e,_),s(_,k),N||(M=[X(o,"input",t[3]),X(p,"input",t[4]),X(k,"click",t[2])],N=!0)},p(C,[T]){T&1&&o.value!==C[0].player_out&&oe(o,C[0].player_out),T&1&&p.value!==C[0].player_in&&oe(p,C[0].player_in)},i:ye,o:ye,d(C){C&&d(e),N=!1,Me(M)}}}function Qt(t,e,l){let a;const n=xe();ot(t,n,u=>l(5,a=u));const i={player_out:"",player_in:""};function o(){a[0].response&&a[0].response(i),n.close()}function h(){i.player_out=this.value,l(0,i)}function c(){i.player_in=this.value,l(0,i)}return[i,n,o,h,c]}class xt extends Re{constructor(e){super(),Fe(this,e,Qt,Yt,He,{})}}const De=["goal","doelpoging","voorzet","vrije trap","corner","Doel uittrap","wissel"];function gt(t,e,l){const a=t.slice();return a[21]=e[l],a[23]=l,a}function wt(t,e,l){const a=t.slice();return a[21]=e[l],a[22]=e,a[23]=l,a}function $t(t,e,l){const a=t.slice();return a[24]=e[l],a}function el(t){let e,l,a;return{c(){e=ce("svg"),l=ce("path"),a=ce("path"),this.h()},l(n){e=fe(n,"svg",{class:!0,"aria-hidden":!0,xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var i=E(e);l=fe(i,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),E(l).forEach(d),a=fe(i,"path",{"fill-rule":!0,d:!0}),E(a).forEach(d),i.forEach(d),this.h()},h(){r(l,"fill-rule","evenodd"),r(l,"d","M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"),r(l,"clip-rule","evenodd"),r(a,"fill-rule","evenodd"),r(a,"d","M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"),r(e,"class","w-6 h-6 text-gray-800 dark:text-white"),r(e,"aria-hidden","true"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"width","24"),r(e,"height","24"),r(e,"fill","currentColor"),r(e,"viewBox","0 0 24 24")},m(n,i){J(n,e,i),s(e,l),s(e,a)},d(n){n&&d(e)}}}function tl(t){let e,l;return{c(){e=ce("svg"),l=ce("path"),this.h()},l(a){e=fe(a,"svg",{class:!0,"aria-hidden":!0,xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var n=E(e);l=fe(n,"path",{d:!0}),E(l).forEach(d),n.forEach(d),this.h()},h(){r(l,"d","M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Z"),r(e,"class","w-6 h-6 text-gray-800 dark:text-white"),r(e,"aria-hidden","true"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"width","24"),r(e,"height","24"),r(e,"fill","currentColor"),r(e,"viewBox","0 0 24 24")},m(a,n){J(a,e,n),s(e,l)},d(a){a&&d(e)}}}function ll(t){let e,l=ge(t[4]),a=[];for(let n=0;n<l.length;n+=1)a[n]=yt(gt(t,l,n));return{c(){for(let n=0;n<a.length;n+=1)a[n].c();e=We()},l(n){for(let i=0;i<a.length;i+=1)a[i].l(n);e=We()},m(n,i){for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(n,i);J(n,e,i)},p(n,i){if(i&16){l=ge(n[4]);let o;for(o=0;o<l.length;o+=1){const h=gt(n,l,o);a[o]?a[o].p(h,i):(a[o]=yt(h),a[o].c(),a[o].m(e.parentNode,e))}for(;o<a.length;o+=1)a[o].d(1);a.length=l.length}},d(n){n&&d(e),Le(a,n)}}}function al(t){let e,l=ge(t[4]),a=[];for(let n=0;n<l.length;n+=1)a[n]=St(wt(t,l,n));return{c(){for(let n=0;n<a.length;n+=1)a[n].c();e=We()},l(n){for(let i=0;i<a.length;i+=1)a[i].l(n);e=We()},m(n,i){for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(n,i);J(n,e,i)},p(n,i){if(i&247){l=ge(n[4]);let o;for(o=0;o<l.length;o+=1){const h=wt(n,l,o);a[o]?a[o].p(h,i):(a[o]=St(h),a[o].c(),a[o].m(e.parentNode,e))}for(;o<a.length;o+=1)a[o].d(1);a.length=l.length}},d(n){n&&d(e),Le(a,n)}}}function yt(t){let e,l=Math.floor(t[21].time/60)+"",a,n,i=String(t[21].time%60).padStart(2,"0")+"",o,h,c=t[21].team.substring(0,1).toUpperCase()+"",u,f,v=t[21].action+"",p,y,_=t[21].player?`(${t[21].player})`:"",k,A,N=t[21].player_out?`(out: ${t[21].player_out}, in: ${t[21].player_in})`:"",M,C;return{c(){e=b("p"),a=R(l),n=R(":"),o=R(i),h=R(` -
					`),u=R(c),f=R(". "),p=R(v),y=U(),k=R(_),A=U(),M=R(N),C=U()},l(T){e=g(T,"P",{});var S=E(e);a=F(S,l),n=F(S,":"),o=F(S,i),h=F(S,` -
					`),u=F(S,c),f=F(S,". "),p=F(S,v),y=P(S),k=F(S,_),A=P(S),M=F(S,N),C=P(S),S.forEach(d)},m(T,S){J(T,e,S),s(e,a),s(e,n),s(e,o),s(e,h),s(e,u),s(e,f),s(e,p),s(e,y),s(e,k),s(e,A),s(e,M),s(e,C)},p(T,S){S&16&&l!==(l=Math.floor(T[21].time/60)+"")&&$(a,l),S&16&&i!==(i=String(T[21].time%60).padStart(2,"0")+"")&&$(o,i),S&16&&c!==(c=T[21].team.substring(0,1).toUpperCase()+"")&&$(u,c),S&16&&v!==(v=T[21].action+"")&&$(p,v),S&16&&_!==(_=T[21].player?`(${T[21].player})`:"")&&$(k,_),S&16&&N!==(N=T[21].player_out?`(out: ${T[21].player_out}, in: ${T[21].player_in})`:"")&&$(M,N)},d(T){T&&d(e)}}}function nl(t){let e,l;return{c(){e=b("option"),l=R(t[24]),this.h()},l(a){e=g(a,"OPTION",{});var n=E(e);l=F(n,t[24]),n.forEach(d),this.h()},h(){e.__value=t[24],oe(e,e.__value)},m(a,n){J(a,e,n),s(e,l)},p:ye,d(a){a&&d(e)}}}function Et(t){let e,l,a,n;function i(...o){return t[17](t[23],...o)}return{c(){e=b("input"),this.h()},l(o){e=g(o,"INPUT",{type:!0,class:!0,placeholder:!0}),this.h()},h(){r(e,"type","string"),e.value=l=t[21].player,r(e,"class","input input-bordered w-20"),r(e,"placeholder","Aku")},m(o,h){J(o,e,h),a||(n=X(e,"change",i),a=!0)},p(o,h){t=o,h&22&&l!==(l=t[21].player)&&e.value!==l&&(e.value=l)},d(o){o&&d(e),a=!1,n()}}}function kt(t){let e,l,a,n,i,o,h;function c(...f){return t[18](t[23],...f)}function u(...f){return t[19](t[23],...f)}return{c(){e=b("input"),a=U(),n=b("input"),this.h()},l(f){e=g(f,"INPUT",{type:!0,class:!0,placeholder:!0}),a=P(f),n=g(f,"INPUT",{type:!0,class:!0,placeholder:!0}),this.h()},h(){r(e,"type","string"),e.value=l=t[21].player_out,r(e,"class","input input-bordered w-20"),r(e,"placeholder","Aku"),r(n,"type","string"),n.value=i=t[21].player_in,r(n,"class","input input-bordered w-20"),r(n,"placeholder","Aku")},m(f,v){J(f,e,v),J(f,a,v),J(f,n,v),o||(h=[X(e,"change",c),X(n,"change",u)],o=!0)},p(f,v){t=f,v&22&&l!==(l=t[21].player_out)&&e.value!==l&&(e.value=l),v&22&&i!==(i=t[21].player_in)&&n.value!==i&&(n.value=i)},d(f){f&&(d(e),d(a),d(n)),o=!1,Me(h)}}}function St(t){let e,l,a,n,i,o,h,c,u,f,v,p,y,_,k,A,N,M,C='<svg class="w-[36px] h-[36px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"></path></svg>',T,S,K;function G(...V){return t[11](t[23],t[21],...V)}function I(...V){return t[12](t[23],t[21],...V)}function B(){t[13].call(c,t[22],t[23])}function Z(...V){return t[14](t[23],...V)}let te=ge(De),j=[];for(let V=0;V<te.length;V+=1)j[V]=nl($t(t,te,V));function re(){t[15].call(_,t[22],t[23])}function ee(...V){return t[16](t[23],...V)}let z=t[21].player&&Et(t),H=t[21].player_out&&kt(t);function he(){return t[20](t[23])}return{c(){e=b("div"),l=b("input"),n=R(`
					:
					`),i=b("input"),h=U(),c=b("select"),u=b("option"),f=R(t[1]),v=b("option"),p=R(t[2]),y=U(),_=b("select");for(let V=0;V<j.length;V+=1)j[V].c();k=U(),z&&z.c(),A=U(),H&&H.c(),N=U(),M=b("button"),M.innerHTML=C,T=U(),this.h()},l(V){e=g(V,"DIV",{class:!0});var D=E(e);l=g(D,"INPUT",{type:!0,min:!0,class:!0,placeholder:!0}),n=F(D,`
					:
					`),i=g(D,"INPUT",{type:!0,min:!0,max:!0,class:!0,placeholder:!0}),h=P(D),c=g(D,"SELECT",{class:!0});var ne=E(c);u=g(ne,"OPTION",{});var de=E(u);f=F(de,t[1]),de.forEach(d),v=g(ne,"OPTION",{});var ue=E(v);p=F(ue,t[2]),ue.forEach(d),ne.forEach(d),y=P(D),_=g(D,"SELECT",{class:!0});var O=E(_);for(let m=0;m<j.length;m+=1)j[m].l(O);O.forEach(d),k=P(D),z&&z.l(D),A=P(D),H&&H.l(D),N=P(D),M=g(D,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),we(M)!=="svelte-1u3kooc"&&(M.innerHTML=C),T=P(D),D.forEach(d),this.h()},h(){r(l,"type","number"),r(l,"min","0"),l.value=a=Math.floor(t[21].time/60),r(l,"class","input input-bordered w-10"),r(l,"placeholder","MM"),r(i,"type","number"),r(i,"min","0"),r(i,"max","59"),i.value=o=t[21].time%60,r(i,"class","input input-bordered w-12"),r(i,"placeholder","SS"),u.__value=t[1],oe(u,u.__value),v.__value=t[2],oe(v,v.__value),r(c,"class","select select-bordered"),t[21].team===void 0&&bt(B),r(_,"class","select select-bordered"),t[21].action===void 0&&bt(re),r(M,"type","button"),r(M,"class","btn-icon bg-initial btn-icon-sm"),r(e,"class","flex flex-row items-center space-x-2 mb-2")},m(V,D){J(V,e,D),s(e,l),s(e,n),s(e,i),s(e,h),s(e,c),s(c,u),s(u,f),s(c,v),s(v,p),Ke(c,t[21].team,!0),s(e,y),s(e,_);for(let ne=0;ne<j.length;ne+=1)j[ne]&&j[ne].m(_,null);Ke(_,t[21].action,!0),s(e,k),z&&z.m(e,null),s(e,A),H&&H.m(e,null),s(e,N),s(e,M),s(e,T),S||(K=[X(l,"change",G),X(i,"change",I),X(c,"change",B),X(c,"change",Z),X(_,"change",re),X(_,"change",ee),X(M,"click",he)],S=!0)},p(V,D){t=V,D&22&&a!==(a=Math.floor(t[21].time/60))&&l.value!==a&&(l.value=a),D&22&&o!==(o=t[21].time%60)&&i.value!==o&&(i.value=o),D&2&&$(f,t[1]),D&2&&(u.__value=t[1],oe(u,u.__value)),D&4&&$(p,t[2]),D&4&&(v.__value=t[2],oe(v,v.__value)),D&22&&Ke(c,t[21].team),D&22&&Ke(_,t[21].action),t[21].player?z?z.p(t,D):(z=Et(t),z.c(),z.m(e,A)):z&&(z.d(1),z=null),t[21].player_out?H?H.p(t,D):(H=kt(t),H.c(),H.m(e,N)):H&&(H.d(1),H=null)},d(V){V&&d(e),Le(j,V),z&&z.d(),H&&H.d(),S=!1,Me(K)}}}function ol(t){let e,l,a,n,i,o,h;function c(_,k){return _[3]?tl:el}let u=c(t),f=u(t);function v(_,k){return _[3]?al:ll}let p=v(t),y=p(t);return{c(){e=b("div"),l=b("div"),a=b("div"),n=b("button"),f.c(),i=U(),y.c(),this.h()},l(_){e=g(_,"DIV",{class:!0});var k=E(e);l=g(k,"DIV",{class:!0});var A=E(l);a=g(A,"DIV",{class:!0});var N=E(a);n=g(N,"BUTTON",{type:!0,class:!0});var M=E(n);f.l(M),M.forEach(d),N.forEach(d),i=P(A),y.l(A),A.forEach(d),k.forEach(d),this.h()},h(){r(n,"type","button"),r(n,"class","btn-icon bg-initial btn-icon-sm"),r(a,"class","w-full justify-start"),r(l,"class","w-full justify-center items-center flex flex-col mt-2 relative"),r(e,"class","w-full")},m(_,k){J(_,e,k),s(e,l),s(l,a),s(a,n),f.m(n,null),s(l,i),y.m(l,null),o||(h=X(n,"click",t[8]),o=!0)},p(_,[k]){u!==(u=c(_))&&(f.d(1),f=u(_),f&&(f.c(),f.m(n,null))),p===(p=v(_))&&y?y.p(_,k):(y.d(1),y=p(_),y&&(y.c(),y.m(l,null)))},i:ye,o:ye,d(_){_&&d(e),f.d(),y.d(),o=!1,h()}}}function rl(t,e,l){let a,{football_events:n=[]}=e,{home_team:i}=e,{away_team:o}=e,{home_score:h}=e,{away_score:c}=e,u=!1;function f(I,B,Z){l(0,n=n.map((te,j)=>j===I?{...te,[B]:Z}:te))}function v(I,B,Z){const te=B*60+Z;f(I,"time",te)}function p(I){n[I].action=="goal"&&(n[I].team==i?l(9,h--,h):l(10,c--,c)),l(0,n=n.filter((B,Z)=>Z!==I))}function y(){u&&l(0,n=n.sort((I,B)=>I.time-B.time)),l(3,u=!u)}const _=(I,B,Z)=>v(n.length-I-1,+Z.target.value,B.time%60),k=(I,B,Z)=>v(n.length-I-1,Math.floor(B.time/60),+Z.target.value);function A(I,B){I[B].team=vt(this),l(4,a),l(0,n),l(2,o),l(1,i)}const N=(I,B)=>f(n.length-I-1,"team",B.target.value);function M(I,B){I[B].action=vt(this),l(4,a),l(0,n),l(2,o),l(1,i)}const C=(I,B)=>f(n.length-I-1,"action",B.target.value),T=(I,B)=>f(n.length-I-1,"player",B.target.value),S=(I,B)=>f(n.length-I-1,"player_out",B.target.value),K=(I,B)=>f(n.length-I-1,"player_in",B.target.value),G=I=>p(n.length-I-1);return t.$$set=I=>{"football_events"in I&&l(0,n=I.football_events),"home_team"in I&&l(1,i=I.home_team),"away_team"in I&&l(2,o=I.away_team),"home_score"in I&&l(9,h=I.home_score),"away_score"in I&&l(10,c=I.away_score)},t.$$.update=()=>{t.$$.dirty&1&&l(4,a=[...n].reverse())},[n,i,o,u,a,f,v,p,y,h,c,_,k,A,N,M,C,T,S,K,G]}class Vt extends Re{constructor(e){super(),Fe(this,e,rl,ol,He,{football_events:0,home_team:1,away_team:2,home_score:9,away_score:10})}}function Tt(t,e,l){const a=t.slice();return a[37]=e[l],a[39]=l,a}function It(t,e,l){const a=t.slice();return a[37]=e[l],a[39]=l,a}function sl(t){let e,l,a=`${t[10]?"Game Finished":"Scorekeeper"}`,n,i,o,h,c,u,f,v,p="Start",y,_,k,A,N,M,C,T,S,K,G,I,B,Z,te,j,re,ee,z,H,he,V;function D(O){t[24](O)}function ne(O){t[25](O)}function de(O){t[26](O)}let ue={home_team:t[1],away_team:t[2]};return t[0]!==void 0&&(ue.football_events=t[0]),t[8]!==void 0&&(ue.away_score=t[8]),t[7]!==void 0&&(ue.home_score=t[7]),j=new Vt({props:ue}),Pe.push(()=>Oe(j,"football_events",D)),Pe.push(()=>Oe(j,"away_score",ne)),Pe.push(()=>Oe(j,"home_score",de)),{c(){e=b("div"),l=b("p"),n=R(a),i=U(),o=b("div"),h=b("button"),c=R("Export data"),f=U(),v=b("button"),v.textContent=p,y=U(),_=b("div"),k=b("p"),A=R(t[1]),N=U(),M=b("p"),C=R(t[7]),T=R("-"),S=R(t[8]),K=U(),G=b("p"),I=R(t[2]),B=U(),Z=b("hr"),te=U(),Bt(j.$$.fragment),this.h()},l(O){e=g(O,"DIV",{class:!0});var m=E(e);l=g(m,"P",{class:!0});var Y=E(l);n=F(Y,a),Y.forEach(d),i=P(m),o=g(m,"DIV",{class:!0});var Q=E(o);h=g(Q,"BUTTON",{type:!0,class:!0});var _e=E(h);c=F(_e,"Export data"),_e.forEach(d),f=P(Q),v=g(Q,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),we(v)!=="svelte-18c3udp"&&(v.textContent=p),Q.forEach(d),y=P(m),_=g(m,"DIV",{class:!0});var W=E(_);k=g(W,"P",{});var se=E(k);A=F(se,t[1]),se.forEach(d),N=P(W),M=g(W,"P",{class:!0});var Ee=E(M);C=F(Ee,t[7]),T=F(Ee,"-"),S=F(Ee,t[8]),Ee.forEach(d),K=P(W),G=g(W,"P",{});var ke=E(G);I=F(ke,t[2]),ke.forEach(d),W.forEach(d),B=P(m),Z=g(m,"HR",{class:!0}),te=P(m),At(j.$$.fragment,m),m.forEach(d),this.h()},h(){r(l,"class","text-4xl"),r(h,"type","button"),r(h,"class","btn variant-filled-primary rounded-xl"),h.disabled=u=!t[10],r(v,"type","button"),r(v,"class","btn variant-filled-tertiary rounded-xl"),r(o,"class","w-4/5 flex justify-between items-center pt-5"),r(M,"class","text-4xl"),r(_,"class","w-4/5 flex justify-between items-center mt-4"),r(Z,"class","!border-t-2 w-full mt-4"),r(e,"class","p-4 w-full flex flex-col justify-center items-center")},m(O,m){J(O,e,m),s(e,l),s(l,n),s(e,i),s(e,o),s(o,h),s(h,c),s(o,f),s(o,v),s(e,y),s(e,_),s(_,k),s(k,A),s(_,N),s(_,M),s(M,C),s(M,T),s(M,S),s(_,K),s(_,G),s(G,I),s(e,B),s(e,Z),s(e,te),Nt(j,e,null),H=!0,he||(V=[X(h,"click",t[18]),X(v,"click",t[15])],he=!0)},p(O,m){(!H||m[0]&1024)&&a!==(a=`${O[10]?"Game Finished":"Scorekeeper"}`)&&$(n,a),(!H||m[0]&1024&&u!==(u=!O[10]))&&(h.disabled=u),(!H||m[0]&2)&&$(A,O[1]),(!H||m[0]&128)&&$(C,O[7]),(!H||m[0]&256)&&$(S,O[8]),(!H||m[0]&4)&&$(I,O[2]);const Y={};m[0]&2&&(Y.home_team=O[1]),m[0]&4&&(Y.away_team=O[2]),!re&&m[0]&1&&(re=!0,Y.football_events=O[0],Ve(()=>re=!1)),!ee&&m[0]&256&&(ee=!0,Y.away_score=O[8],Ve(()=>ee=!1)),!z&&m[0]&128&&(z=!0,Y.home_score=O[7],Ve(()=>z=!1)),j.$set(Y)},i(O){H||(Qe(j.$$.fragment,O),H=!0)},o(O){Ye(j.$$.fragment,O),H=!1},d(O){O&&d(e),Ut(j),he=!1,Me(V)}}}function il(t){let e,l,a,n=Math.floor(t[3]/60)+"",i,o,h=String(t[3]%60).padStart(2,"0")+"",c,u,f,v=Math.floor((t[6]?t[4]+Se:t[4])/60)+"",p,y,_=String((t[6]?t[4]+Se:t[4])%60).padStart(2,"0")+"",k,A,N,M,C,T,S,K,G,I,B,Z,te,j,re,ee,z,H,he,V,D,ne,de,ue,O,m,Y,Q,_e,W,se,Ee,ke,$e,Te,Ze,ve,qe,et,pe,tt,lt,at,ie,nt,rt;function st(w,L){return w[5]?cl:ul}let Ge=st(t),be=Ge(t),Ce=ge(De),le=[];for(let w=0;w<Ce.length;w+=1)le[w]=Mt(It(t,Ce,w));let Be=ge(De),ae=[];for(let w=0;w<Be.length;w+=1)ae[w]=Ct(Tt(t,Be,w));function Ot(w){t[21](w)}function jt(w){t[22](w)}function Dt(w){t[23](w)}let ze={home_team:t[1],away_team:t[2]};return t[0]!==void 0&&(ze.football_events=t[0]),t[8]!==void 0&&(ze.away_score=t[8]),t[7]!==void 0&&(ze.home_score=t[7]),pe=new Vt({props:ze}),Pe.push(()=>Oe(pe,"football_events",Ot)),Pe.push(()=>Oe(pe,"away_score",jt)),Pe.push(()=>Oe(pe,"home_score",Dt)),{c(){e=b("div"),l=b("div"),a=b("p"),i=R(n),o=R(":"),c=R(h),u=U(),f=b("p"),p=R(v),y=R(":"),k=R(_),A=U(),N=b("div"),M=b("button"),C=ce("svg"),T=ce("path"),K=U(),G=b("button"),be.c(),I=U(),B=b("button"),Z=ce("svg"),te=ce("path"),re=U(),ee=b("div"),z=b("p"),H=R(t[1]),he=U(),V=b("p"),D=R(t[7]),ne=R("-"),de=R(t[8]),ue=U(),O=b("p"),m=R(t[2]),Y=U(),Q=b("hr"),_e=U(),W=b("div"),se=b("div");for(let w=0;w<le.length;w+=1)le[w].c();Ee=U(),ke=b("span"),$e=U(),Te=b("div");for(let w=0;w<ae.length;w+=1)ae[w].c();Ze=U(),ve=b("div"),qe=b("hr"),et=U(),Bt(pe.$$.fragment),this.h()},l(w){e=g(w,"DIV",{class:!0});var L=E(e);l=g(L,"DIV",{class:!0});var x=E(l);a=g(x,"P",{class:!0});var q=E(a);i=F(q,n),o=F(q,":"),c=F(q,h),q.forEach(d),u=P(x),f=g(x,"P",{class:!0});var me=E(f);p=F(me,v),y=F(me,":"),k=F(me,_),me.forEach(d),x.forEach(d),A=P(L),N=g(L,"DIV",{class:!0});var Ae=E(N);M=g(Ae,"BUTTON",{type:!0,class:!0});var it=E(M);C=fe(it,"svg",{class:!0,"aria-hidden":!0,xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var ut=E(C);T=fe(ut,"path",{d:!0}),E(T).forEach(d),ut.forEach(d),it.forEach(d),K=P(Ae),G=g(Ae,"BUTTON",{type:!0,class:!0});var ct=E(G);be.l(ct),ct.forEach(d),I=P(Ae),B=g(Ae,"BUTTON",{type:!0,class:!0});var ft=E(B);Z=fe(ft,"svg",{class:!0,"aria-hidden":!0,xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var ht=E(Z);te=fe(ht,"path",{d:!0}),E(te).forEach(d),ht.forEach(d),ft.forEach(d),Ae.forEach(d),re=P(L),ee=g(L,"DIV",{class:!0});var Ne=E(ee);z=g(Ne,"P",{});var dt=E(z);H=F(dt,t[1]),dt.forEach(d),he=P(Ne),V=g(Ne,"P",{class:!0});var Xe=E(V);D=F(Xe,t[7]),ne=F(Xe,"-"),de=F(Xe,t[8]),Xe.forEach(d),ue=P(Ne),O=g(Ne,"P",{});var _t=E(O);m=F(_t,t[2]),_t.forEach(d),Ne.forEach(d),Y=P(L),Q=g(L,"HR",{class:!0}),L.forEach(d),_e=P(w),W=g(w,"DIV",{class:!0});var Ue=E(W);se=g(Ue,"DIV",{class:!0});var pt=E(se);for(let Ie=0;Ie<le.length;Ie+=1)le[Ie].l(pt);pt.forEach(d),Ee=P(Ue),ke=g(Ue,"SPAN",{class:!0}),E(ke).forEach(d),$e=P(Ue),Te=g(Ue,"DIV",{class:!0});var mt=E(Te);for(let Ie=0;Ie<ae.length;Ie+=1)ae[Ie].l(mt);mt.forEach(d),Ue.forEach(d),Ze=P(w),ve=g(w,"DIV",{class:!0});var Je=E(ve);qe=g(Je,"HR",{class:!0}),et=P(Je),At(pe.$$.fragment,Je),Je.forEach(d),this.h()},h(){r(a,"class","text-3xl absolute right-0"),r(f,"class","text-7xl pt-8 pb-3"),r(l,"class","relative"),r(T,"d","M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Z"),r(C,"class","w-6 h-6 text-gray-800 dark:text-white"),r(C,"aria-hidden","true"),r(C,"xmlns","http://www.w3.org/2000/svg"),r(C,"width","24"),r(C,"height","24"),r(C,"fill","currentColor"),r(C,"viewBox","0 0 24 24"),r(M,"type","button"),r(M,"class","btn-icon variant-filled-primary btn-icon-sm"),M.disabled=S=!t[6]||t[5],r(G,"type","button"),r(G,"class","btn-icon variant-filled-primary btn-icon-xl"),r(te,"d","M13.09 3.294c1.924.95 3.422 1.69 5.472.692a1 1 0 0 1 1.438.9v9.54a1 1 0 0 1-.562.9c-2.981 1.45-5.382.24-7.25-.701a38.739 38.739 0 0 0-.622-.31c-1.033-.497-1.887-.812-2.756-.77-.76.036-1.672.357-2.81 1.396V21a1 1 0 1 1-2 0V4.971a1 1 0 0 1 .297-.71c1.522-1.506 2.967-2.185 4.417-2.255 1.407-.068 2.653.453 3.72.967.225.108.443.216.655.32Z"),r(Z,"class","w-6 h-6 text-gray-800 dark:text-white"),r(Z,"aria-hidden","true"),r(Z,"xmlns","http://www.w3.org/2000/svg"),r(Z,"width","24"),r(Z,"height","24"),r(Z,"fill","currentColor"),r(Z,"viewBox","0 0 24 24"),r(B,"type","button"),r(B,"class","btn-icon variant-filled-primary btn-icon-sm"),B.disabled=j=t[6]||t[5],r(N,"class","w-4/5 flex justify-between items-center"),r(V,"class","text-4xl"),r(ee,"class","w-4/5 flex justify-between items-center mt-4"),r(Q,"class","!border-t-2 w-full mt-2"),r(e,"class","p-4 w-full flex flex-col justify-center items-center"),r(se,"class","flex flex-col space-y-4"),r(ke,"class","divider-vertical self-stretch"),r(Te,"class","flex flex-col space-y-4"),r(W,"class","flex justify-between items-center w-4/5"),r(qe,"class","!border-t-2 w-full"),r(ve,"class","p-4 w-full")},m(w,L){J(w,e,L),s(e,l),s(l,a),s(a,i),s(a,o),s(a,c),s(l,u),s(l,f),s(f,p),s(f,y),s(f,k),s(e,A),s(e,N),s(N,M),s(M,C),s(C,T),s(N,K),s(N,G),be.m(G,null),s(N,I),s(N,B),s(B,Z),s(Z,te),s(e,re),s(e,ee),s(ee,z),s(z,H),s(ee,he),s(ee,V),s(V,D),s(V,ne),s(V,de),s(ee,ue),s(ee,O),s(O,m),s(e,Y),s(e,Q),J(w,_e,L),J(w,W,L),s(W,se);for(let x=0;x<le.length;x+=1)le[x]&&le[x].m(se,null);s(W,Ee),s(W,ke),s(W,$e),s(W,Te);for(let x=0;x<ae.length;x+=1)ae[x]&&ae[x].m(Te,null);J(w,Ze,L),J(w,ve,L),s(ve,qe),s(ve,et),Nt(pe,ve,null),ie=!0,nt||(rt=[X(M,"click",t[14]),X(G,"click",t[12]),X(B,"click",t[13])],nt=!0)},p(w,L){if((!ie||L[0]&8)&&n!==(n=Math.floor(w[3]/60)+"")&&$(i,n),(!ie||L[0]&8)&&h!==(h=String(w[3]%60).padStart(2,"0")+"")&&$(c,h),(!ie||L[0]&80)&&v!==(v=Math.floor((w[6]?w[4]+Se:w[4])/60)+"")&&$(p,v),(!ie||L[0]&80)&&_!==(_=String((w[6]?w[4]+Se:w[4])%60).padStart(2,"0")+"")&&$(k,_),(!ie||L[0]&96&&S!==(S=!w[6]||w[5]))&&(M.disabled=S),Ge!==(Ge=st(w))&&(be.d(1),be=Ge(w),be&&(be.c(),be.m(G,null))),(!ie||L[0]&96&&j!==(j=w[6]||w[5]))&&(B.disabled=j),(!ie||L[0]&2)&&$(H,w[1]),(!ie||L[0]&128)&&$(D,w[7]),(!ie||L[0]&256)&&$(de,w[8]),(!ie||L[0]&4)&&$(m,w[2]),L[0]&198706){Ce=ge(De);let q;for(q=0;q<Ce.length;q+=1){const me=It(w,Ce,q);le[q]?le[q].p(me,L):(le[q]=Mt(me),le[q].c(),le[q].m(se,null))}for(;q<le.length;q+=1)le[q].d(1);le.length=Ce.length}if(L[0]&198708){Be=ge(De);let q;for(q=0;q<Be.length;q+=1){const me=Tt(w,Be,q);ae[q]?ae[q].p(me,L):(ae[q]=Ct(me),ae[q].c(),ae[q].m(Te,null))}for(;q<ae.length;q+=1)ae[q].d(1);ae.length=Be.length}const x={};L[0]&2&&(x.home_team=w[1]),L[0]&4&&(x.away_team=w[2]),!tt&&L[0]&1&&(tt=!0,x.football_events=w[0],Ve(()=>tt=!1)),!lt&&L[0]&256&&(lt=!0,x.away_score=w[8],Ve(()=>lt=!1)),!at&&L[0]&128&&(at=!0,x.home_score=w[7],Ve(()=>at=!1)),pe.$set(x)},i(w){ie||(Qe(pe.$$.fragment,w),ie=!0)},o(w){Ye(pe.$$.fragment,w),ie=!1},d(w){w&&(d(e),d(_e),d(W),d(Ze),d(ve)),be.d(),Le(le,w),Le(ae,w),Ut(pe),nt=!1,Me(rt)}}}function ul(t){let e,l;return{c(){e=ce("svg"),l=ce("path"),this.h()},l(a){e=fe(a,"svg",{class:!0,"aria-hidden":!0,xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var n=E(e);l=fe(n,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),E(l).forEach(d),n.forEach(d),this.h()},h(){r(l,"fill-rule","evenodd"),r(l,"d","M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"),r(l,"clip-rule","evenodd"),r(e,"class","w-[36px] h-[36px] text-gray-800 dark:text-white"),r(e,"aria-hidden","true"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"width","24"),r(e,"height","24"),r(e,"fill","currentColor"),r(e,"viewBox","0 0 24 24")},m(a,n){J(a,e,n),s(e,l)},d(a){a&&d(e)}}}function cl(t){let e,l;return{c(){e=ce("svg"),l=ce("path"),this.h()},l(a){e=fe(a,"svg",{class:!0,"aria-hidden":!0,xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var n=E(e);l=fe(n,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),E(l).forEach(d),n.forEach(d),this.h()},h(){r(l,"fill-rule","evenodd"),r(l,"d","M8 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H8Zm7 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1Z"),r(l,"clip-rule","evenodd"),r(e,"class","w-[36px] h-[36px] text-gray-800 dark:text-white"),r(e,"aria-hidden","true"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"width","24"),r(e,"height","24"),r(e,"fill","currentColor"),r(e,"viewBox","0 0 24 24")},m(a,n){J(a,e,n),s(e,l)},d(a){a&&d(e)}}}function Mt(t){let e,l,a,n,i;function o(){return t[19](t[37])}return{c(){e=b("button"),l=R(t[37]),this.h()},l(h){e=g(h,"BUTTON",{type:!0,class:!0});var c=E(e);l=F(c,t[37]),c.forEach(d),this.h()},h(){e.disabled=a=!t[5],r(e,"type","button"),r(e,"class","btn variant-filled-primary rounded-md")},m(h,c){J(h,e,c),s(e,l),n||(i=X(e,"click",o),n=!0)},p(h,c){t=h,c[0]&32&&a!==(a=!t[5])&&(e.disabled=a)},d(h){h&&d(e),n=!1,i()}}}function Ct(t){let e,l,a,n,i;function o(){return t[20](t[37])}return{c(){e=b("button"),l=R(t[37]),this.h()},l(h){e=g(h,"BUTTON",{type:!0,class:!0});var c=E(e);l=F(c,t[37]),c.forEach(d),this.h()},h(){e.disabled=a=!t[5],r(e,"type","button"),r(e,"class","btn variant-filled-tertiary rounded-md")},m(h,c){J(h,e,c),s(e,l),n||(i=X(e,"click",o),n=!0)},p(h,c){t=h,c[0]&32&&a!==(a=!t[5])&&(e.disabled=a)},d(h){h&&d(e),n=!1,i()}}}function fl(t){let e,l,a,n;const i=[il,sl],o=[];function h(c,u){return c[9]?0:1}return l=h(t),a=o[l]=i[l](t),{c(){e=b("div"),a.c(),this.h()},l(c){e=g(c,"DIV",{class:!0});var u=E(e);a.l(u),u.forEach(d),this.h()},h(){r(e,"class","h-full w-full flex justify-center items-center flex-col")},m(c,u){J(c,e,u),o[l].m(e,null),n=!0},p(c,u){let f=l;l=h(c),l===f?o[l].p(c,u):(Ht(),Ye(o[f],1,1,()=>{o[f]=null}),Lt(),a=o[l],a?a.p(c,u):(a=o[l]=i[l](c),a.c()),Qe(a,1),a.m(e,null))},i(c){n||(Qe(a),n=!0)},o(c){Ye(a),n=!1},d(c){c&&d(e),o[l].d()}}}let Se=2700;function hl(t,e,l){let a;const{saveAs:n}=Zt;let i=localStorage.getItem("home_team")||"",o=localStorage.getItem("away_team")||"",h=localStorage.getItem("football_events")?JSON.parse(localStorage.getItem("football_events")):[],c=Se,u=0,f=!1,v=!1,p=null,y=parseInt(localStorage.getItem("home_team_score")||"0"),_=parseInt(localStorage.getItem("away_team_score")||"0"),k=!1;function A(m,Y,Q,_e,W,se){Q=="goal"&&(m==i?l(7,y++,y):l(8,_++,_)),l(0,h=[...h,{team:m,time:Y+(v?Se:0),action:Q,player:_e,player_out:W,player_in:se}])}function N(){f?clearInterval(p):p=setInterval(()=>{c>0?(l(4,u++,u),l(3,c--,c)):clearInterval(p)},1e3),l(5,f=!f)}function M(){l(4,u=0),l(6,v=!0),l(3,c=Se)}function C(){l(5,f=!1),l(6,v=!1),l(4,u=0),l(3,c=Se),l(9,k=!1),localStorage.setItem("football_events",JSON.stringify(h)),localStorage.setItem("home_team",i),localStorage.setItem("home_team_score",y.toString()),localStorage.setItem("away_team",o),localStorage.setItem("away_team_score",_.toString()),new Audio(qt).play()}const T={ref:Xt},S={ref:Wt},K={ref:xt},G={type:"component",component:T,response:m=>{m&&(l(1,i=m.home_team_name),localStorage.setItem("home_team",i),l(2,o=m.away_team_name),l(9,k=!0),l(7,y=0),l(8,_=0),l(0,h=[]))}},I={type:"component",component:S,response:m=>{m&&A(`${j.team}`,j.time,j.action,m.player_name)}},B={type:"component",component:K,response:m=>{m&&A(`${j.team}`,j.time,j.action,void 0,m.player_out,m.player_in)}},Z=xe();function te(){Z.trigger(G)}let j={};function re(m,Y,Q){j={team:m,time:Y,action:Q},Z.trigger(I)}function ee(m,Y,Q){j={team:m,time:Y,action:Q},Z.trigger(B)}function z(){let m=`Time,Team,Action
`;h.forEach(Q=>{const _e=Math.floor(Q.time/60),W=String(Q.time%60).padStart(2,"0"),se=`${_e}:${W}`;m+=`${se},${Q.team},${Q.action}
`});const Y=new Blob([m],{type:"text/csv;charset=utf-8;"});n(Y,"football_events.csv")}const H=m=>{m=="goal"?re(i,u,m):m=="wissel"?ee(i,u,m):A(i,u,m)},he=m=>{m=="goal"?re(o,u,m):m=="wissel"?ee(o,u,m):A(o,u,m)};function V(m){h=m,l(0,h)}function D(m){_=m,l(8,_)}function ne(m){y=m,l(7,y)}function de(m){h=m,l(0,h)}function ue(m){_=m,l(8,_)}function O(m){y=m,l(7,y)}return t.$$.update=()=>{t.$$.dirty[0]&1&&l(10,a=h.length!=0)},[h,i,o,c,u,f,v,y,_,k,a,A,N,M,C,te,re,ee,z,H,he,V,D,ne,de,ue,O]}class ml extends Re{constructor(e){super(),Fe(this,e,hl,fl,He,{},null,[-1,-1])}}export{ml as component};
