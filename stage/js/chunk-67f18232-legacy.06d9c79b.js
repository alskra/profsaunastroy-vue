(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67f18232"],{"0bf8":function(t,e,n){"use strict";var o=n("38b3"),i=n.n(o);i.a},"0bfb":function(t,e,n){"use strict";var o=n("cb7c");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0e4b":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'\n@charset "UTF-8";\n.article-view[data-v-534b4d32],.header__title[data-v-534b4d32]{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;-o-border-image:none;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;-webkit-columns:auto;columns:auto;-webkit-column-count:auto;column-count:auto;-webkit-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;column-gap:normal;-webkit-column-rule:medium none currentColor;column-rule:medium none currentColor;-webkit-column-span:1;column-span:1;-webkit-column-width:auto;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;right:auto;-moz-tab-size:8;-o-tab-size:8;tab-size:8;table-layout:auto;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;quotes:"\\201C" "\\201D" "\\2018" "\\2019";font-family:var(--content-font-family);text-align:left;color:var(--content-color);outline-color:var(--content-color);display:block;box-sizing:border-box\n}\n.article-view.focus-visible[data-v-534b4d32],.header__title.focus-visible[data-v-534b4d32]{outline:.0625rem dotted currentColor;outline:.3125rem auto -webkit-focus-ring-color\n}\n.header[data-v-534b4d32]{margin-bottom:2rem\n}\n.header__title[data-v-534b4d32]{font-family:var(--content-headings-font-family);font-weight:var(--content-headings-font-weight);font-size:var(--content-h1-font-size);line-height:var(--content-headings-line-height);color:var(--content-headings-color);margin-bottom:.5rem\n}\n.header__datetime[data-v-534b4d32],.header__share[data-v-534b4d32]{font-weight:300;font-size:calc(var(--content-font-size)*14/16);line-height:1.25;color:var(--content-headings-color)\n}\n.header__share[data-v-534b4d32]{display:inline\n}',""])},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"38b3":function(t,e,n){var o=n("0e4b");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("499e").default;i("abdc1046",o,!0,{sourceMap:!1,shadowMode:!1})},"6b54":function(t,e,n){"use strict";n("3846");var o=n("cb7c"),i=n("0bfb"),a=n("9e1e"),r="toString",s=/./[r],l=function(t){n("2aba")(RegExp.prototype,r,t,!0)};n("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?l(function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?i.call(t):void 0)}):s.name!=r&&l(function(){return s.call(this)})},e713:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.err||t.article&&t.article.id?n("article",{staticClass:"article-view"},[t.err?n("div",{staticClass:"err"},[t._v(t._s(t.err))]):t.article&&t.article.id?[n("header",{staticClass:"header"},[n("h1",{staticClass:"header__title"},[t._v(t._s(t.article.title))]),n("div",{staticClass:"header__row row justify-content-between"},[n("div",{staticClass:"header__col col-auto mw-100"},[n("time",{staticClass:"header__datetime",attrs:{datetime:new Date(t.article.date).toISOString(),title:t.dateString+" "+t.timeString}},[t._v(t._s(t.dateString))])]),t._m(0)])]),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.article.body)}})]:t._e()],2):t._e()},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header__col col-auto mw-100"},[n("div",{staticClass:"header__share"},[t._v("Поделиться PULSO")])])}],a=(n("6b54"),n("cadf"),n("551c"),n("097d"),{name:"ArticleView",data:function(){return{err:null,article:null}},computed:{dateString:function(){return new Date(this.article.date).toLocaleDateString("ru",{year:"numeric",month:"long",day:"2-digit"})},timeString:function(){return new Date(this.article.date).toLocaleTimeString("ru",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}},methods:{setData:function(t,e){t?this.err=t.toString():this.article=e}},beforeRouteEnter:function(t,e,n){fetch("https://my-json-server.typicode.com/alskra/profsaunastroy-vue/articles/"+t.params.articleId).then(function(t){return t.json()}).then(function(t){return n(function(e){return e.setData(null,t)})}).catch(function(t){return n(function(e){return e.setData(t,null)})})},beforeRouteUpdate:function(t,e,n){var o=this;this.err=this.article=null,fetch("https://my-json-server.typicode.com/alskra/profsaunastroy-vue/articles/"+t.params.articleId).then(function(t){return t.json()}).then(function(t){return o.setData(null,t),n()}).catch(function(t){return o.setData(t,null),n()})}}),r=a,s=(n("0bf8"),n("2877")),l=Object(s["a"])(r,o,i,!1,null,"534b4d32",null);l.options.__file="ArticleView.vue";e["default"]=l.exports}}]);