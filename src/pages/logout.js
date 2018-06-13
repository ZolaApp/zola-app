// @flow
import React from 'react'
import clearAccessToken from '@helpers/clearAccessToken'
import redirectTo from '@helpers/redirectTo'

type Props = {}

class Logout extends React.Component<Props> {
  static async getInitialProps(context: any = {}) {
    clearAccessToken(context)

    // Force a reload of all the current queries now that the user is
    // logged out.
    await context.apolloClient.cache.reset()
    redirectTo(context, '/login')

    return {}
  }

  render() {
    return null
  }
}

export default Logout
