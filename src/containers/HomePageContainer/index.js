import React from 'react'
import { Query } from 'react-apollo'
import Wrapper from '@components/Wrapper'
import Loader from '@components/Loader'
import HomePage from '@components/HomePage'
import query from './query.graphql'

const HomePageContainer = () => (
  <Wrapper flex contentCentered>
    <Query query={query}>
      {({ loading, error, data }) =>
        loading ? (
          <Loader isCentered withText isDark />
        ) : (
          <HomePage firstName={data.user.firstName} />
        )
      }
    </Query>
  </Wrapper>
)

export default HomePageContainer
