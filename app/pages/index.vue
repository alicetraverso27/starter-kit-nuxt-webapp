<template>
  <div>
    <h1>Nuxt starterkit</h1>
    <h2>Rest items</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        <nuxt-link
          :to="localePath({ name: 'rest-id', params: { id: item.id } })"
          >link to Item id#{{ item.id }}</nuxt-link
        >
      </li>
    </ul>
    <h2>Gql launches</h2>
    <ul>
      <li v-for="launch in launches" :key="launch.id">
        <nuxt-link
          :to="localePath({ name: 'gql-id', params: { id: launch.id } })"
          >link to Launch id#{{ launch.id }}</nuxt-link
        >
      </li>
    </ul>
    <h2>Local AsyncData API</h2>
    <p>{{ localAPI }}</p>
    <h2>Local Mounted API</h2>
    <p>{{ localMountedAPI }}</p>
  </div>
</template>

<script>
import { launchList } from '@/graphql/queries/launches.js'

export default {
  async asyncData({ app, $axios, error }) {
    try {
      // Rest API
      const items = await $axios
        .$get(process.env.NUXT_ENV_REST_URL)
        .then(({ data }) => data)

      // GraphQL API
      const launches = await app.apolloProvider.defaultClient
        .query({
          query: launchList,
          variables: {
            limit: 10,
          },
        })
        .then(({ data }) => data.launches)

      const localAPI = await $axios.$post(
        `${process.env.NUXT_ENV_BASE_URL}/api/my-api`,
        {
          params: 'Tobi',
        }
      )

      return { items, launches, localAPI }
    } catch (e) {
      console.error(e)
      error({ statusCode: 404 })
    }
  },
  data: () => ({
    localMountedAPI: undefined,
  }),
  head() {
    return {
      // Static Seo setup
      title: 'Webapp | Nuxt',
      ...this.$i18nHead(
        {
          meta: [
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
          ],
        },
        this.$nuxtI18nHead({ addSeoAttributes: true })
      ),
    }
  },
  async mounted() {
    this.localMountedAPI = await this.$axios
      .$post(`${process.env.NUXT_ENV_BASE_URL}/api/my-api`, {
        params: 'Tobi',
      })
      .catch((e) => console.error(e))
  },
}
</script>
