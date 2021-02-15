const structure = {
  htmlAttrs: {},
  meta: [],
  link: [],
}

const install = (Vue) => {
  Vue.prototype.i18nTags = (tags = structure, $nuxtI18nSeo = structure) => {
    const htmlAttrs = { ...$nuxtI18nSeo.htmlAttrs, ...tags.htmlAttrs }
    const meta = Object.values({ ...$nuxtI18nSeo.meta, ...tags.meta })
    const link = Object.values({ ...$nuxtI18nSeo.link, ...tags.link })

    return {
      htmlAttrs,
      meta,
      link,
    }
  }
}

export default install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}
