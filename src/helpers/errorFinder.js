// @flow
import { type ValidationError } from '@types/ValidationError'

export default (errors: Array<ValidationError>) => (
  field: string
): Array<ValidationError> => errors.filter(error => error.field === field)
