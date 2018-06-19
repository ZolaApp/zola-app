// @flow
import React from 'react'
import { type Locale } from '@types/Locale'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Button from '@components/Button'
import Checkbox from '@components/Checkbox'
import { StyledLabel } from '@components/InputWithLabel/styles'
import SelectDropdown from '@components/SelectDropdown'
import { CheckboxWrapper } from './styles'

type Props = {
  onSubmit: () => any,
  isLoading: boolean,
  projectId: string,
  locales: Array<Locale>
}

type State = {
  localeId: string,
  prefill: boolean
}

class NewLocaleForm extends React.Component<Props, State> {
  state = { localeId: '', prefill: false }

  onPrefillCheckToggled = (prefill: boolean) => {
    this.setState(state => ({ prefill }))
  }

  onSelectApply = (options: Array<any>) => {
    this.setState(state => ({ localeId: options[0] || '' }))
  }

  render() {
    const { onSubmit, isLoading, projectId, locales } = this.props
    const { localeId, prefill } = this.state

    return (
      <form onSubmit={onSubmit}>
        <Wrapper>
          <StyledLabel htmlFor="locale">Locale</StyledLabel>
          <SelectDropdown
            onApply={this.onSelectApply}
            isMultiple={false}
            placeholder="Locales"
            options={locales.map(locale => ({
              text: locale.name,
              value: locale.id
            }))}
          />

          <CheckboxWrapper>
            <Checkbox onCheckToggled={this.onPrefillCheckToggled} />
            <Text>Use auto-prefill translation feature</Text>
          </CheckboxWrapper>

          <input type="hidden" name="localeId" value={localeId} />
          <input
            type="hidden"
            name="shouldPrefillTranslations"
            value={prefill}
          />
          <input type="hidden" name="projectId" value={projectId} />
        </Wrapper>

        <Wrapper mTop="large">
          <Button
            type="submit"
            isLoading={isLoading}
            disabled={localeId === ''}
          >
            Add locale
          </Button>
        </Wrapper>
      </form>
    )
  }
}

export default NewLocaleForm
