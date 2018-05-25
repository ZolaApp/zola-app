// @flow
import React from 'react'
import { Query } from 'react-apollo'
import ErrorPage from 'next/error'
import View from '@components/SingleProjectPage'
import query from './query.graphql'

type Props = {
  query: {
    projectSlug: string
  }
}

const SingleProjectPage = (props: Props) => {
  if (!props.query.projectSlug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Query query={query} variables={{ projectSlug: props.query.projectSlug }}>
      {({ error, loading, data }) => {
        if (error) {
          return <ErrorPage statusCode={404} />
        }

        if (loading) {
          return 'Loading…'
        }

        return <View />
      }}
    </Query>
  )
}

export default SingleProjectPage
