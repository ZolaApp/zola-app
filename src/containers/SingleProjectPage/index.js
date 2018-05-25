// @flow
import React from 'react'
import { Query } from 'react-apollo'
import ErrorPage from 'next/error'
import View from '@components/SingleProjectPage'
import Wrapper from '@components/Wrapper'
import Loader from '@components/Loader'
import query from './query.graphql'

type Props = {
  projectSlug: string
}

const SingleProjectPage = (props: Props) => (
  <Wrapper flex contentCentered>
    <Query query={query} variables={{ projectSlug: props.projectSlug }}>
      {({ error, loading, data }) => {
        if (error) {
          return <ErrorPage statusCode={404} />
        }

        if (loading) {
          return <Loader isCentered withText isDark />
        }

        return <View />
      }}
    </Query>
  </Wrapper>
)

export default SingleProjectPage
