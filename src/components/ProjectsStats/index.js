// @flow
import React from 'react'
import { type Stats } from '@types/Stats'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import StatBlock from '@components/StatBlock'
import { Texts, StatsWrapper } from './styles'

type Props = {
  firstName: string,
  stats: Stats
}

const ProjectsStats = ({ firstName, stats }: Props) => (
  <Wrapper mBottom="xlarge">
    <Wrapper padding="large">
      <Texts>
        <Text size="large">Hello {firstName}!</Text>
        <Text color="semiDark">
          Here are some statistics about your projects
        </Text>
      </Texts>
    </Wrapper>

    <StatsWrapper>
      <StatBlock>
        <Text size="huge">{stats.projectsCount}</Text>
        <Text size="regular" color="semiDark">
          Projects
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.completePercentage}</Text>
        <Text size="regular" color="semiDark">
          Translations complete
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.localesCount}</Text>
        <Text size="regular" color="semiDark">
          Locales
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.newKeysCount}</Text>
        <Text size="regular" color="semiDark">
          New keys
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.missingTranslationsCount}</Text>
        <Text size="regular" color="semiDark">
          Missing translations
        </Text>
      </StatBlock>
    </StatsWrapper>
  </Wrapper>
)

export default ProjectsStats
