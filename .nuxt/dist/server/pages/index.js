exports.ids = [1];
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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=3c8410af&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nuxt-link',{attrs:{"to":_vm.switchLocalePath('en')}},[_vm._v("English")]),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":_vm.switchLocalePath('it')}},[_vm._v("Italiano")]),_vm._ssrNode(" "),_c('MyComponent'),_vm._ssrNode(_vm._ssrEscape("\n  home "+_vm._s(_vm.$i18n.locale)+"\n  ")+"<p>"+_vm._ssrEscape("GQL Calls: "+_vm._s(_vm.ping))+"</p> <p>"+_vm._ssrEscape("Api Calls: "+_vm._s(_vm.results))+"</p>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=3c8410af&

// EXTERNAL MODULE: ./mixins/i18nSeo.js
var i18nSeo = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
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
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "779ba780"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MyComponent: __webpack_require__(46).default})


/***/ })

};;
//# sourceMappingURL=index.js.map