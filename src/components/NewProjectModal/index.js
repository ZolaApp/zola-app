// @flow
import React, { Component } from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import InputWithLabel from '@components/InputWithLabel'
import SelectDropdown from '@components/SelectDropdown'
import Button from '@components/Button'
import type { Locale } from '@types/Locale'
import { Label } from './styles'

type Props = {
  locales: Array<Locale>
}

type State = {
  selectedOption: string | null
}

class NewProjectModal extends Component<Props, State> {
  state = {
    selectedOption: null
  }

  onApply = (options: Array<string>) => {
    this.setState(state => ({ ...state, selectedOption: options[0] }))
  }

  render() {
    const { locales } = this.props
    let normalizedOptions = [...locales]
    normalizedOptions = normalizedOptions
      // We'll need to remove that when the list will be shorter
      .splice(0, 100)
      .map(l => ({ text: l.name, value: l.code }))

    return (
      <div>
        <Wrapper padding="regular">
          <Text>Create a new projet and import your keys</Text>
        </Wrapper>
        <Wrapper padding="regular">
          <Wrapper>
            <InputWithLabel
              label="Project name"
              name="name"
              placeholder="MyAppName"
            />
          </Wrapper>
          <Wrapper mTop="regular">
            <Label htmlFor="locale">Default locale</Label>
            <SelectDropdown
              onApply={options => this.onApply(options)}
              isMultiple={false}
              placeholder="Please select a locale"
              options={normalizedOptions}
            />
          </Wrapper>
          <Wrapper mTop="large">
            <Button>Add project</Button>
          </Wrapper>
        </Wrapper>
      </div>
    )
  }
}

export default NewProjectModal
