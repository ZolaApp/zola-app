import React from 'react'
import Wrapper from '@components/Wrapper'
import ProjectRow from '@components/ProjectRow'
import ProjectsHeader from '@components/ProjectsHeader'

const ProjectList = () => {
  return (
    <Wrapper>
      <ProjectsHeader />
      <Wrapper padding="regular">
        <ProjectRow />
        <ProjectRow />
      </Wrapper>
    </Wrapper>
  )
}

export default ProjectList
