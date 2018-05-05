// @flow
import React from 'react'
import Input from '@components/Input'
import { InputWrapper, StyledLabel } from './styles'

type Props = {
  id: string,
  label: string
}

const InputWithLabel = (props: Props) => {
  const { id, label } = props

  return (
    <InputWrapper>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <Input {...props} />
    </InputWrapper>
  )
}

export default InputWithLabel
