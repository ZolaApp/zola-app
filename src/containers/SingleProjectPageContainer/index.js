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

class SingleProjectPageContainer extends React.Component<Props> {
  static getInitialProps(context: any) {
    const { projectSlug } = context.query

    // We can return an actual 404 before rendering the <ErrorPage> server-side.
    if (!projectSlug && context.res) {
      context.res.statusCode = 404
    }

    return { projectSlug }
  }

  render() {
    const { projectSlug } = this.props

    if (!projectSlug) {
      return <ErrorPage statusCode={404} />
    }

    return (
      <Wrapper flex contentCentered stretch>
        <Query query={query} variables={{ projectSlug }}>
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
}

export default SingleProjectPageContainer
