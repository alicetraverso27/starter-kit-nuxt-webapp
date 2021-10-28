<template>
  <div></div>
</template>

<script>
import seoHead from '@/mixins/seo.js'
import { HomeData } from '@/graphql/queries/home.js'

export default {
  mixins: [seoHead],
  async asyncData({ app, error, route }) {
    try {
      const response = await app.apolloProvider.defaultClient
        .query({
          query: HomeData,
          variables: {
            locale: app.i18n.locale,
          },
        })
        .then(({ data }) => data.home)

      if (!response) return error({ statusCode: 404 })

      const { seo, content } = response

      return {
        content,
        seo: app.$generateTags({ ...seo, url: route.fullPath }),
      }
    } catch (e) {
      console.error(e)
      return error({ statusCode: 404 })
    }
  },
  mounted() {
    console.log(typeof this.$generateTags)
  },
}
</script>
