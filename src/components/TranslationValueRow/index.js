// @flow
import React, { Component } from 'react'
import { type Locale } from '@types/Locale'
import { Wrapper, ContentWrapper, LocaleWrapper, Textarea } from './styles'

type Props = {
  locale: Locale
}

type State = {
  isFocused: boolean
}

class TranslationValueRow extends Component<Props, State> {
  state = {
    isFocused: false
  }

  toggleFocus = () => {
    this.setState(state => ({ isFocused: !state.isFocused }))
  }

  render() {
    const { isFocused } = this.state
    const { locale } = this.props

    return (
      <Wrapper>
        <ContentWrapper isFocused={isFocused}>
          <LocaleWrapper>{locale.name}</LocaleWrapper>
          <Textarea
            rows="1"
            placeholder={`Translation for ${locale.name}`}
            onFocus={this.toggleFocus}
            onBlur={this.toggleFocus}
          />
        </ContentWrapper>
      </Wrapper>
    )
  }
}

export default TranslationValueRow
