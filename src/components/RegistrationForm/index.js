import React from 'react'
import Wrapper from '@components/Wrapper'
import InputWithLabel from '@components/InputWithLabel'
import { Form } from './styles'

const RegistrationForm = () => {
  return (
    <Wrapper mTop="15px">
      <Form>
        <InputWithLabel id="firstName" label="First Name" />
      </Form>
    </Wrapper>
  )
}

export default RegistrationForm
