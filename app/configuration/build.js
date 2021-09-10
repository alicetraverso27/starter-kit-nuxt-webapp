// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build
import { resolve } from 'path'

export default {
  build: {
    transpile: ['gsap'],
    extend(config, ctx) {
      // Add '~/library' as an alias.
        config.resolve.alias.shared = resolve(__dirname, "../../library");
        config.resolve.alias["~library"] = resolve(__dirname, "../../library");
    },
    cssSourceMap: false,
  },
}
