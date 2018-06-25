// @flow
import React, { Fragment } from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { ToastContainer, Slide } from 'react-toastify'
import { IntlProvider } from 'react-intl'
import isEmpty from 'lodash.isempty'
import withApolloClient from '@higherOrders/withApolloClient'
import 'react-toastify/dist/ReactToastify.css'
import theme from '../styles/theme'
import '../styles/reset.css'
import '../styles/style.css'
import { getMessages } from '../locales'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class ZolaApp extends App {
  state = {
    messages: {}
  }

  componentDidMount = () => {
    const preferedLanguage = localStorage.getItem('dashboard-language')
    const locale = preferedLanguage || 'en'

    this.setState({ messages: getMessages(locale) })
  }

  render() {
    const { Component, router, pageProps, apolloClient } = this.props

    return (
      <Container>
        {!isEmpty(this.state.messages) && (
          <IntlProvider locale="en" messages={this.state.messages}>
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
          </IntlProvider>
        )}

        <div id="dialog-root" />
      </Container>
    )
  }
}

export default withApolloClient(ZolaApp)
