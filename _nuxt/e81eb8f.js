(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(t,e,r){"use strict";r.r(e);var o={name:"GithubCorner"},n=(r(317),r(70)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"github-corner",attrs:{href:"https://github.com/markbrouch/virtual-background-demo","aria-label":"View source on GitHub"}},[r("svg",{staticStyle:{fill:"#fff",color:"#151513",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[r("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),t._v(" "),r("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),t._v(" "),r("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])}),[],!1,null,null,null);e.default=component.exports},216:function(t,e,r){var content=r(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("9b63f528",content,!0,{sourceMap:!1})},219:function(t,e,r){var content=r(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("09608622",content,!0,{sourceMap:!1})},242:function(t,e,r){"use strict";var o={name:"DefaultLayout",components:{GithubCorner:r(171).default}},n=r(70),c=r(116),l=r.n(c),f=r(389),d=r(390),h=r(391),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-main",[r("v-container",[r("GithubCorner"),t._v(" "),r("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{GithubCorner:r(171).default}),l()(component,{VApp:f.a,VContainer:d.a,VMain:h.a})},263:function(t,e,r){r(264),r(265),t.exports=r(267)},301:function(t,e,r){"use strict";r.r(e),e.default=function(t){var e=t.redirect;if(!window.OffscreenCanvas)return e("/browser-not-supported")}},311:function(t,e,r){"use strict";r(216)},312:function(t,e,r){var o=r(60)(!1);o.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=o},317:function(t,e,r){"use strict";r(219)},318:function(t,e,r){var o=r(60)(!1);o.push([t.i,".github-corner:hover .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}@-webkit-keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{-webkit-animation:none;animation:none}.github-corner .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}}",""]),t.exports=o},71:function(t,e,r){"use strict";var o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(r(311),r(70)),c=r(116),l=r.n(c),f=r(389),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[263,5,1,6]]]);