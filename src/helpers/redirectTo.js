// @flow
import Router from 'next/router'

const redirectTo = (context: any = {}, target: string): void => {
  const response = context.res

  if (response) {
    response.writeHead(303, { Location: target })
    response.end()
  } else {
    Router.replace(target)
  }
}

export default redirectTo
