// @flow
import React from 'react'
import withNoAuthentication from '@higherOrders/withNoAuthentication'
import Wrapper from '@components/Wrapper'
import LoginHeader from '@components/LoginHeader'
import LoginForm from '@containers/LoginForm'

const Login = () => (
  <Wrapper center width="small">
    <LoginHeader />
    <LoginForm />
  </Wrapper>
)

export default withNoAuthentication(Login)
