// @flow
import React from 'react'
import { StyledInput } from './styles'

type Props = {
  type?: string,
  placeholder?: string,
  id: string,
  name?: string,
  maxLength?: number
}

const Input = (props: Props) => {
  return <StyledInput {...props} name={props.name || props.id} />
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  name: '',
  maxLength: 128
}

export default Input
