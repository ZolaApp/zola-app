// @flow
import React from 'react'
import HelloWorld from '@components/HelloWorld'
import withAuthentication from '@higherOrders/withAuthentication'

const Index = () => <HelloWorld />

export default withAuthentication(Index)
