<template>
  <div>
    <h1>{{ launch.mission_name }}</h1>
    <p>Launch #{{ launch.id }}</p>
    <nuxt-link :to="localePath({ name: 'index' })">Back to home</nuxt-link>
  </div>
</template>
<script>
import { launchInfo } from "@/graphql/queries/launches.js";

export default {
  async asyncData({ app, params, error }) {
    const launch = await app.apolloProvider.defaultClient
      .query({
        query: launchInfo,
        variables: {
          id: params.id,
        },
      })
      .then(({ data }) => data.launch);

    if (!launch) return error({ statusCode: 404 });

    const seo = {
      title: launch.mission_name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Launch ${launch.id}`,
        },
        { hid: "og:title", property: "og:title", content: launch.mission_name },
        {
          hid: "og:description",
          property: "og:description",
          content: `Launch ${launch.id}`,
        },
      ],
    };

    return { launch, seo };
  },
  head() {
    // Dynamic Seo setup /plugins/seo/i18n-head.js
    return {
      title: this.seo.title,
      ...this.$i18nHead(this.seo, this.$nuxtI18nHead({ addSeoAttributes: true })),
    };
  },
};
</script>
