<template>
  <div>
    <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
    <nuxt-link :to="switchLocalePath('it')">Italiano</nuxt-link>
    <MyComponent />
    home {{ $i18n.locale }}
    <p>GQL Calls: {{ ping }}</p>
    <p>Api Calls: {{ results }}</p>
  </div>
</template>

<script>
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
}
</script>

<style lang="scss"></style>
