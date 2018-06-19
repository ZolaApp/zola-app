// @flow
import React from 'react'
import { type Stats } from '@types/Stats'
import { type Project } from '@types/Project'
import Wrapper from '@components/Wrapper'
import ProjectsList from '@components/ProjectsList'
import ProjectsStats from '@components/ProjectsStats'

type Props = {
  firstName: string,
  stats: Stats,
  projects: Array<Project>
}

const HomePage = ({ firstName, stats, projects }: Props) => (
  <Wrapper flex>
    <Wrapper center width="regular" mTop="large">
      <ProjectsStats firstName={firstName} stats={stats} />
      <ProjectsList projects={projects} />
    </Wrapper>
  </Wrapper>
)

export default HomePage
