// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-head
import fonts from './fonts.js'

export default {
  head: {
    htmlAttrs: {},
    meta: [
      { name: 'charset', content: 'utf-8' },
      { name: 'author', content: process.env.AUTHOR },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      ...fonts,
    ],
    script: [],
  },
}