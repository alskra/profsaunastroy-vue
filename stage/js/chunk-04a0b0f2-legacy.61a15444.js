(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04a0b0f2","chunk-5748233f"],{"2f6c":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.breadcrumb.length>1?n("nav",{staticClass:"page-breadcrumb"},[n("div",{staticClass:"items"},e._l(e.breadcrumb,function(t,o){return n("div",{key:t.id,staticClass:"item"},[n("router-link",{staticClass:"item__title",attrs:{to:t.url}},[e._v(e._s(t.title))]),o!==e.breadcrumb.length-1?n("div",{staticClass:"item__delimiter"},[e._v(">")]):e._e()],1)}))]):e._e()},a=[],i=(n("ac6a"),n("cadf"),n("551c"),n("097d"),{name:"PageBreadcrumb",data:function(){return{breadcrumb:[{id:1,title:"Главная",url:{name:"Home"}}]}},methods:{setData:function(){var e=this;this.breadcrumb.splice(1,this.breadcrumb.length),this.$route.matched.forEach(function(t){t.meta.breadcrumb&&e.breadcrumb.push({id:e.breadcrumb.length+1,title:t.meta.title,url:t.meta.url})})}},created:function(){this.setData()},watch:{$route:function(){this.setData()}}}),r=i,l=(n("38a9"),n("2877")),s=Object(l["a"])(r,o,a,!1,null,"c5adda74",null);s.options.__file="PageBreadcrumb.vue";t["default"]=s.exports},"38a9":function(e,t,n){"use strict";var o=n("ece8"),a=n.n(o);a.a},"570a":function(e,t,n){var o=n("e878");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("499e").default;a("4353a50b",o,!0,{sourceMap:!1,shadowMode:!1})},6878:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'\n@charset "UTF-8";\n.page-breadcrumb[data-v-c5adda74],.page-breadcrumb .item__title[data-v-c5adda74]{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;-o-border-image:none;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;-webkit-columns:auto;columns:auto;-webkit-column-count:auto;column-count:auto;-webkit-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;column-gap:normal;-webkit-column-rule:medium none currentColor;column-rule:medium none currentColor;-webkit-column-span:1;column-span:1;-webkit-column-width:auto;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;right:auto;-moz-tab-size:8;-o-tab-size:8;tab-size:8;table-layout:auto;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;quotes:"\\201C" "\\201D" "\\2018" "\\2019";font-family:var(--content-font-family);text-align:left;color:var(--content-color);outline-color:var(--content-color);display:block;box-sizing:border-box\n}\n.page-breadcrumb.focus-visible[data-v-c5adda74],.page-breadcrumb .item__title.focus-visible[data-v-c5adda74]{outline:.0625rem dotted currentColor;outline:.3125rem auto -webkit-focus-ring-color\n}\n.page-breadcrumb .item[data-v-c5adda74]{display:inline\n}\n.page-breadcrumb .item__title[data-v-c5adda74]{display:inline;font-weight:300;font-size:calc(var(--content-font-size)*14/16);color:var(--content-headings-color);cursor:pointer;transition:color .15s ease-in-out\n}\n.page-breadcrumb .item__title[data-v-c5adda74]:hover{color:var(--content-link-color)\n}\n.page-breadcrumb .item__delimiter[data-v-c5adda74]{display:inline;padding:0 .25rem;color:var(--content-headings-color)\n}',""])},d028:function(e,t,n){"use strict";var o=n("570a"),a=n.n(o);a.a},e878:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'\n@charset "UTF-8";\n.articles-page[data-v-8038e24a]{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;-o-border-image:none;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;-webkit-columns:auto;columns:auto;-webkit-column-count:auto;column-count:auto;-webkit-column-fill:balance;column-fill:balance;-webkit-column-gap:normal;column-gap:normal;-webkit-column-rule:medium none currentColor;column-rule:medium none currentColor;-webkit-column-span:1;column-span:1;-webkit-column-width:auto;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;-webkit-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;position:static;right:auto;-moz-tab-size:8;-o-tab-size:8;tab-size:8;table-layout:auto;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transform-style:flat;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;quotes:"\\201C" "\\201D" "\\2018" "\\2019";font-family:var(--content-font-family);text-align:left;color:var(--content-color);outline-color:var(--content-color);display:block;box-sizing:border-box\n}\n.articles-page.focus-visible[data-v-8038e24a]{outline:.0625rem dotted currentColor;outline:.3125rem auto -webkit-focus-ring-color\n}\n.articles-page[data-v-8038e24a]{padding:3rem 0\n}\n.breadcrumb[data-v-8038e24a]{margin-bottom:2rem\n}\n.main[data-v-8038e24a]{max-width:60rem;margin:0 auto\n}\n@media (max-width:59.9375rem){\n.articles-page[data-v-8038e24a]{padding:2rem 0\n}\n.breadcrumb[data-v-8038e24a]{margin-bottom:1.5rem\n}\n}',""])},ece8:function(e,t,n){var o=n("6878");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("499e").default;a("253870c2",o,!0,{sourceMap:!1,shadowMode:!1})},fdc5:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"articles-page"},[n("div",{staticClass:"container"},[n("div",{staticClass:"breadcrumb"},[n("page-breadcrumb")],1),n("div",{staticClass:"main"},[n("router-view",{attrs:{name:"ArticleView"}})],1)]),n("router-view",{attrs:{name:"RequestSect"}})],1)},a=[],i=(n("cadf"),n("551c"),n("097d"),n("2f6c")),r={name:"ArticlesPage",components:{PageBreadcrumb:i["default"]}},l=r,s=(n("d028"),n("2877")),c=Object(s["a"])(l,o,a,!1,null,"8038e24a",null);c.options.__file="ArticlesPage.vue";t["default"]=c.exports}}]);