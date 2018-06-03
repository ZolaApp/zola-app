// @flow
import React from 'react'
import { Mutation } from 'react-apollo'
import { toast } from 'react-toastify'
import View from '@components/TranslationValueRow'
import Wrapper from '@components/Wrapper'
import { type Locale } from '@types/Locale'
import { type TranslationKey } from '@types/TranslationKey'
import { type TranslationValue } from '@types/TranslationValue'
import mutation from './mutation.graphql'

type Props = {
  locale: Locale,
  translationKey: TranslationKey
}

const valueFinder = (
  translationValues: Array<TranslationValue>,
  localeCode: string
): TranslationValue | null =>
  (translationValues &&
    translationValues.find(v => v.locale.code === localeCode)) ||
  null

const TranslationValueRowContainer = ({ locale, translationKey }: Props) => (
  <Wrapper>
    <Mutation mutation={mutation}>
      {(addTranslationValueToTranslationKey, mutationData) => {
        return (
          <View
            locale={locale}
            translationKeyValue={valueFinder(
              translationKey.translationValues,
              locale.code
            )}
            errors={
              mutationData.data
                ? mutationData.data.addTranslationValueToTranslationKey.errors
                : []
            }
            isLoading={mutationData.loading}
            onBlur={async value => {
              const variables = {
                value,
                translationKeyId: translationKey.id,
                localeId: locale.id
              }

              // $FlowFixMe
              const response = await addTranslationValueToTranslationKey({
                variables
              })

              if (
                response.data.addTranslationValueToTranslationKey.status ===
                'SUCCESS'
              ) {
                toast.success('✅ Your translation has been updated!')
              }
            }}
          />
        )
      }}
    </Mutation>
  </Wrapper>
)

export default TranslationValueRowContainer
