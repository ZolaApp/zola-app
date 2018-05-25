// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import ProjectList from '@components/ProjectList'
import ProjectsStats from '@components/ProjectsStats'

type Props = {
  firstName: string
}

const HomePage = ({ firstName }: Props) => (
  <Wrapper flex>
    <Wrapper center width="regular" mTop="large">
      <ProjectsStats firstName={firstName} />
      <ProjectList />
    </Wrapper>
  </Wrapper>
)

export default HomePage
