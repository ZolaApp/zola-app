// @flow
import * as React from 'react'

type Props = {
  onToggle: () => any,
  children: ({ isOpen: boolean, toggle: () => any }) => React.Node
}

type State = {
  isOpen: boolean
}

class Dropdown extends React.Component<Props, State> {
  state = { isOpen: false }
  toggle = () =>
    this.setState(
      ({ isOpen }) => ({ isOpen: !isOpen }),
      () => this.props.onToggle()
    )

  render() {
    return this.props.children({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    })
  }
}

export default Dropdown
