// @flow
import React, { Fragment } from 'react'
import App, { Container } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import getAccessToken from '@helpers/getAccessToken'
import clearAccessToken from '@helpers/clearAccessToken'
import redirectTo from '@helpers/redirectTo'
import withApolloClient from '@higherOrders/withApolloClient'
import 'react-toastify/dist/ReactToastify.css'
import theme from '../styles/theme'
import '../styles/reset.css'
import '../styles/style.css'

const UNAUTHENTICATED_PATHS = ['/register', '/login']

class MyApp extends App {
  static async getInitialProps(context) {
    const accessToken = getAccessToken(context)
    const path = context.ctx.pathname
    const isUnauthenticatedPath = UNAUTHENTICATED_PATHS.includes(path)

    // Logout route actually doesn’t exist but allows us to log the user out.
    if (path === '/logout') {
      clearAccessToken(context)
      redirectTo(context, '/login')

      return {}
    }

    if (accessToken && isUnauthenticatedPath) {
      redirectTo(context, '/')
    } else if (!accessToken && !isUnauthenticatedPath) {
      redirectTo(context, '/login')
    }

    return {}
  }

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
