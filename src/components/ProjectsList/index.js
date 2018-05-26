// @flow
import React from 'react'
import { type Project } from '@types/Project'
import Wrapper from '@components/Wrapper'
import ProjectRow from '@components/ProjectRow'
import ProjectsHeader from '@components/ProjectsHeader'

type Props = {
  projects: Array<Project>
}

const ProjectsList = ({ projects }: Props) => (
  <Wrapper>
    <ProjectsHeader />
    <Wrapper padding="regular">
      {projects.map(project => (
        <ProjectRow key={project.slug} project={project} />
      ))}
    </Wrapper>
  </Wrapper>
)

export default ProjectsList
