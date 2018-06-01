// @flow
import React, { Component } from 'react'
import TranslationValueRow from '@components/TranslationValueRow'
import { type TranslationKey } from '@types/TranslationKey'
import { type TranslationValue } from '@types/TranslationValue'
import { type Locale } from '@types/Locale'
import { DetailsWrapper } from './styles'

type Props = {
  translationKey: TranslationKey,
  locales: Array<Locale>
}

class KeyDetails extends Component<Props> {
  valueFinder = (localeCode: string): TranslationValue | null => {
    const { translationKey } = this.props
    let endValue = null

    if (translationKey.translationValues) {
      endValue =
        translationKey.translationValues.find(
          v => v.locale.code === localeCode
        ) || null
    }

    return endValue
  }

  render() {
    const { locales } = this.props

    return (
      <DetailsWrapper>
        {locales.map(l => (
          <TranslationValueRow
            key={l.code}
            locale={l}
            translationKeyValue={this.valueFinder(l.code)}
          />
        ))}
      </DetailsWrapper>
    )
  }
}

export default KeyDetails
