// @flow
import React, { Component } from 'react'
import { type Locale } from '@types/Locale'
import { type TranslationValue } from '@types/TranslationValue'
import { Wrapper, ContentWrapper, LocaleWrapper, Textarea } from './styles'

type Props = {
  locale: Locale,
  translationKeyValue: TranslationValue | null
}

type State = {
  isFocused: boolean,
  value: string
}

class TranslationValueRow extends Component<Props, State> {
  state = {
    isFocused: false,
    value: ''
  }

  toggleFocus = () => {
    this.setState(state => ({ isFocused: !state.isFocused }))
  }

  onChange = (value: string) => {
    this.setState(state => ({
      ...state,
      value
    }))
  }

  componentDidMount = () => {
    const { translationKeyValue } = this.props

    if (translationKeyValue) {
      this.setState(state => ({
        ...state,
        value: translationKeyValue.value
      }))
    }
  }

  render() {
    const { isFocused, value } = this.state
    const { locale } = this.props

    return (
      <Wrapper>
        <ContentWrapper isFocused={isFocused}>
          <LocaleWrapper>{locale.name}</LocaleWrapper>
          <Textarea
            rows="1"
            placeholder={`Translation for ${locale.name}`}
            value={value}
            onChange={e => this.onChange(e.target.value)}
            onFocus={this.toggleFocus}
            onBlur={this.toggleFocus}
          />
        </ContentWrapper>
      </Wrapper>
    )
  }
}

export default TranslationValueRow
