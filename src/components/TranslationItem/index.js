import React from 'react'
import AddTranslationButton from '@components/AddTranslationButton'
import { Wrapper, ContentWrapper, Locale } from './styles'

const TranslationItem = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Locale>English</Locale>
        <AddTranslationButton />
      </ContentWrapper>
    </Wrapper>
  )
}

export default TranslationItem
