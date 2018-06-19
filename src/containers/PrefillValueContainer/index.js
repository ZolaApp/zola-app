// @flow
import React from 'react'
import { withRouter } from 'next/router'
import { Mutation } from 'react-apollo'
import { toast } from 'react-toastify'
import View from '@components/PrefillValueAction'
import projectQuery from '@containers/SingleProjectPageContainer/query.graphql'
import { KEYS_PER_PAGE } from '@constants/pagination'
import mutation from './mutation.graphql'

type Props = {
  router: any,
  value: string,
  translationKeyId: string,
  localeId: string
}

const PrefillValueContainer = ({
  router,
  value,
  localeId,
  translationKeyId
}: Props) => (
  <Mutation
    mutation={mutation}
    // $FlowFixMe
    refetchQueries={[
      {
        query: projectQuery,
        variables: {
          projectSlug: router.query.projectSlug,
          page: Number(router.query.page) - 1 || 0,
          pageSize: KEYS_PER_PAGE,
          filters: router.query.filters ? router.query.filters.split(',') : [],
          search: router.query.search || null
        }
      }
    ]}
  >
    {(prefillTranslationValue, { loading, error, data }) => (
      <View
        onClick={async () => {
          const variables = { value, localeId, translationKeyId }
          // $FlowFixMe
          const response = await prefillTranslationValue({ variables })

          if (response.data.prefillTranslationValue.status === 'FAILURE') {
            toast.error(response.data.prefillTranslationValue.errors[0].message)
          }
        }}
        isLoading={loading}
        errors={data ? data.prefillTranslationValue.errors : []}
      />
    )}
  </Mutation>
)

export default withRouter(PrefillValueContainer)
