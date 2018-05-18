// @flow
import React from 'react'
import { type ValidationError } from '@types/ValidationError'

type Props = {
  id: string,
  errors: Array<ValidationError>
}

const Errors = (props: Props) => (
  <div id={`${props.id}-errors`} role="alert">
    {props.errors.map(error => {
      const id = `${props.id}-error-${error.field}`

      return (
        // The wrapper should always be in the DOM for a11y, even if it’s empty.
        <div key={id} id={id}>
          {typeof error.message === 'string' && <span>{error.message}</span>}
        </div>
      )
    })}
  </div>
)

export default Errors
