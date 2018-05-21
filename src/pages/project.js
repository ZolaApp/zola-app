// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Sidebar from '@components/Sidebar'
import ProjectSidebar from '@components/ProjectSidebar'
import KeysList from '@components/KeysList'
import withAuthentication from '@higherOrders/withAuthentication'

const Project = () => (
  <Wrapper flex>
    <Sidebar />
    <ProjectSidebar />
    <Wrapper padding="xlarge" flex>
      <KeysList />
    </Wrapper>
  </Wrapper>
)

export default withAuthentication(Project)
