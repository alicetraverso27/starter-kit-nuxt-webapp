export default {
  head() {
    const title = this.seo.title
    return {
      title,
      ...this.$i18nHead(
        this.seo,
        this.$nuxtI18nHead({ addSeoAttributes: true })
      ),
    }
  },
}
