// https://nuxtjs.org/blog/improve-your-developer-experience-with-nuxt-components#lazy-loading-your-components
// https://github.com/Krutie/Kru-Components/blob/master/nuxt/index.js

import { join } from 'path'

export default function () {
  const { nuxt } = this

  // Make sure components is enabled
  if (!nuxt.options.components) {
    throw new Error(
      'please set `components: true` inside `nuxt.config` and ensure using `nuxt >= 2.13.0`'
    )
  }

  this.nuxt.hook('components:dirs', (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      /**
       * TODO: Check ho to target subfolder and not only first level folder
      */
      path: join(__dirname, '../components'),
      // ignore: ['./components/**/*.js'],
    })
  })
}
