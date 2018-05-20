// @flow
import { parse as parseCookie } from 'cookie'
import { AUTH_COOKIE } from '@constants/cookies'

const getAccessToken = (context?: any): string => {
  const cookies =
    context && context.ctx.req
      ? context.ctx.req.headers.cookie
      : document.cookie

  return parseCookie(cookies || '')[AUTH_COOKIE]
}

export default getAccessToken
