// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import LoginHeader from '@components/LoginHeader'
import LoginForm from '@containers/LoginForm'

export default () => (
  <Wrapper center width="small">
    <LoginHeader />
    <LoginForm />
  </Wrapper>
)
