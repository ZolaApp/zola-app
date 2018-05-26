// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Sidebar from '@components/Sidebar'
import ProjectSidebar from '@components/ProjectSidebar'
import KeyList from '@components/KeyList'
import KeysFilters from '@components/KeysFilters'
import type { Project } from '@types/Project'

type Props = {
  project: Project
}

const SingleProjectPage = ({ project }: Props) => {
  const keys = project.translationKeys

  return (
    <Wrapper flex>
      <Sidebar />
      <ProjectSidebar />
      <Wrapper padding="xlarge" flex align="column">
        <KeysFilters />
        <KeyList keys={keys} />
      </Wrapper>
    </Wrapper>
  )
}

export default SingleProjectPage
