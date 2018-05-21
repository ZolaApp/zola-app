// @flow
import React from 'react'
import clearAccessToken from '@helpers/clearAccessToken'
import redirectTo from '@helpers/redirectTo'

type Props = {}

class Logout extends React.Component<Props> {
  static async getInitialProps(context: any = {}) {
    clearAccessToken(context)
    redirectTo(context, '/login')

    return {}
  }

  render() {
    return null
  }
}

export default Logout
