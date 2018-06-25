// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import StatBlock from '@components/StatBlock'
import { type Stats } from '@types/Stats'
import { FormattedMessage } from 'react-intl'
import { StatsWrapper } from './styles'

type Props = {
  stats: Stats
}

const ProjectStats = ({ stats }: Props) => (
  <Wrapper mBottom="xlarge">
    <StatsWrapper>
      <StatBlock>
        <Text size="huge">{stats.translationKeysCount}</Text>
        <Text size="regular" color="semiDark">
          <FormattedMessage id="stats.total-keys" />
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.completePercentage}%</Text>
        <Text size="regular" color="semiDark">
          <FormattedMessage id="stats.complete-percentage" />
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.localesCount}</Text>
        <Text size="regular" color="semiDark">
          <FormattedMessage id="stats.locales" />
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.newKeysCount}</Text>
        <Text size="regular" color="semiDark">
          <FormattedMessage id="stats.new-keys" />
        </Text>
      </StatBlock>

      <StatBlock>
        <Text size="huge">{stats.missingTranslationsCount}</Text>
        <Text size="regular" color="semiDark">
          <FormattedMessage id="stats.missing-translations" />
        </Text>
      </StatBlock>
    </StatsWrapper>
  </Wrapper>
)

export default ProjectStats
