import React from 'react'
import { Query } from 'react-apollo'
import Loader from '@components/Loader'
import ProjectsStats from '@components/ProjectsStats'
import query from './query.graphql'

const ProjectsStatsContainer = () => (
  <Query query={query}>
    {({ loading, error, data }) =>
      loading ? (
        <Loader isCentered withText isDark />
      ) : (
        <ProjectsStats firstName={data.user.firstName} />
      )
    }
  </Query>
)

export default ProjectsStatsContainer
