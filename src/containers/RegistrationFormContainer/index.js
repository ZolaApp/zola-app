// @flow
import React from 'react'
import Router from 'next/router'
import { toast } from 'react-toastify'
import { Mutation } from 'react-apollo'
import serializeForm from 'form-serialize'
import View from '@components/RegistrationForm'
import { injectIntl, type Intl } from 'react-intl'
import mutation from './mutation.graphql'

type Props = {
  intl: Intl
}

const RegistrationFormContainer = ({ intl }: Props) => (
  <Mutation mutation={mutation}>
    {(createUser, { loading, error, data }) => (
      <View
        onSubmit={async event => {
          event.preventDefault()

          const variables = serializeForm(event.target, { hash: true })
          // $FlowFixMe
          const response = await createUser({ variables })

          if (response.data.createUser.status === 'SUCCESS') {
            Router.push('/login')
            toast.success(
              intl.formatMessage({
                id: 'messages.success.create-account'
              })
            )
          }
        }}
        isLoading={loading}
        errors={data ? data.createUser.errors : []}
      />
    )}
  </Mutation>
)

export default injectIntl(RegistrationFormContainer)
