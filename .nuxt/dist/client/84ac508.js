(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{289:function(t,e,n){"use strict";n(39),n(290);var r=n(143),o=n(15);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={head:function(){var t,e,n,o,c,f,v,d,h=this.$nuxtI18nSeo(),title=null!==(t=this.seo)&&void 0!==t&&t.title?null===(e=this.seo)||void 0===e?void 0:e.title:"",O=null!==(n=this.seo)&&void 0!==n&&n.htmlAttrs?null===(o=this.seo)||void 0===o?void 0:o.htmlAttrs:[],meta=null!==(c=this.seo)&&void 0!==c&&c.meta?null===(f=this.seo)||void 0===f?void 0:f.meta:[],link=null!==(v=this.seo)&&void 0!==v&&v.link?null===(d=this.seo)||void 0===d?void 0:d.link:[];return{title:title,htmlAttrs:l(l({},h.htmlAttrs),O),meta:[].concat(Object(r.a)(h.meta),Object(r.a)(meta)),link:[].concat(Object(r.a)(h.link),Object(r.a)(link))}}}},290:function(t,e,n){"use strict";var r=n(7),o=n(291);r({target:"String",proto:!0,forced:n(292)("link")},{link:function(t){return o(this,"a","href",t)}})},291:function(t,e,n){var r=n(28),o=/"/g;t.exports=function(t,e,n,c){var l=String(r(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+String(c).replace(o,"&quot;")+'"'),f+">"+l+"</"+e+">"}},292:function(t,e,n){var r=n(10);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},293:function(t,e,n){"use strict";n.r(e);var r={},o=n(45),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Component")])}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,n){"use strict";n.r(e);n(26);var r,o,c,l=n(6),f=n(95),v=n.n(f),d={mixins:[n(289).a],asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://gorest.co.in/public-api/todos");case 3:return r=e.sent,e.abrupt("return",{results:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{seo:{title:"",htmlAttrs:[],meta:[],links:[]}}},mounted:function(){this.seo.title="Webapp | Nuxt",this.seo.meta=[{hid:"description",name:"description",content:"Starter kit webapp Nuxt"},{hid:"og:title",property:"og:title",content:"Webapp | Nuxt"},{hid:"og:description",property:"og:description",content:"Starter kit webapp Nuxt"}]},apollo:{ping:{query:v()(r||(o=["\n        query Ping {\n          ping\n        }\n      "],c||(c=o.slice(0)),r=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(c)}})))),prefetch:!0}}},h=n(45),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MyComponent"),t._v("\n  test "+t._s(t.$i18n.locale)+"\n  "),n("p",[t._v("GQL Calls: "+t._s(t.ping))]),t._v(" "),n("p",[t._v("Api Calls: "+t._s(t.results))])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MyComponent:n(293).default})}}]);