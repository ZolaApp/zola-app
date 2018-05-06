// @flow
import * as React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import '../styles/reset.css'
import '../styles/style.css'

type Props = {
  children?: React.Node
}

class Layout extends React.Component<Props> {
  render() {
    const { children } = this.props

    return <div className="layout">{children}</div>
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Layout>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </Container>
    )
  }
}
