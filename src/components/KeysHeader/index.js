// @flow
import React from 'react'
import qs from 'qs'
import { withRouter } from 'next/router'
import KeysFilters from '@components/KeysFilters'
import Button from '@components/Button'
import Input from '@components/Input'
import { Wrapper } from './styles'

type Props = {
  router: any,
  onAddKeyClick: () => any
}

type State = {
  search: string
}

class KeysHeader extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      search: props.router.query.search ? props.router.query.search : ''
    }
  }

  onChange = (e: any) => {
    this.setState({ search: e.target.value })
  }

  onKeyUp = (e: any) => {
    const { router } = this.props
    const { keyCode, target } = e

    if (keyCode === 13) {
      const queryString = qs.stringify({
        page: 1,
        filters: router.filters ? router.filters.join(',') : [],
        search: target.value
      })
      router.replace(`/project/${router.query.projectSlug}?${queryString}`)
    }
  }

  render() {
    const { onAddKeyClick } = this.props

    return (
      <Wrapper>
        <KeysFilters />
        <Input
          placeholder="Search for a key"
          name="search"
          onKeyUp={this.onKeyUp}
          onChange={this.onChange}
          value={this.state.search}
        />
        <Button bordered onClick={onAddKeyClick}>
          Add a new key
        </Button>
      </Wrapper>
    )
  }
}

export default withRouter(KeysHeader)
