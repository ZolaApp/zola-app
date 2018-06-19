// @flow
import React from 'react'
import ErrorPage from 'next/error'
import SingleProjectPageContainer from '@containers/SingleProjectPageContainer'
import withAuthentication from '@higherOrders/withAuthentication'

type Props = {
  projectSlug: string
}

class Project extends React.Component<Props> {
  static getInitialProps(context: any) {
    const { projectSlug } = context.query

    // We can return an actual 404 before rendering the <ErrorPage> server-side.
    if (!projectSlug && context.res) {
      context.res.statusCode = 404
    }

    return { projectSlug }
  }

  render() {
    if (!this.props.projectSlug) {
      return <ErrorPage statusCode={404} />
    }

    return <SingleProjectPageContainer {...this.props} />
  }
}

export default withAuthentication(Project)
