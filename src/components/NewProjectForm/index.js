// @flow
import React, { Component } from 'react'
import errorFinder from '@helpers/errorFinder'
import Errors from '@components/Errors'
import Wrapper from '@components/Wrapper'
import Button from '@components/Button'
import InputWithLabel from '@components/InputWithLabel'
import SelectDropdown from '@components/SelectDropdown'
import { type ValidationError } from '@types/ValidationError'
import { type SelectOption } from '@types/SelectOption'
import { Label } from './styles'

type Props = {
  onSubmit: () => any,
  locales: Array<SelectOption>,
  errors: Array<ValidationError>,
  isLoading: boolean
}

type State = {
  defaultLocaleId: string
}

class NewProjectForm extends Component<Props, State> {
  state = {
    defaultLocaleId: ''
  }

  onSelectApply = (options: Array<any>) => {
    this.setState(state => ({ ...state, defaultLocaleId: options[0] || '' }))
  }

  render() {
    const { defaultLocaleId } = this.state
    const { errors, locales, onSubmit, isLoading } = this.props
    const findErrors = errorFinder(errors)
    const nameErrors = findErrors('name')

    return (
      <form onSubmit={onSubmit}>
        <Wrapper>
          <InputWithLabel
            label="Project name"
            name="name"
            placeholder="MyAppName"
            required
          />
          <Errors name="name" errors={nameErrors} />
        </Wrapper>
        <Wrapper mTop="regular">
          <Label htmlFor="locale">Default locale</Label>
          <SelectDropdown
            onApply={this.onSelectApply}
            isMultiple={false}
            hasValue={defaultLocaleId !== ''}
            placeholder="Please select a locale"
            options={locales}
          />
          <input
            required
            type="hidden"
            name="defaultLocaleId"
            value={defaultLocaleId}
          />
        </Wrapper>
        <Wrapper mTop="large">
          <Button
            type="submit"
            disabled={defaultLocaleId === ''}
            isLoading={isLoading}
          >
            Add project
          </Button>
        </Wrapper>
      </form>
    )
  }
}

export default NewProjectForm
