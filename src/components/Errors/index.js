// @flow
import React from 'react'
import { type ValidationError } from '@types/ValidationError'
import { Wrapper, SingleError } from './styles'

type Props = {
  name: string,
  errors: Array<ValidationError>
}

const Errors = (props: Props) => (
  // The Wrapper should always be in the DOM for a11y, even if it’s empty.
  <Wrapper
    id={`${props.name}-errors`}
    role="alert"
    hasErrors={props.errors.length > 0}
  >
    {props.errors.map((error, index) => (
      <SingleError key={`error-${index}`}>{error.message}</SingleError>
    ))}
  </Wrapper>
)

export default Errors
