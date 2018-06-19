// @flow
import React from 'react'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import ErrorPage from 'next/error'
import View from '@components/SingleProjectPage'
import Wrapper from '@components/Wrapper'
import Loader from '@components/Loader'
import { KEYS_PER_PAGE } from '@constants/pagination'
import query from './query.graphql'

type Props = {
  router: any,
  projectSlug: string
}

const SingleProjectPageContainer = ({ projectSlug, router }: Props) => {
  const activePageIndex = Number(router.query.page) - 1 || 0
  const filters = router.query.filters ? router.query.filters.split(',') : []
  const search = router.query.search || null

  return (
    <Wrapper flex contentCentered stretch>
      <Query
        query={query}
        variables={{
          projectSlug,
          page: activePageIndex,
          pageSize: KEYS_PER_PAGE,
          filters,
          search
        }}
      >
        {({ error, loading, data }: any) => {
          if (error) {
            return <ErrorPage statusCode={404} />
          }

          if (loading) {
            return <Loader isCentered withText isDark />
          }

          return <View project={data.project} />
        }}
      </Query>
    </Wrapper>
  )
}

export default withRouter(SingleProjectPageContainer)
