// @flow
import React, { Fragment, type Node } from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import withApolloClient from '@higherOrders/withApolloClient'
import 'react-toastify/dist/ReactToastify.css'
import theme from '../styles/theme'
import '../styles/reset.css'
import '../styles/style.css'

type Props = {
  children?: Node
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
              <Fragment>
                <ToastContainer
                  position="top-left"
                  autoClose={5000}
                  hideProgressBar
                  newestOnTop
                  closeOnClick
                  draggable
                  pauseOnVisibilityChange
                  pauseOnHover
                />

                <Component {...pageProps} />
              </Fragment>
            </ThemeProvider>
          </ApolloProvider>
        </Layout>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
