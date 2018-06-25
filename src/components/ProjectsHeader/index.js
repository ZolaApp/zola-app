// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Button from '@components/Button'
import { FormattedMessage } from 'react-intl'
import { Texts, HeaderWrapper } from './styles'

type Props = {
  onNewProjectClick: () => any
}

const ProjectsHeader = ({ onNewProjectClick }: Props) => (
  <Wrapper padding="large">
    <HeaderWrapper>
      <Texts>
        <Text size="large">
          <FormattedMessage id="projects.header.title" />
        </Text>
        <Text color="semiDark">
          <FormattedMessage id="projects.header.subtitle" />
        </Text>
      </Texts>
      <Button onClick={onNewProjectClick} bordered>
        <FormattedMessage id="projects.header.add" />
      </Button>
    </HeaderWrapper>
  </Wrapper>
)

export default ProjectsHeader
