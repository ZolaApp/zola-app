// @flow
import React from 'react'
import Router from 'next/router'
import { toast } from 'react-toastify'
import { Mutation } from 'react-apollo'
import serialize from 'form-serialize'
import View from '@components/RegistrationForm'
import mutation from './mutation.graphql'

const RegistrationForm = () => (
  <Mutation mutation={mutation}>
    {(createUser, { loading, error, data }) => (
      <View
        onSubmit={async event => {
          event.preventDefault()

          const variables = serialize(event.target, { hash: true })
          // $FlowFixMe
          const response = await createUser({ variables })

          if (response.data.createUser.status === 'SUCCESS') {
            Router.push('/login')
            toast.success('✅ Success! You can now log in to your account.')
          }
        }}
        isLoading={loading}
        errors={data ? data.createUser.errors : []}
      />
    )}
  </Mutation>
)

export default RegistrationForm
