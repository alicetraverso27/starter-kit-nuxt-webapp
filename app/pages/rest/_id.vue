<template>
  <div>
    <h1>{{ todo.title }}</h1>
    <p>Todo #{{ todo.id }}</p>
    <nuxt-link :to="localePath({ name: 'index' })">Back to home</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ params, error, $axios }) {
    const todo = await $axios
      .$get(process.env.NUXT_ENV_REST_URL)
      .then(({ data }) => data.find((todo) => todo.id.toString() === params.id))

    if (!todo) return error({ statusCode: 404 })

    const seo = {
      title: todo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Todo ${todo.id}`,
        },
        { hid: 'og:title', property: 'og:title', content: todo.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Todo ${todo.id}`,
        },
      ],
    }

    return { todo, seo }
  },
  head() {
    // Dynamic Seo setup /plugins/seo/i18n-head.js
    return {
      title: this.seo.title,
      ...this.i18nHead(
        this.seo,
        this.$nuxtI18nHead({ addSeoAttributes: true })
      ),
    }
  },
}
</script>
