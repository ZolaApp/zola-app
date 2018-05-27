// @flow
import React from 'react'
import { type Project } from '@types/Project'
import Wrapper from '@components/Wrapper'
import ProjectsList from '@components/ProjectsList'
import ProjectsStats from '@components/ProjectsStats'

type Props = {
  firstName: string,
  projects: Array<Project>
}

const HomePage = ({ firstName, projects }: Props) => (
  <Wrapper flex>
    <Wrapper center width="regular" mTop="large">
      <ProjectsStats firstName={firstName} />
      <ProjectsList projects={projects} />
    </Wrapper>
  </Wrapper>
)

export default HomePage
