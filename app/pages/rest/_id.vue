<template>
  <div>
    <h1>{{ item.title }}</h1>
    <p>Item #{{ item.id }}</p>
    <nuxt-link :to="localePath({ name: 'index' })">Back to home</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ params, error, $axios }) {
    try {
      const item = await $axios
        .$get(process.env.NUXT_ENV_REST_URL)
        .then(({ data }) =>
          data.find((item) => item.id.toString() === params.id)
        )

      if (!item) return error({ statusCode: 404 })

      const seo = {
        title: item.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `Item ${item.id}`,
          },
          { hid: 'og:title', property: 'og:title', content: item.title },
          {
            hid: 'og:description',
            property: 'og:description',
            content: `Item ${item.id}`,
          },
        ],
      }

      return { item, seo }
    } catch (e) {
      console.log(e)
      error({ statusCode: 404 })
    }
  },
  head() {
    // Dynamic Seo setup /plugins/seo/i18n-head.js
    return {
      title: this.seo.title,
      ...this.$i18nHead(
        this.seo,
        this.$nuxtI18nHead({ addSeoAttributes: true })
      ),
    }
  },
}
</script>
