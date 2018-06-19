// @flow
import * as React from 'react'
import { StyledBlock } from './styles'

type Props = {
  children: React.Node
}

const StatBlock = ({ children }: Props) => {
  return <StyledBlock>{children}</StyledBlock>
}

export default StatBlock
