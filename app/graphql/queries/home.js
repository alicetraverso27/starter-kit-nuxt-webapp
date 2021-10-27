import gql from 'graphql-tag'
import { seoFragment } from '../fragments/seo.js'

export const HomeData = gql`
  ${seoFragment}
  query HomeData($locale: SiteLocale) {
    home(locale: $locale) {
      seo {
        ...SeoFragment
      }
    }
  }
`
