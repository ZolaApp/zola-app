// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Sidebar from '@components/Sidebar'
import ProjectsSidebar from '@components/ProjectsSidebar'

export default () => (
  <Wrapper flex>
    <Sidebar />
    <ProjectsSidebar />
  </Wrapper>
)
