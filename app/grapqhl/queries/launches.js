import gql from 'graphql-tag'

export const launchList = gql`
  query launchList($limit: Int) {
    launches(limit: $limit) {
      mission_name
      id
    }
  }
`

export const launchInfo = gql`
  query launchInfo($id: ID!) {
    launch(id: $id) {
      mission_name
      id
    }
  }
`
