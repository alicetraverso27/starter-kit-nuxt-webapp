export default (context) => {
  return {
    httpEndpoint: process.env.GQL_URL,
    getAuth: () => process.env.GQL_KEY,
  }
}
