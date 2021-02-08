import it from '../translation/it_IT'
import en from '../translation/en_US'

export default {
  i18n: {
    baseUrl: process.env.NUXT_ENV_BASEURL,
    locales: [
      {
        code: 'en',
        iso: 'en_US',
      },
      {
        code: 'it',
        iso: 'it_IT',
      },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en,
        it,
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
    },
    parsePages: false,
    pages: {},
  },
}
