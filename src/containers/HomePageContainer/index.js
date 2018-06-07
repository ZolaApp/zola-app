import React from 'react'
import { Query } from 'react-apollo'
import Wrapper from '@components/Wrapper'
import Loader from '@components/Loader'
import HomePage from '@components/HomePage'
import query from './query.graphql'

const HomePageContainer = () => (
  <Wrapper flex contentCentered>
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) {
          return <Loader isCentered withText isDark />
        }

        if (error) {
          return null
        }

        return (
          <HomePage
            firstName={data.user.firstName}
            stats={data.stats}
            projects={data.projects}
          />
        )
      }}
    </Query>
  </Wrapper>
)

export default HomePageContainer
