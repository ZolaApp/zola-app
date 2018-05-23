import React from 'react'
import Wrapper from '@components/Wrapper'
import ProjectsHeader from '@components/ProjectsHeader'
import ProjectList from '@components/ProjectList'

const Home = () => (
  <Wrapper flex>
    <Wrapper center width="regular" mTop="large">
      <ProjectsHeader />
      <ProjectList />
    </Wrapper>
  </Wrapper>
)

export default Home
