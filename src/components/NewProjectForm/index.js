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
import { injectIntl, FormattedMessage, type Intl } from 'react-intl'
import { Label } from './styles'

type Props = {
  intl: Intl,
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
    this.setState(state => ({ defaultLocaleId: options[0] || '' }))
  }

  render() {
    const { defaultLocaleId } = this.state
    const { errors, locales, onSubmit, isLoading } = this.props
    const { formatMessage } = this.props.intl
    const findErrors = errorFinder(errors)
    const nameErrors = findErrors('name')

    return (
      <form onSubmit={onSubmit}>
        <Wrapper>
          <InputWithLabel
            label={formatMessage({ id: 'modal.add-project.input.label' })}
            name="name"
            placeholder="MyAppName"
            required
          />
          <Errors name="name" errors={nameErrors} />
        </Wrapper>
        <Wrapper mTop="regular">
          <Label htmlFor="locale">
            <FormattedMessage id="modal.add-project.select.label" />
          </Label>
          <SelectDropdown
            onApply={this.onSelectApply}
            isMultiple={false}
            hasValue={defaultLocaleId !== ''}
            placeholder={formatMessage({
              id: 'modal.add-project.select.placeholder'
            })}
            options={locales}
          />
          <input type="hidden" name="defaultLocaleId" value={defaultLocaleId} />
        </Wrapper>
        <Wrapper mTop="large">
          <Button
            type="submit"
            disabled={defaultLocaleId === ''}
            isLoading={isLoading}
          >
            <FormattedMessage id="modal.add-project.submit" />
          </Button>
        </Wrapper>
      </form>
    )
  }
}

export default injectIntl(NewProjectForm)
