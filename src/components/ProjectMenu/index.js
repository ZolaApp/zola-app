import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import { MenuItem } from './styles'

const ProjectMenu = () => {
  return (
    <Wrapper mTop="xlarge">
      <MenuItem selected>
        <Text size="default" color="light">
          Keys
        </Text>
      </MenuItem>
      <MenuItem>
        <Text size="default" color="light">
          Locales
        </Text>
      </MenuItem>
      <MenuItem>
        <Text size="default" color="light">
          Manage tags
        </Text>
      </MenuItem>
    </Wrapper>
  )
}

export default ProjectMenu
