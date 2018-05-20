// @flow
// Set up using https://github.com/zeit/next.js/blob/canary/examples/with-apollo/lib/init-apollo.js
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'
import getAccessToken from '@helpers/getAccessToken'

let apolloClient = null

const customFetch = (URI, options) => {
  const token = getAccessToken()
  options.headers.Authorization = token ? `bearer ${token}` : ''

  return fetch(URI, options)
}

const create = (initialState: any) =>
  new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: new HttpLink({
      uri: process.env.API_URL,
      credentials: 'same-origin',
      fetch: customFetch
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
