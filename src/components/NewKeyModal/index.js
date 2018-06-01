// @flow
import React from 'react'
import { type ValidationError } from '@types/ValidationError'
import Wrapper from '@components/Wrapper'
import NewKeyForm from '@components/NewKeyForm'

type Props = {
  onSubmit: () => any,
  errors: Array<ValidationError>,
  isLoading: boolean,
  projectId: string
}

const NewKeyModal = ({ onSubmit, errors, isLoading, projectId }: Props) => (
  <Wrapper padding="regular">
    <NewKeyForm
      onSubmit={onSubmit}
      errors={errors}
      isLoading={isLoading}
      projectId={projectId}
    />
  </Wrapper>
)

export default NewKeyModal
