// @flow
import React from 'react'
import Router from 'next/router'
import { Mutation } from 'react-apollo'
import serialize from 'form-serialize'
import View from '@components/LoginForm'
import mutation from './mutation.graphql'

const LoginForm = () => (
  <Mutation mutation={mutation}>
    {(loginUser, { loading, error, data }) => (
      <View
        onSubmit={async event => {
          event.preventDefault()

          const variables = serialize(event.target, { hash: true })
          // $FlowFixMe
          const response = await loginUser({ variables })

          if (response.data.loginUser.status === 'SUCCESS') {
            Router.push('/project')
          }
        }}
        isLoading={loading}
        errors={data ? data.loginUser.errors : []}
      />
    )}
  </Mutation>
)

export default LoginForm
