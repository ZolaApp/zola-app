// @flow
import React from 'react'
import SingleProjectLayout from '@components/SingleProjectLayout'
import KeyList from '@components/KeyList'
import KeysFilters from '@components/KeysFilters'

const SingleProjectPage = () => (
  <SingleProjectLayout>
    <KeysFilters />
    <KeyList />
  </SingleProjectLayout>
)

export default SingleProjectPage
