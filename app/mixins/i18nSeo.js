export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo()

    const title = this.seo?.title ? this.seo.title : ''
    const htmlAttrs = this.seo?.htmlAttrs ? this.seo.htmlAttrs : {}
    const meta = this.seo?.meta ? this.seo.meta : []
    const link = this.seo?.link ? this.seo.link : []

    return {
      title,
      htmlAttrs: { ...i18nSeo.htmlAttrs, ...htmlAttrs },
      meta: Object.values({ ...i18nSeo.meta, ...meta }),
      link: Object.values({ ...i18nSeo.link, ...link }),
    }
  },
}
