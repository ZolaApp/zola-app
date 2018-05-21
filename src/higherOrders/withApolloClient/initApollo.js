// @flow
// Set up using https://github.com/zeit/next.js/blob/canary/examples/with-apollo/lib/init-apollo.js
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'
import getAccessToken from '@helpers/getAccessToken'
import clearAccessToken from '@helpers/clearAccessToken'
import redirectTo from '@helpers/redirectTo'

let apolloClient = null

const customFetch = (context: any = {}) => async (
  URI: string,
  options: any
) => {
  const token = getAccessToken(context)
  options.headers.Authorization = token ? `bearer ${token}` : ''

  const response = await fetch(URI, options)

  // We intercept the response and log the user out if their access token is not
  // valid.
  if (response.status === 401) {
    clearAccessToken(context)
    redirectTo(context, '/login')
  }

  return response
}

const create = (context: any = {}, initialState: any) =>
  new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: new HttpLink({
      uri: process.env.API_URL,
      credentials: 'same-origin',
      fetch: customFetch(context)
    }),
    cache: new InMemoryCache().restore(initialState || {})
  })

const initApollo = (context?: any, initialState?: any) => {
  if (!process.browser) {
    return create(context, initialState)
  }

  if (!apolloClient) {
    apolloClient = create(context, initialState)
  }

  return apolloClient
}

export default initApollo
