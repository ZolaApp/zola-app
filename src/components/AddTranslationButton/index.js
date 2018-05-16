import React from 'react'
import Icon from '@components/Icon'
import Text from '@components/Text'
import { StyledButton } from './styles'

const AddTranslationButton = () => {
  return (
    <StyledButton>
      <Icon icon="plus" width="12px" />
      <Text underline color="light">
        Add translation
      </Text>
    </StyledButton>
  )
}

export default AddTranslationButton
