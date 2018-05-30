// @flow
import React, { Component } from 'react'
import errorFinder from '@helpers/errorFinder'
import Errors from '@components/Errors'
import Wrapper from '@components/Wrapper'
import Button from '@components/Button'
import InputWithLabel from '@components/InputWithLabel'
import { type ValidationError } from '@types/ValidationError'

type Props = {
  onSubmit: () => any,
  errors: Array<ValidationError>,
  isLoading: boolean,
  projectId: string
}

class NewKeyForm extends Component<Props> {
  render() {
    const { errors, onSubmit, isLoading, projectId } = this.props
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
}

export default NewKeyForm
