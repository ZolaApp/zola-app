// @flow
import React, { Fragment } from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { PageTransition } from 'next-page-transitions'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import withApolloClient from '@higherOrders/withApolloClient'
import 'react-toastify/dist/ReactToastify.css'
import theme from '../styles/theme'
import '../styles/reset.css'
import '../styles/style.css'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class MyApp extends App {
  render() {
    const { Component, router, pageProps, apolloClient } = this.props

    return (
      <Container>
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

              <PageTransition timeout={300} classNames="page-transition">
                <Component key={router.route} {...pageProps} />
              </PageTransition>
            </Fragment>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
