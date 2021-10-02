export default (context) => {
  return {
    // httpEndpoint: process.env.NUXT_ENV_GQL_URL,
    httpEndpoint: 'https://api.spacex.land/graphql/',
    getAuth: () => process.env.NUXT_ENV_GQL_KEY,
  }
}
