// @flow
import React from 'react'
import withNoAuthentication from '@higherOrders/withNoAuthentication'
import Wrapper from '@components/Wrapper'
import LoginHeader from '@components/LoginHeader'
import LoginFormContainer from '@containers/LoginFormContainer'

const Login = () => (
  <Wrapper center width="small">
    <LoginHeader />
    <LoginFormContainer />
  </Wrapper>
)

export default withNoAuthentication(Login)
