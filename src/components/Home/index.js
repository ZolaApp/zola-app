import React from 'react'
import Wrapper from '@components/Wrapper'
import ProjectsStatsContainer from '@containers/ProjectsStatsContainer'
import ProjectListContainer from '@containers/ProjectListContainer'

const Home = () => (
  <Wrapper flex>
    <Wrapper center width="regular" mTop="large">
      <ProjectsStatsContainer />
      <ProjectListContainer />
    </Wrapper>
  </Wrapper>
)

export default Home
