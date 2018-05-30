// @flow
import React from 'react'
import { Mutation } from 'react-apollo'
import { toast } from 'react-toastify'
import serializeForm from 'form-serialize'
import View from '@components/KeyDetails'
import Wrapper from '@components/Wrapper'
import { type TranslationKey } from '@types/TranslationKey'
import { type Locale } from '@types/Locale'
import mutation from './mutation.graphql'

type Props = {
  translationKey: TranslationKey,
  locales: Array<Locale>
}

const KeyDetailsContainer = ({ translationKey, locales }: Props) => (
  <Wrapper>
    <Mutation mutation={mutation}>
      {(addTranslationValueToTranslationKey, mutationData) => {
        return (
          <View
            translationKey={translationKey}
            locales={locales}
            errors={
              mutationData.data
                ? mutationData.data.addTranslationValueToTranslationKey.errors
                : []
            }
            isLoading={mutationData.loading}
            onSubmit={async (e: any) => {
              e.preventDefault()
              const formNode = e.target
              const variables = serializeForm(formNode, { hash: true })
              // $FlowFixMe
              const response = await addTranslationValueToTranslationKey({
                variables
              })

              if (
                response.data.addTranslationValueToTranslationKey.status ===
                'SUCCESS'
              ) {
                toast.success('✅ Success! The project has been created.')
              }
            }}
          />
        )
      }}
    </Mutation>
  </Wrapper>
)

export default KeyDetailsContainer
