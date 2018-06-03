// @flow
import React, { Component } from 'react'
import { type Locale } from '@types/Locale'
import { type TranslationValue } from '@types/TranslationValue'
import { Wrapper, ContentWrapper, LocaleWrapper, Textarea } from './styles'

type Props = {
  locale: Locale,
  translationKeyValue: TranslationValue | null,
  onBlur: string => any
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

  onChange = ({ target: { value } }: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ value })
  }

  toggleFocus = () => {
    this.setState(state => ({ isFocused: !state.isFocused }))
  }

  onInputBlur = () => {
    this.props.onBlur(this.state.value)
    this.toggleFocus()
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
            onChange={this.onChange}
            onFocus={this.toggleFocus}
            onBlur={this.onInputBlur}
          />
        </ContentWrapper>
      </Wrapper>
    )
  }
}

export default TranslationValueRow
