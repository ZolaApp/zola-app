// @flow
import React, { type Node } from 'react'
import { Wrapper, StyledTooltip } from './styles'

type Props = {
  text: string,
  children: Node
}

const Tooltip = ({ children, text }: Props) => {
  return (
    <Wrapper>
      <div>{children}</div>
      <StyledTooltip>{text}</StyledTooltip>
    </Wrapper>
  )
}

export default Tooltip
