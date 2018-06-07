// @flow
import React, { Fragment } from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { ToastContainer, Slide } from 'react-toastify'
import withApolloClient from '@higherOrders/withApolloClient'
import 'react-toastify/dist/ReactToastify.css'
import theme from '../styles/theme'
import '../styles/reset.css'
import '../styles/style.css'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class ZolaApp extends App {
  render() {
    const { Component, router, pageProps, apolloClient } = this.props

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Fragment>
              <ToastContainer
                toastClassName="custom-toast"
                closeButton={false}
                transition={Slide}
                position="top-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                draggable
                pauseOnVisibilityChange
                pauseOnHover
              />

              <Component key={router.route} {...pageProps} />
            </Fragment>
          </ThemeProvider>
        </ApolloProvider>

        <div id="dialog-root" />
      </Container>
    )
  }
}

export default withApolloClient(ZolaApp)
