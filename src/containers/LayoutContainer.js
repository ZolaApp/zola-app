// @flow
import React from 'react'

type Props = {
  children: any
}

const LayoutContainer = (props: Props) => <div {...props}>{props.children}</div>

export default LayoutContainer
