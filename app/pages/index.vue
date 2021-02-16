<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      smooth: true,
      direction: 'vertical',
      smartphone: {
        smooth: true,
        direction: 'vertical',
      },
      tablet: {
        smooth: true,
        direction: 'vertical',
      },
    }"
  >
  <input type="text" placeholder="mona" />
    <div>
      <VideoPlayer
        ref="video"
        :options="{
          loadingSpinner: true,
          autoplay: true,
          muted: false,
          controls: true,
          loop: true,
          playsinline: true,
          preload: 'auto',
          sources: [
            {
              src:
                'https://player.vimeo.com/external/438820261.hd.mp4?s=b3352a6e1751a4c3c414f15f819cf3cf0e86868f&profile_id=175',
              type: 'video/mp4',
            },
          ],
        }"
      />
      <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
      <nuxt-link :to="switchLocalePath('it')">Italiano</nuxt-link>
      home {{ $i18n.locale }}
      <p>GQL Calls: {{ ping }}</p>
      <p>Api Calls: {{ results }}</p>
    </div>
  </LocomotiveScroll>
</template>

<script>
import gql from 'graphql-tag'

export default {
  async asyncData({ $axios }) {
    const todos = await $axios.$get('https://gorest.co.in/public-api/todos')
    return { results: todos }
  },
  data: () => ({
    seo: {
      title: '',
      htmlAttrs: {},
      meta: [],
      links: [],
    },
  }),
  head() {
    const title = this.seo?.title ? this.seo.title : ''
    return {
      title,
      ...this.i18nTags(this.seo, this.$nuxtI18nSeo()),
    }
  },
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
