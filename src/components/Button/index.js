// @flow
import React, { type Node } from 'react'
import Loader from '@components/Loader'
import { StyledButton } from './styles'

type Props = {
  isLoading: boolean,
  children: Node
}

const Button = (props: Props) => (
  <StyledButton {...props}>
    {props.isLoading && <Loader />}
    {props.children}
  </StyledButton>
)

Button.defaultProps = {
  isLoading: false,
  type: 'button'
}

export default Button
