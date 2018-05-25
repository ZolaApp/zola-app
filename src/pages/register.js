// @flow
import React from 'react'
import withNoAuthentication from '@higherOrders/withNoAuthentication'
import Wrapper from '@components/Wrapper'
import RegistrationHeader from '@components/RegistrationHeader'
import RegistrationFormContainer from '@containers/RegistrationFormContainer'

const Register = () => (
  <Wrapper center width="small">
    <RegistrationHeader />
    <RegistrationFormContainer />
  </Wrapper>
)

export default withNoAuthentication(Register)
