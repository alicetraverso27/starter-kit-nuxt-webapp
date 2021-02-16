<template>
  <div v-viewportSizes v-detectHoverTouch v-move>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
