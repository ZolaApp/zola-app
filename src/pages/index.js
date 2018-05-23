// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Sidebar from '@components/Sidebar'
import Home from '@components/Home'
import withAuthentication from '@higherOrders/withAuthentication'

const Index = () => (
  <Wrapper flex>
    <Sidebar />
    <Home />
  </Wrapper>
)

export default withAuthentication(Index)
