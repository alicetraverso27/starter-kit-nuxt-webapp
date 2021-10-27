import gql from 'graphql-tag'

export const seoFragment = gql`
  fragment SeoFragment on SeoField {
    twitterCard
    title
    description
    image {
      url
    }
  }
`
