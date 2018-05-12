// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Sidebar from '@components/Sidebar'
import ProjectSidebar from '@components/ProjectSidebar'

export default () => (
  <Wrapper flex>
    <Sidebar />
    <ProjectSidebar />
  </Wrapper>
)
