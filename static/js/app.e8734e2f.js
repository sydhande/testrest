(function(e){function n(n){for(var r,a,u=n[0],i=n[1],s=n[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-65631148":"572f0539","chunk-070d9bfa":"29ca3623","chunk-4b3854cc":"3973774b","chunk-6733cbc3":"edb0e278","chunk-66d960ff":"b0fb63a7"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-070d9bfa":1,"chunk-4b3854cc":1,"chunk-6733cbc3":1,"chunk-66d960ff":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-65631148":"31d6cfe0","chunk-070d9bfa":"4d9f074c","chunk-4b3854cc":"2f0c641e","chunk-6733cbc3":"908628c4","chunk-66d960ff":"f1df5ba7"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),t(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),a=t.n(r);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e._m(0),t("div",{staticClass:"container mt-3"},[t("router-view")],1)])},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[t("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("SSRP")]),t("div",{staticClass:"navbar-nav mr-auto"},[t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link",attrs:{href:"/owner"}},[e._v("Owner")])]),t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link",attrs:{href:"/add"}},[e._v("Add")])])])])}],c={name:"App"},u=c,i=(t("034f"),t("2877")),s=Object(i["a"])(u,a,o,!1,null,null,null),l=s.exports,f=(t("d3b7"),t("8c4f"));r["a"].use(f["a"]);var d=new f["a"]({mode:"history",routes:[{path:"/",alias:"/owner",name:"owner",component:function(){return Promise.all([t.e("chunk-65631148"),t.e("chunk-6733cbc3")]).then(t.bind(null,"0fb4"))}},{path:"/owner/:id/",name:"owner-details",component:function(){return Promise.all([t.e("chunk-65631148"),t.e("chunk-4b3854cc")]).then(t.bind(null,"26ae"))}},{path:"/add",name:"add-owner",component:function(){return Promise.all([t.e("chunk-65631148"),t.e("chunk-070d9bfa")]).then(t.bind(null,"98a9"))}},{path:"*",component:function(){return t.e("chunk-66d960ff").then(t.bind(null,"42ec"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:d,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.e8734e2f.js.map