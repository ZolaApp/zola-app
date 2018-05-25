// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Sidebar from '@components/Sidebar'
import HomePageContainer from '@containers/HomePageContainer'
import withAuthentication from '@higherOrders/withAuthentication'

const Index = () => (
  <Wrapper flex>
    <Sidebar />
    <HomePageContainer />
  </Wrapper>
)

export default withAuthentication(Index)
