import React from 'react'
import Wrapper from '@components/Wrapper'
import ProjectsStats from '@components/ProjectsStats'
import ProjectsHeader from '@components/ProjectsHeader'
import ProjectList from '@components/ProjectList'

const Home = () => (
  <Wrapper flex>
    <Wrapper center width="regular" mTop="large">
      <ProjectsStats />
      <ProjectsHeader />
      <ProjectList />
    </Wrapper>
  </Wrapper>
)

export default Home
