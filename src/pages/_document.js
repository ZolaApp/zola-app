/* global SVG_SPRITE */
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Zola App</title>
          <link rel="icon" href="/static/favicon.png" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          {this.props.styleTags}
        </Head>

        <body>
          <div dangerouslySetInnerHTML={{ __html: SVG_SPRITE }} />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
