import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import sprite from 'svg-sprite-loader/runtime/sprite.build'
import '../static/icons.svg?sprite'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    const spriteContent = sprite.stringify()

    return { ...page, styleTags, spriteContent }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Zola App</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
          {this.props.styleTags}
        </Head>

        <body>
          <div dangerouslySetInnerHTML={{ __html: this.props.spriteContent }} />
          <div id="main">
            <Main />
          </div>
          <NextScript />
          <div id="dialog-root" />
        </body>
      </html>
    )
  }
}
