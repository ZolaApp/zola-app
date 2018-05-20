// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Sidebar from '@components/Sidebar'
import ProjectSidebar from '@components/ProjectSidebar'
import KeyList from '@components/KeyList'
import KeysFilters from '@components/KeysFilters'

export default () => (
  <Wrapper flex>
    <Sidebar />
    <ProjectSidebar />
    <Wrapper padding="xlarge" flex align="column">
      <KeysFilters />
      <KeyList />
    </Wrapper>
  </Wrapper>
)
