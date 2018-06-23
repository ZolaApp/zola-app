// @flow
import React from 'react'
import clearAccessToken from '@helpers/clearAccessToken'
import redirectTo from '@helpers/redirectTo'

type Props = {}

class Logout extends React.Component<Props> {
  static async getInitialProps(context: any = {}) {
    clearAccessToken(context)

    // Clear the cache now that the user is logged out. This will force a
    // refetch on all queries if another user logs back in.
    await context.apolloClient.cache.reset()
    redirectTo(context, '/login')

    return {}
  }

  render() {
    return null
  }
}

export default Logout
