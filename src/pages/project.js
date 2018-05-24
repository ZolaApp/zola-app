// @flow
import React from 'react'
import throw404 from '@helpers/throw404'
import Wrapper from '@components/Wrapper'
import Sidebar from '@components/Sidebar'
import ProjectSidebar from '@components/ProjectSidebar'
import KeyList from '@components/KeyList'
import KeysFilters from '@components/KeysFilters'
import withAuthentication from '@higherOrders/withAuthentication'

const validateProjectOwnership = (context: any = {}) => {
  if (!context.query.id) {
    return throw404()
  }
}

const Project = () => (
  <Wrapper flex>
    <Sidebar />
    <ProjectSidebar />
    <Wrapper padding="xlarge" flex align="column">
      <KeysFilters />
      <KeyList />
    </Wrapper>
  </Wrapper>
)

export default withAuthentication(Project, validateProjectOwnership)
