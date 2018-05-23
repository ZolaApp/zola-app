// @flow
import React from 'react'
import { Wrapper, StyledTooltip } from './styles'

type Props = {
  text: string,
  children: string
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
