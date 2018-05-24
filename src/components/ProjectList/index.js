import React from 'react'
import Wrapper from '@components/Wrapper'
import ProjectRow from '@components/ProjectRow'
import ProjectListHeader from '@components/ProjectListHeader'

const ProjectList = () => {
  return (
    <Wrapper>
      <ProjectListHeader />
      <Wrapper padding="regular">
        <ProjectRow />
        <ProjectRow />
      </Wrapper>
    </Wrapper>
  )
}

export default ProjectList
