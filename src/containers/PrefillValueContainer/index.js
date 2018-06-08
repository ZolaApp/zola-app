// @flow
import React from 'react'
import { toast } from 'react-toastify'
import { Mutation } from 'react-apollo'
import View from '@components/PrefillValueAction'
import mutation from './mutation.graphql'

type Props = {
  value: string,
  translationKeyId: string,
  localeId: string
}

const PrefillValueContainer = ({
  value,
  localeId,
  translationKeyId
}: Props) => (
  <Mutation mutation={mutation}>
    {(prefillTranslationValue, { loading, error, data }) => (
      <View
        onClick={async () => {
          const variables = { value, localeId, translationKeyId }
          // $FlowFixMe
          const response = await prefillTranslationValue({ variables })

          if (response.data.prefillTranslationValue.status === 'SUCCESS') {
            toast.success('Success!')
          }
        }}
        isLoading={loading}
        errors={data ? data.prefillTranslationValue.errors : []}
      />
    )}
  </Mutation>
)

export default PrefillValueContainer
