export default (context) => {
  return {
    httpEndpoint: process.env.NUXT_ENV_GQL_URL,
    getAuth: () => process.env.NUXT_ENV_GQL_KEY,
  }
}
