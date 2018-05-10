import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import { Switcher } from './styles'

const ProjectSwitcher = () => {
  return (
    <Wrapper mLeft="regular">
      <Text color="semiGray">Projects</Text>
      <Wrapper mTop="tiny">
        <Switcher>
          <Text color="light" size="medium">
            Spotify iOS
          </Text>
        </Switcher>
      </Wrapper>
    </Wrapper>
  )
}

export default ProjectSwitcher
