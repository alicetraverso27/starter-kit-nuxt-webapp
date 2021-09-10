<template>
  <div>
    <h1>Server</h1>
    {{ results }}
    <h2>Client</h2>
    {{ clientData }}
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const todos = await $axios.$get(process.env.NUXT_ENV_REST_URL)
    return { results: todos }
  },
  data: () => ({
    seo: {
      title: '',
      htmlAttrs: {},
      meta: [],
      links: [],
    },
    clientData: null,
  }),
  head() {
    const title = this.seo?.title || ''
    return {
      title,
      ...this.i18nHead(
        this.seo,
        this.$nuxtI18nHead({ addSeoAttributes: true })
      ),
    }
  },
  async mounted() {
    this.clientData = await this.$axios.$get(process.env.NUXT_ENV_REST_URL)

    this.seo.title = 'Webapp | Nuxt'
    this.seo.meta = [
      {
        hid: 'description',
        name: 'description',
        content: 'Starter kit webapp Nuxt',
      },
      { hid: 'og:title', property: 'og:title', content: 'Webapp | Nuxt' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Starter kit webapp Nuxt',
      },
    ]
  },
}
</script>
