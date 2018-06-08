// @flow
import React, { Component } from 'react'
import { type Locale } from '@types/Locale'
import { type TranslationValue } from '@types/TranslationValue'
import Text from '@components/Text'
import Loader from '@components/Loader'
import Textarea from '@components/Textarea'
import { Wrapper, ContentWrapper, LocaleWrapper, LoaderWrapper } from './styles'

type Props = {
  locale: Locale,
  translationKeyValue: TranslationValue | null,
  onBlur: string => any,
  isLoading: boolean
}

type State = {
  isFocused: boolean
}

class TranslationValueRow extends Component<Props, State> {
  state = { isFocused: false }

  handleFocus = () => {
    this.setState(state => ({ isFocused: true }))
  }

  handleBlur = (value: string) => {
    this.setState(
      state => ({ isFocused: false }),
      () => this.props.onBlur(value)
    )
  }

  render() {
    const { isFocused } = this.state
    const { locale, translationKeyValue, isLoading } = this.props

    return (
      <Wrapper>
        <ContentWrapper isFocused={isFocused}>
          <LocaleWrapper>{locale.name}</LocaleWrapper>
          <Textarea
            value={translationKeyValue ? translationKeyValue.value : ''}
            placeholder={`Translation for ${locale.name}`}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          {isLoading && (
            <LoaderWrapper>
              <Loader />
              <Text color="light">Saving...</Text>
            </LoaderWrapper>
          )}
        </ContentWrapper>
      </Wrapper>
    )
  }
}

export default TranslationValueRow
