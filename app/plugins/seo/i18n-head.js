const structure = {
  htmlAttrs: {},
  meta: [],
  link: [],
}

const install = (Vue) => {
  Vue.prototype.i18nHead = (tags = structure, i18nHead= structure) => {
    const htmlAttrs = { ...i18nHead.htmlAttrs, ...tags.htmlAttrs }
    const meta = Object.values({ ...i18nHead.meta, ...tags.meta })
    const link = Object.values({ ...i18nHead.link, ...tags.link })

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
