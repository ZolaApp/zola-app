// @flow
import React from 'react'
import { type Locale } from '@types/Locale'
import Wrapper from '@components/Wrapper'
import Button from '@components/Button'
import { StyledLabel } from '@components/InputWithLabel/styles'
import SelectDropdown from '@components/SelectDropdown'

type Props = {
  onSubmit: () => any,
  isLoading: boolean,
  projectId: string,
  locales: Array<Locale>
}

type State = {
  localeId: string
}

class NewLocaleForm extends React.Component<Props, State> {
  state = { localeId: '' }

  onSelectApply = (options: Array<any>) => {
    this.setState(state => ({ localeId: options[0] || '' }))
  }

  render() {
    const { onSubmit, isLoading, projectId, locales } = this.props
    const { localeId } = this.state

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

          <input type="hidden" name="localeId" value={localeId} />
          <input type="hidden" name="projectId" value={projectId} />
        </Wrapper>

        <Wrapper mTop="large">
          <Button
            type="submit"
            isLoading={isLoading}
            disabled={localeId === ''}
          >
            Add key
          </Button>
        </Wrapper>
      </form>
    )
  }
}

export default NewLocaleForm
