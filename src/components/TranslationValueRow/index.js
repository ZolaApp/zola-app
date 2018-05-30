// @flow
import React from 'react'
import AddTranslationButton from '@components/AddTranslationButton'
import { type Locale } from '@types/Locale'
import { Wrapper, ContentWrapper, LocaleWrapper } from './styles'

type Props = {
  locale: Locale
}

const TranslationValueRow = ({ locale }: Props) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <LocaleWrapper>{locale.name}</LocaleWrapper>
        <AddTranslationButton />
      </ContentWrapper>
    </Wrapper>
  )
}

export default TranslationValueRow
