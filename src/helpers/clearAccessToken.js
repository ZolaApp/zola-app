// @flow
import { serialize as serializeCookie } from 'cookie'
import { AUTH_COOKIE } from '@constants/cookies'

const clearAccessToken = (context: any): void => {
  const epochTimestamp = new Date(0)
  const cookies = serializeCookie(AUTH_COOKIE, '', {
    // Setting a `maxAge` in the past expires the cookie.
    maxAge: epochTimestamp
  })

  if (context && context.ctx.res) {
    const response = context.ctx.res
    response.setHeader('Set-Cookie', cookies)
  } else {
    document.cookie = cookies
  }
}

export default clearAccessToken
