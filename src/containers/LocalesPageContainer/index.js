// @flow
import React from 'react'
import { Query } from 'react-apollo'
import ErrorPage from 'next/error'
import View from '@components/LocalesPage'
import Wrapper from '@components/Wrapper'
import Loader from '@components/Loader'
import query from './query.graphql'

type Props = {
  projectSlug: string
}

const LocalesPageContainer = ({ projectSlug }: Props) => (
  <Wrapper flex contentCentered stretch>
    <Query query={query} variables={{ projectSlug }}>
      {({ error, loading, data }: any) => {
        if (error) {
          return <ErrorPage statusCode={404} />
        }

        if (loading) {
          return <Loader isCentered withText isDark />
        }

        const mockedLocales = [
          { name: 'French', code: 'FR', isDefault: true },
          { name: 'English', code: 'EN' }
        ]

        return (
          <View
            project={{
              ...data.project,
              locales: mockedLocales
            }}
          />
        )
      }}
    </Query>
  </Wrapper>
)

export default LocalesPageContainer
