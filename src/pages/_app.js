// @flow
import * as React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import withApolloClient from '@higherOrders/withApolloClient'
import theme from '../styles/theme'
import '../styles/reset.css'
import '../styles/style.css'

type Props = {
  children?: React.Node
}

class Layout extends React.Component<Props> {
  render() {
    const { children } = this.props

    return <div>{children}</div>
  }
}

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props

    return (
      <Container>
        <Layout>
          <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </ApolloProvider>
        </Layout>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
