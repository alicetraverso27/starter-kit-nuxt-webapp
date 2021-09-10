<template>
  <div>
    <h1>Nuxt starterkit</h1>
    <h2>Rest todo</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <nuxt-link
          :to="localePath({ name: 'rest-id', params: { id: todo.id } })"
          >link to Todo id#{{ todo.id }}</nuxt-link
        >
      </li>
    </ul>
    <h2>Gql todo</h2>
    <ul>
      <li v-for="launch in launches" :key="launch.id">
        <nuxt-link
          :to="localePath({ name: 'gql-id', params: { id: launch.id } })"
          >link to Launch id#{{ launch.id }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { launchList } from '@/grapqhl/queries/launches.js'

export default {
  async asyncData({ app, $axios }) {
    // Rest API
    const todos = await $axios
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

    return { todos, launches }
  },
  head() {
    return {
      // Static Seo setup
      title: 'Webapp | Nuxt',
      ...this.i18nHead(
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
}
</script>
