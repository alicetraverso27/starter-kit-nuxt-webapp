// https://dev.to/andynoir/sitemap-for-dynamic-routes-in-nuxtjs-4b96
const generator = function () {
  this.nuxt.hook('generate:done', async (context) => {
    const allRoutes = await Array.from(context.generatedRoutes)
    this.nuxt.options.sitemap.routes = await [...allRoutes]
  })
}

export default generator
