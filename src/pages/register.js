// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import RegistrationHeader from '@components/RegistrationHeader'
import RegistrationForm from '@containers/RegistrationForm'

export default () => (
  <Wrapper center width="small">
    <RegistrationHeader />
    <RegistrationForm />
  </Wrapper>
)
