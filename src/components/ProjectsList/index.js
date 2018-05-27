// @flow
import React from 'react'
import Link from 'next/link'
import { type Project } from '@types/Project'
import Wrapper from '@components/Wrapper'
import ProjectRow from '@components/ProjectRow'
import ProjectsHeader from '@components/ProjectsHeader'
import { StyledLink } from './styles'

type Props = {
  projects: Array<Project>
}

const ProjectsList = ({ projects }: Props) => (
  <Wrapper>
    <ProjectsHeader />
    <Wrapper padding="regular">
      {projects.map((project, index) => (
        <Link href={`/project/${project.slug}`}>
          <StyledLink>
            <ProjectRow
              key={project.slug}
              project={project}
              isEven={index % 2 === 0}
            />
          </StyledLink>
        </Link>
      ))}
    </Wrapper>
  </Wrapper>
)

export default ProjectsList
