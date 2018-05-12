import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Icon from '@components/Icon'
import { MenuItem } from './styles'

const ProjectMenu = () => {
  return (
    <Wrapper mTop="xlarge">
      <MenuItem selected>
        <Icon icon="key" />
        <Text size="default" color="light">
          Keys
        </Text>
      </MenuItem>
      <MenuItem>
        <Icon icon="planet" />
        <Text size="default" color="light">
          Locales
        </Text>
      </MenuItem>
      <MenuItem>
        <Icon icon="tag" />
        <Text size="default" color="light">
          Manage tags
        </Text>
      </MenuItem>
      <MenuItem>
        <Icon icon="gear" />
        <Text size="default" color="light">
          Project settings
        </Text>
      </MenuItem>
    </Wrapper>
  )
}

export default ProjectMenu
