// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modules#buildmodules
export default {
  buildModules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv',
    'library/nuxt',
    '@nuxt/image',
    '@/modules/generator', // https://dev.to/andynoir/sitemap-for-dynamic-routes-in-nuxtjs-4b96
  ],
}
