// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build
import { resolve } from 'path'

export default {
  build: {
    transpile: ['gsap'],
    extend(config, ctx) {
      // Add '~/library' as an alias.
      // https://github.com/nuxt/vercel-builder/blob/main/examples/side-by-side/README.md
      config.resolve.alias.library = resolve(__dirname, '../../library')
      config.resolve.alias['~library'] = resolve(__dirname, '../../library')
    },
    cssSourceMap: false,
  },
}
