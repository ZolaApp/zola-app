import React from 'react'
import Wrapper from '@components/Wrapper'
import InputWithLabel from '@components/InputWithLabel'
import { Form } from './styles'

const RegistrationForm = () => {
  return (
    <Wrapper mTop="15px">
      <Form>
        <InputWithLabel id="firstname" label="Firstname" />
      </Form>
    </Wrapper>
  )
}

export default RegistrationForm
