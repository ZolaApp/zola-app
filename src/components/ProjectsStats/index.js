// @flow
import React from 'react'
import { type Stats } from '@types/Stats'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import StatBlock from '@components/StatBlock'
import { FormattedMessage } from 'react-intl'
import { Texts, StatsWrapper } from './styles'

type Props = {
  firstName: string,
  stats: Stats
}

const ProjectsStats = ({ firstName, stats }: Props) => (
  <Wrapper mBottom="xlarge">
    <Wrapper padding="large">
      <Texts>
        <Text size="large">
          <FormattedMessage id="projects.hello" values={{ name: firstName }} />
        </Text>
        <Text color="semiDark">
          <FormattedMessage id="projects.stats-intro" />
        </Text>
      </Texts>
    </Wrapper>

    <StatsWrapper>
      <StatBlock>
        <Text size="huge">{stats.projectsCount}</Text>
        <Text size="regular" color="semiDark">
          <FormattedMessage id="projects.stats.projects" />
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.completePercentage}%</Text>
        <Text size="regular" color="semiDark">
          <FormattedMessage id="projects.stats.translation-complete" />
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.localesCount}</Text>
        <Text size="regular" color="semiDark">
          <FormattedMessage id="projects.stats.locales" />
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.newKeysCount}</Text>
        <Text size="regular" color="semiDark">
          <FormattedMessage id="projects.stats.new-keys" />
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.missingTranslationsCount}</Text>
        <Text size="regular" color="semiDark">
          <FormattedMessage id="projects.stats.missing-translations" />
        </Text>
      </StatBlock>
    </StatsWrapper>
  </Wrapper>
)

export default ProjectsStats
