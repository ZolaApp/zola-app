// @flow
// Set up using: https://github.com/zeit/next.js/blob/canary/examples/with-apollo/lib/with-apollo-client.js
import React from 'react'
import Head from 'next/head'
import { getDataFromTree } from 'react-apollo'
import initApollo from './initApollo'

type Props = {
  apolloClient: any,
  apolloState: any
}

const withApolloClient = (App: any) => {
  class ApolloClient extends React.Component<Props> {
    static async getInitialProps(context: any = {}) {
      const { Component, router } = context
      const appProps = App.getInitialProps
        ? await App.getInitialProps(context)
        : {}
      const apolloState = {}
      const apollo = initApollo(context, {})

      try {
        await getDataFromTree(
          <App
            {...appProps}
            Component={Component}
            router={router}
            apolloState={apolloState}
            apolloClient={apollo}
          />
        )
      } catch (error) {
        console.error('Error while running `getDataFromTree`', error)
      }

      if (!process.browser) {
        Head.rewind()
      }

      apolloState.data = apollo.cache.extract()

      return {
        ...appProps,
        apolloState
      }
    }

    apolloClient: any

    constructor(props: Props) {
      super(props)

      this.apolloClient =
        props.apolloClient || initApollo(undefined, props.apolloState.data)
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }

  return ApolloClient
}

export default withApolloClient
