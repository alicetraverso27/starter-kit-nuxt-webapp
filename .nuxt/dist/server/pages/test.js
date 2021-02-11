exports.ids = [2];
exports.modules = {

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  head() {
    var _this$seo, _this$seo2, _this$seo3, _this$seo4, _this$seo5, _this$seo6, _this$seo7, _this$seo8;

    const i18nSeo = this.$nuxtI18nSeo();
    const title = (_this$seo = this.seo) !== null && _this$seo !== void 0 && _this$seo.title ? (_this$seo2 = this.seo) === null || _this$seo2 === void 0 ? void 0 : _this$seo2.title : '';
    const htmlAttrs = (_this$seo3 = this.seo) !== null && _this$seo3 !== void 0 && _this$seo3.htmlAttrs ? (_this$seo4 = this.seo) === null || _this$seo4 === void 0 ? void 0 : _this$seo4.htmlAttrs : [];
    const meta = (_this$seo5 = this.seo) !== null && _this$seo5 !== void 0 && _this$seo5.meta ? (_this$seo6 = this.seo) === null || _this$seo6 === void 0 ? void 0 : _this$seo6.meta : [];
    const link = (_this$seo7 = this.seo) !== null && _this$seo7 !== void 0 && _this$seo7.link ? (_this$seo8 = this.seo) === null || _this$seo8 === void 0 ? void 0 : _this$seo8.link : [];
    return {
      title,
      htmlAttrs: { ...i18nSeo.htmlAttrs,
        ...htmlAttrs
      },
      meta: [...i18nSeo.meta, ...meta],
      link: [...i18nSeo.link, ...link]
    };
  }

});

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MyComponent.vue?vue&type=template&id=09c412a9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("Component")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MyComponent.vue?vue&type=template&id=09c412a9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MyComponent.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var MyComponentvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/MyComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MyComponentvue_type_script_lang_js_ = (MyComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/MyComponent.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MyComponentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "eb1206a2"
  
)

/* harmony default export */ var MyComponent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=template&id=6ce3b758&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('MyComponent'),_vm._ssrNode(_vm._ssrEscape("\n  test "+_vm._s(_vm.$i18n.locale)+"\n  ")+"<p>"+_vm._ssrEscape("GQL Calls: "+_vm._s(_vm.ping))+"</p> <p>"+_vm._ssrEscape("Api Calls: "+_vm._s(_vm.results))+"</p>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/test.vue?vue&type=template&id=6ce3b758&

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(44);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: ./mixins/i18nSeo.js
var i18nSeo = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var testvue_type_script_lang_js_ = ({
  mixins: [i18nSeo["a" /* default */]],

  async asyncData({
    $axios
  }) {
    const todos = await $axios.$get('https://gorest.co.in/public-api/todos');
    return {
      results: todos
    };
  },

  data: () => ({
    seo: {
      title: '',
      htmlAttrs: [],
      meta: [],
      links: []
    }
  }),

  mounted() {
    this.seo.title = 'Webapp | Nuxt';
    this.seo.meta = [{
      hid: 'description',
      name: 'description',
      content: 'Starter kit webapp Nuxt'
    }, {
      hid: 'og:title',
      property: 'og:title',
      content: 'Webapp | Nuxt'
    }, {
      hid: 'og:description',
      property: 'og:description',
      content: 'Starter kit webapp Nuxt'
    }];
  },

  apollo: {
    ping: {
      query: external_graphql_tag_default.a`
        query Ping {
          ping
        }
      `,
      prefetch: true
    }
  }
});
// CONCATENATED MODULE: ./pages/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/test.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "581bc194"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyComponent: __webpack_require__(46).default})


/***/ })

};;
//# sourceMappingURL=test.js.map