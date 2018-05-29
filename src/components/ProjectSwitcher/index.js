// @flow
import React from 'react'
import { type Project } from '@types/Project'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import { Switcher } from './styles'

type Props = {
  project: Project
}

const ProjectSwitcher = ({ project }: Props) => (
  <Wrapper mLeft="regular">
    <Text color="semiGray">Project</Text>
    <Wrapper mTop="tiny">
      <Switcher>
        <Text color="light" size="medium">
          {project.name}
        </Text>
      </Switcher>
    </Wrapper>
  </Wrapper>
)

export default ProjectSwitcher
