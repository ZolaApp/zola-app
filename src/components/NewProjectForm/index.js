// @flow
import React from 'react'
import errorFinder from '@helpers/errorFinder'
import Errors from '@components/Errors'
import Wrapper from '@components/Wrapper'
import Button from '@components/Button'
import InputWithLabel from '@components/InputWithLabel'
import SelectDropdown from '@components/SelectDropdown'
import { type ValidationError } from '@types/ValidationError'
import { Label } from './styles'

type Props = {
  onSubmit: () => any,
  locales: Array<{ value: string, text: string }>,
  errors: Array<ValidationError>
}

const NewProjectForm = ({ locales, onSubmit, errors }: Props) => {
  const findErrors = errorFinder(errors)
  const nameErrors = findErrors('name')

  return (
    <form onSubmit={onSubmit}>
      <Wrapper>
        <InputWithLabel
          label="Project name"
          name="name"
          placeholder="MyAppName"
        />
        <Errors name="name" errors={nameErrors} />
      </Wrapper>
      <Wrapper mTop="regular">
        <Label htmlFor="locale">Default locale</Label>
        <SelectDropdown
          onApply={options => {
            console.log('options', options)
          }}
          isMultiple={false}
          placeholder="Please select a locale"
          options={locales}
        />
      </Wrapper>
      <Wrapper mTop="large">
        <Button type="submit">Add project</Button>
      </Wrapper>
    </form>
  )
}

export default NewProjectForm
