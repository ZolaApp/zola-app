// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import StatBlock from '@components/StatBlock'
import { type Stats } from '@types/Stats'
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
          Total keys
        </Text>
      </StatBlock>
      <StatBlock>
        <Text size="huge">{stats.completePercentage}%</Text>
        <Text size="regular" color="semiDark">
          Translation complete
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
          Missing translation
        </Text>
      </StatBlock>
    </StatsWrapper>
  </Wrapper>
)

export default ProjectStats
