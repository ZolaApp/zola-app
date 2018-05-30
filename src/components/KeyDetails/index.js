// @flow
import React from 'react'
import TranslationValueRow from '@components/TranslationValueRow'
import { type TranslationKey } from '@types/TranslationKey'
import { type Locale } from '@types/Locale'
import { DetailsWrapper } from './styles'

type Props = {
  translationKey: TranslationKey,
  locales: Array<Locale>
}

const KeyDetails = ({ translationKey, locales }: Props) => (
  <DetailsWrapper>
    {locales.map(l => <TranslationValueRow key={l.code} locale={l} />)}
  </DetailsWrapper>
)

export default KeyDetails
