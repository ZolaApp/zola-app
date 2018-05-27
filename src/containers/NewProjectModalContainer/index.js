import React from 'react'
import { Query } from 'react-apollo'
import ErrorPage from 'next/error'
import View from '@components/NewProjectModal'
import Wrapper from '@components/Wrapper'
import Loader from '@components/Loader'
import query from './query.graphql'

const NewProjectModalContainer = () => (
  <Wrapper>
    <Query query={query}>
      {({ error, loading, data }) => {
        if (error) {
          return <ErrorPage statusCode={404} />
        }

        if (loading) {
          return <Loader isCentered withText isDark />
        }

        return <View locales={data.locales} />
      }}
    </Query>
  </Wrapper>
)

export default NewProjectModalContainer
