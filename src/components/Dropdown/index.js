// @flow
import * as React from 'react'

type Props = {
  onToggle: () => any,
  children: ({ isOpened: boolean, toggle: () => any }) => React.Node
}

type State = {
  isOpened: boolean
}

class Dropdown extends React.Component<Props, State> {
  state = { isOpened: false }
  toggle = () =>
    this.setState(
      ({ isOpened }) => ({ isOpened: !isOpened }),
      () => this.props.onToggle()
    )

  render() {
    return this.props.children({
      isOpened: this.state.isOpened,
      toggle: this.toggle
    })
  }
}

export default Dropdown
