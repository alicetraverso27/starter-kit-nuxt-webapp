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
    <p class="margin-10">weewrwrew</p>
    <input type="text" placeholder="mona" />
    <div class="row">
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
      <h1>TESTSTETSTfef</h1>
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

<style lang="scss">
body {
  @include gesture('pointer') {
    background: #cc0000;
  }
}
.row {
  padding: 25px;
  margin: auto;
  background: #ccc;
  .video-js {
    width: 100%;
  }
}
p {
  @include clamp('margin', (100px 10vw 200px, 150px 25vw 300px));
}

h1 {
  // $property: 'font-size', $sizes: ('<large': 12px , '>=large': 50px)
  @include break(
    'font-size',
    (
      '<large': 12px,
      '>=large': 50px,
    )
  );
  @include break(
    'margin',
    (
      '<large': 12px 50px,
      '>=large': 222px 550px,
    )
  );
}

@include static('margin', 'margin', 1, 100);
</style>
