(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{289:function(t,e,n){"use strict";n(39),n(290);var r=n(143),o=n(15);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={head:function(){var t,e,n,o,c,h,v,f,d=this.$nuxtI18nSeo(),title=null!==(t=this.seo)&&void 0!==t&&t.title?null===(e=this.seo)||void 0===e?void 0:e.title:"",m=null!==(n=this.seo)&&void 0!==n&&n.htmlAttrs?null===(o=this.seo)||void 0===o?void 0:o.htmlAttrs:[],meta=null!==(c=this.seo)&&void 0!==c&&c.meta?null===(h=this.seo)||void 0===h?void 0:h.meta:[],link=null!==(v=this.seo)&&void 0!==v&&v.link?null===(f=this.seo)||void 0===f?void 0:f.link:[];return{title:title,htmlAttrs:l(l({},d.htmlAttrs),m),meta:[].concat(Object(r.a)(d.meta),Object(r.a)(meta)),link:[].concat(Object(r.a)(d.link),Object(r.a)(link))}}}},290:function(t,e,n){"use strict";var r=n(7),o=n(291);r({target:"String",proto:!0,forced:n(292)("link")},{link:function(t){return o(this,"a","href",t)}})},291:function(t,e,n){var r=n(28),o=/"/g;t.exports=function(t,e,n,c){var l=String(r(t)),h="<"+e;return""!==n&&(h+=" "+n+'="'+String(c).replace(o,"&quot;")+'"'),h+">"+l+"</"+e+">"}},292:function(t,e,n){var r=n(10);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},293:function(t,e,n){"use strict";n.r(e);var r={},o=n(45),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Component")])}),[],!1,null,null,null);e.default=component.exports},295:function(t,e,n){"use strict";n.r(e);n(26);var r=n(6),o={mixins:[n(289).a],asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://gorest.co.in/public-api/todos");case 3:return r=e.sent,e.abrupt("return",{results:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{seo:{title:"",htmlAttrs:[],meta:[],links:[]}}},mounted:function(){this.seo.title="Webapp | Nuxt",this.seo.meta=[{hid:"description",name:"description",content:"Starter kit webapp Nuxt"},{hid:"og:title",property:"og:title",content:"Webapp | Nuxt"},{hid:"og:description",property:"og:description",content:"Starter kit webapp Nuxt"}]}},c=n(45),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nuxt-link",{attrs:{to:t.switchLocalePath("en")}},[t._v("English")]),t._v(" "),n("nuxt-link",{attrs:{to:t.switchLocalePath("it")}},[t._v("Italiano")]),t._v(" "),n("MyComponent"),t._v("\n  home "+t._s(t.$i18n.locale)+"\n  "),n("p",[t._v("GQL Calls: "+t._s(t.ping))]),t._v(" "),n("p",[t._v("Api Calls: "+t._s(t.results))])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MyComponent:n(293).default})}}]);