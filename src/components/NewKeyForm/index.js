// @flow
import React from 'react'
import { type ValidationError } from '@types/ValidationError'
import errorFinder from '@helpers/errorFinder'
import Errors from '@components/Errors'
import Wrapper from '@components/Wrapper'
import Button from '@components/Button'
import InputWithLabel from '@components/InputWithLabel'

type Props = {
  onSubmit: () => any,
  errors: Array<ValidationError>,
  isLoading: boolean,
  projectId: string
}

const NewKeyForm = ({ errors, onSubmit, isLoading, projectId }: Props) => {
  const findErrors = errorFinder(errors)
  const nameErrors = findErrors('name')

  return (
    <form onSubmit={onSubmit}>
      <Wrapper>
        <InputWithLabel
          label="Key name"
          name="key"
          placeholder="dashboard.user.greet"
          required
        />
        <input type="hidden" name="projectId" value={projectId} />
        <Errors name="name" errors={nameErrors} />
      </Wrapper>

      <Wrapper mTop="large">
        <Button type="submit" isLoading={isLoading}>
          Add key
        </Button>
      </Wrapper>
    </form>
  )
}

export default NewKeyForm
