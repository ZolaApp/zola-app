// @flow
import React from 'react'
import ErrorPage from 'next/error'
import Wrapper from '@components/Wrapper'
import Sidebar from '@components/Sidebar'
import SingleProjectPageContainer from '@containers/SingleProjectPageContainer'
import withAuthentication from '@higherOrders/withAuthentication'

type Props = {
  query: {
    projectSlug: string
  }
}

const Project = (props: Props) => {
  const { projectSlug } = props.query

  if (!projectSlug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Wrapper flex>
      <Sidebar />
      <SingleProjectPageContainer projectSlug={projectSlug} />
    </Wrapper>
  )
}

export default withAuthentication(Project)
