import React from 'react'
import TranslationItem from '@components/TranslationItem'
import Button from '@components/Button'
import Icon from '@components/Icon'
import { DetailsWrapper, TranslationsList, Actions } from './styles'

const KeyDetails = () => {
  return (
    <DetailsWrapper>
      <TranslationsList>
        <TranslationItem />
        <TranslationItem />
        <TranslationItem />
      </TranslationsList>
      <Actions>
        <Button small light>
          <Icon icon="tick" width="16px" />
          Save translations
        </Button>
      </Actions>
    </DetailsWrapper>
  )
}

export default KeyDetails
