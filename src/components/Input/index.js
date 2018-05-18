// @flow
import React from 'react'
import { StyledInput } from './styles'

type Props = {
  type: string,
  placeholder: string,
  name: string,
  id?: string,
  maxLength?: number
}

const Input = (props: Props) => {
  return <StyledInput {...props} id={props.id || props.name} />
}

Input.defaultProps = {
  type: 'text',
  placeholder: undefined,
  id: undefined,
  maxLength: 128
}

export default Input
