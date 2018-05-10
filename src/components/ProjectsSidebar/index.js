import React from 'react'
import Wrapper from '@components/Wrapper'
import ProjectSwitcher from '@components/ProjectSwitcher'
import ProjectSidebarUser from '@components/ProjectSidebarUser'
import ProjectMenu from '@components/ProjectMenu'
import { StyledSidebar } from './styles'

const ProjectsSidebar = () => {
  return (
    <StyledSidebar>
      <Wrapper>
        <ProjectSwitcher />
        <ProjectMenu />
      </Wrapper>
      <ProjectSidebarUser />
    </StyledSidebar>
  )
}

export default ProjectsSidebar
