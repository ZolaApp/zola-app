// @flow
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
// Base styles
import '../styles/reset.css'
import '../styles/style.css'

type Props = {
  children: any
}

const PageContainer = (props: Props) => (
  <ThemeProvider theme={theme}>
    <div {...props}>{props.children}</div>
  </ThemeProvider>
)

export default PageContainer
