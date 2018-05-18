// @flow
import React from 'react'
import { Mutation } from 'react-apollo'
import serialize from 'form-serialize'
import View from '@components/RegistrationForm'
import mutation from './mutation.graphql'

const RegistrationForm = () => (
  <Mutation mutation={mutation}>
    {(createUser, { loading, error, data }) => (
      <View
        onSubmit={event => {
          event.preventDefault()

          const variables = serialize(event.target, { hash: true })
          createUser({ variables })
        }}
        isLoading={loading}
        errors={data ? data.createUser.errors : []}
      />
    )}
  </Mutation>
)

export default RegistrationForm
