<template>
  <div>
    <MyComponent />
    <p>GQL Calls: {{ ping }}</p>
    <p>Api Calls: {{ results }}</p>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import i18nSeo from '@/mixins/i18nSeo.js'

export default {
  mixins: [i18nSeo],
  async asyncData({ $axios }) {
    const todos = await $axios.$get('https://gorest.co.in/public-api/todos')
    return { results: todos }
  },
  data: () => ({
    seo: {
      title: '',
      htmlAttrs: [],
      meta: [],
      links: [],
    },
  }),
  mounted() {
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
  apollo: {
    ping: {
      query: gql`
        query Ping {
          ping
        }
      `,
      prefetch: true,
    },
  },
}
</script>

<style lang="scss"></style>
