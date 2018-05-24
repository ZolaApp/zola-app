// @flow

const throw404 = (): void => {
  const error = new Error()
  // $FlowFixMe
  error.code = 'ENOENT'

  throw error
}

export default throw404
