// @flow
import Router from 'next/router'

const redirectTo = (context: any, target: string): void => {
  if (context && context.ctx.res) {
    const response = context.ctx.res

    response.writeHead(303, { Location: target })
    response.end()
  } else {
    Router.replace(target)
  }
}

export default redirectTo
