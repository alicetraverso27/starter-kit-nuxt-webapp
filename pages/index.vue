<template>
  <div class="container">
    <MyComponent />
    <p>Api Calls: {{ ping }} {{ ip }}</p>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const ping = gql`
  query Ping {
    ping
  }
`

export default {
  async asyncData({ $axios }) {
    const ip = await $axios.$get('http://icanhazip.com')
    return { ip }
  },
  apollo: {
    ping: {
      query: ping,
      prefetch: true,
    },
  },
}
</script>

<style lang="scss"></style>
