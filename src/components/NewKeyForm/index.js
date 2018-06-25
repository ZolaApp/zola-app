// @flow
import React from 'react'
import { type ValidationError } from '@types/ValidationError'
import errorFinder from '@helpers/errorFinder'
import Errors from '@components/Errors'
import Wrapper from '@components/Wrapper'
import Button from '@components/Button'
import InputWithLabel from '@components/InputWithLabel'
import { injectIntl, FormattedMessage, type Intl } from 'react-intl'

type Props = {
  intl: Intl,
  onSubmit: () => any,
  errors: Array<ValidationError>,
  isLoading: boolean,
  projectId: string
}

const NewKeyForm = ({
  errors,
  onSubmit,
  isLoading,
  projectId,
  intl
}: Props) => {
  const { formatMessage } = intl
  const findErrors = errorFinder(errors)
  const nameErrors = findErrors('name')

  return (
    <form onSubmit={onSubmit}>
      <Wrapper>
        <InputWithLabel
          label={formatMessage({ id: 'modal.add-key.input.label' })}
          name="key"
          placeholder="dashboard.user.greet"
          required
        />
        <input type="hidden" name="projectId" value={projectId} />
        <Errors name="name" errors={nameErrors} />
      </Wrapper>

      <Wrapper mTop="large">
        <Button type="submit" isLoading={isLoading}>
          <FormattedMessage id="modal.add-key.submit" />
        </Button>
      </Wrapper>
    </form>
  )
}

export default injectIntl(NewKeyForm)
