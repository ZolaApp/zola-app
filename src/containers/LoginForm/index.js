// @flow
import React from 'react'
import Router from 'next/router'
import { Mutation } from 'react-apollo'
import serializeForm from 'form-serialize'
import { serialize as serializeCookie } from 'cookie'
import { AUTH_COOKIE } from '@constants/cookies'
import View from '@components/LoginForm'
import mutation from './mutation.graphql'

const LoginForm = () => (
  <Mutation mutation={mutation}>
    {(loginUser, { loading, error, data }) => (
      <View
        onSubmit={async event => {
          event.preventDefault()

          const variables = serializeForm(event.target, { hash: true })
          // $FlowFixMe
          const response = await loginUser({ variables })
          const data = response.data.loginUser

          if (data.status === 'SUCCESS') {
            document.cookie = serializeCookie(AUTH_COOKIE, data.token, {
              // Expire cookie after a year
              maxAge: 60 * 60 * 24 * 365
            })
            Router.push('/')
          }
        }}
        isLoading={loading}
        errors={data ? data.loginUser.errors : []}
      />
    )}
  </Mutation>
)

export default LoginForm
