// @flow
import React, { Component } from 'react'
import { type TranslationKey } from '@types/TranslationKey'
import { type Locale } from '@types/Locale'
import TranslationValueRowContainer from '@containers/TranslationValueRowContainer'
import { DetailsWrapper } from './styles'

type Props = {
  translationKey: TranslationKey,
  locales: Array<Locale>
}

class KeyDetails extends Component<Props> {
  render() {
    const { translationKey, locales } = this.props

    return (
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
  }
}

export default KeyDetails
