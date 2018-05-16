// @flow
// Set up using https://github.com/zeit/next.js/blob/canary/examples/with-apollo/lib/init-apollo.js
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

if (!process.browser) {
  global.fetch = fetch
}

const create = (initialState: any) =>
  new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: new HttpLink({
      uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
      credentials: 'same-origin',
      fetch
    }),
    cache: new InMemoryCache().restore(initialState || {})
  })

const initApollo = (initialState: any) => {
  if (!process.browser) {
    return create(initialState)
  }

  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}

export default initApollo
