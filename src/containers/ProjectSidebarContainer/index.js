// @flow
import React from 'react'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import View from '@components/ProjectSidebar'
import query from './query.graphql'

type Props = {
  router: any
}

const ProjectSidebarContainer = ({ router }: Props) => {
  const projectSlug = router.query.projectSlug

  return (
    <Query
      query={query}
      // During page transitions, the `router.props.querySlug` can possibly become
      // `undefined`.
      skip={!projectSlug}
      variables={{ projectSlug }}
    >
      {({ loading, error, data }: any) => {
        if (loading || error) {
          return null
        }

        return <View user={data.user} project={data.project} />
      }}
    </Query>
  )
}

export default withRouter(ProjectSidebarContainer)
