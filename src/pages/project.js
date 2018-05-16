// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Sidebar from '@components/Sidebar'
import ProjectSidebar from '@components/ProjectSidebar'
import KeysList from '@components/KeysList'

export default () => (
  <Wrapper flex>
    <Sidebar />
    <ProjectSidebar />
    <Wrapper padding="xlarge" flex>
      <KeysList />
    </Wrapper>
  </Wrapper>
)
