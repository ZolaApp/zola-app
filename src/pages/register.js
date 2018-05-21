// @flow
import React from 'react'
import withNoAuthentication from '@higherOrders/withNoAuthentication'
import Wrapper from '@components/Wrapper'
import RegistrationHeader from '@components/RegistrationHeader'
import RegistrationForm from '@containers/RegistrationForm'

const Register = () => (
  <Wrapper center width="small">
    <RegistrationHeader />
    <RegistrationForm />
  </Wrapper>
)

export default withNoAuthentication(Register)
