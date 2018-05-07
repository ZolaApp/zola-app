// @flow
import React from 'react'
import { StyledInput } from './styles'

type Props = {
  placeholder: string
}

const Input = (props: Props) => {
  return <StyledInput {...props} />
}

Input.defaultProps = {
  placeholder: ''
}

export default Input
