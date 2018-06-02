import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import StatBlock from '@components/StatBlock'
import { Stats } from './styles'

const ProjectStats = () => {
  return (
    <Wrapper mBottom="xlarge">
      <Stats>
        <StatBlock>
          <Text size="huge">3465</Text>
          <Text size="regular" color="semiDark">
            Total keys
          </Text>
        </StatBlock>
        <StatBlock>
          <Text size="huge">94%</Text>
          <Text size="regular" color="semiDark">
            Translation complete
          </Text>
        </StatBlock>
        <StatBlock>
          <Text size="huge">6</Text>
          <Text size="regular" color="semiDark">
            Locales
          </Text>
        </StatBlock>
        <StatBlock>
          <Text size="huge">67</Text>
          <Text size="regular" color="semiDark">
            New keys
          </Text>
        </StatBlock>
        <StatBlock>
          <Text size="huge">11</Text>
          <Text size="regular" color="semiDark">
            Missing translation
          </Text>
        </StatBlock>
        <StatBlock>
          <Text size="huge">28</Text>
          <Text size="regular" color="semiDark">
            Unused keys
          </Text>
        </StatBlock>
      </Stats>
    </Wrapper>
  )
}

export default ProjectStats
