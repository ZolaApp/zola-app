// @flow
import React from 'react'
import { Mutation } from 'react-apollo'
import { toast } from 'react-toastify'
import serializeForm from 'form-serialize'
import { type Locale } from '@types/Locale'
import { type TranslationKey } from '@types/TranslationKey'
import projectQuery from '@containers/SingleProjectPageContainer/query.graphql'
import View from '@components/KeyItem'
import mutation from './mutation.graphql'

type Props = {
  projectSlug: string,
  value: TranslationKey,
  locales: Array<Locale>
}

const KeyItemContainer = ({ projectSlug, ...props }: Props) => (
  <Mutation
    mutation={mutation}
    // $FlowFixMe
    refetchQueries={[{ query: projectQuery, variables: { projectSlug } }]}
  >
    {(deleteTranslationKey, mutationData) => (
      <View
        {...props}
        onDelete={async (event: any) => {
          event.preventDefault()
          const variables = serializeForm(event.target, { hash: true })
          // $FlowFixMe
          const response = await deleteTranslationKey({ variables })

          if (response.data.deleteTranslationKey.status === 'SUCCESS') {
            toast.success('✅ Success! The key has been deleted.')
          } else {
            response.data.deleteTranslationKey.errors.forEach(error => {
              toast.error(error.message)
            })
          }
        }}
      />
    )}
  </Mutation>
)

export default KeyItemContainer
