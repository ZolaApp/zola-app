// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import { Texts, Stats, StatBlock } from './styles'

type Props = {
  firstName: string
}

const ProjectsStats = ({ firstName }: Props) => {
  return (
    <Wrapper mBottom="xlarge">
      <Wrapper padding="large">
        <Texts>
          <Text size="large">Hello {firstName}!</Text>
          <Text color="semiDark">
            Here are some statistics about your projects
          </Text>
        </Texts>
      </Wrapper>
      <Stats>
        <StatBlock>
          <Text size="huge">8</Text>
          <Text size="regular" color="semiDark">
            Projects
          </Text>
        </StatBlock>
        <StatBlock>
          <Text size="huge">78%</Text>
          <Text size="regular" color="semiDark">
            Translation complete
          </Text>
        </StatBlock>
        <StatBlock>
          <Text size="huge">4</Text>
          <Text size="regular" color="semiDark">
            Locales
          </Text>
        </StatBlock>
        <StatBlock>
          <Text size="huge">34</Text>
          <Text size="regular" color="semiDark">
            New keys
          </Text>
        </StatBlock>
        <StatBlock>
          <Text size="huge">12</Text>
          <Text size="regular" color="semiDark">
            Missing translations
          </Text>
        </StatBlock>
        <StatBlock>
          <Text size="huge">76</Text>
          <Text size="regular" color="semiDark">
            Unused keys
          </Text>
        </StatBlock>
      </Stats>
    </Wrapper>
  )
}

export default ProjectsStats
