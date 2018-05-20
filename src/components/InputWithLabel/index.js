// @flow
import React from 'react'
import Input from '@components/Input'
import { InputWrapper, StyledLabel } from './styles'

type Props = {
  name: string,
  label: string,
  isInvalid: boolean,
  placeholder: string
}

const InputWithLabel = (props: Props) => {
  const { name, label, isInvalid } = props

  return (
    <InputWrapper>
      <StyledLabel htmlFor={name} isInvalid={isInvalid}>
        {label}
      </StyledLabel>
      <Input {...props} aria-invalid={isInvalid} />
    </InputWrapper>
  )
}

InputWithLabel.defaultProps = {
  isInvalid: false,
  placeholder: undefined
}

export default InputWithLabel
