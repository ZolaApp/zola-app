// @flow
import React from 'react'
import { type Project } from '@types/Project'
import { type User } from '@types/User'
import Wrapper from '@components/Wrapper'
import ProjectSwitcher from '@components/ProjectSwitcher'
import ProjectSidebarUser from '@components/ProjectSidebarUser'
import ProjectMenu from '@components/ProjectMenu'
import { StyledSidebar } from './styles'

type Props = {
  project: Project,
  user: User
}

const ProjectSidebar = ({ user, project }: Props) => (
  <StyledSidebar>
    <Wrapper>
      <ProjectSwitcher project={project} />
      <ProjectMenu />
    </Wrapper>
    <ProjectSidebarUser user={user} />
  </StyledSidebar>
)

export default ProjectSidebar
