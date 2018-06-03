// @flow
import React from 'react'
import { type TranslationKey } from '@types/TranslationKey'
import { type Locale } from '@types/Locale'
import TranslationValueRowContainer from '@containers/TranslationValueRowContainer'
import { DetailsWrapper } from './styles'

type Props = {
  translationKey: TranslationKey,
  locales: Array<Locale>
}

const KeyDetails = ({ translationKey, locales }: Props) => (
  <DetailsWrapper>
    {locales.map(l => (
      <TranslationValueRowContainer
        key={l.code}
        locale={l}
        translationKey={translationKey}
      />
    ))}
  </DetailsWrapper>
)

export default KeyDetails
