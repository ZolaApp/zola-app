// @flow
import * as React from 'react'

type Props = {
  onToggle: () => any,
  onCancel: () => any,
  onApply: () => any,
  children: ({
    isOpened: boolean,
    toggle: () => any,
    cancel?: () => any,
    apply?: () => any
  }) => React.Node
}

type State = {
  isOpened: boolean
}

class Dropdown extends React.Component<Props, State> {
  static defaultProps = {
    onToggle: () => {},
    onCancel: () => {},
    onApply: () => {}
  }

  state = { isOpened: false }

  cancel = () => {
    this.setState(
      ({ isOpened }) => ({ isOpened: !isOpened }),
      () => this.props.onCancel()
    )
  }

  apply = () => {
    this.setState(
      ({ isOpened }) => ({ isOpened: !isOpened }),
      () => this.props.onApply()
    )
  }

  toggle = () =>
    this.setState(
      ({ isOpened }) => ({ isOpened: !isOpened }),
      () => this.props.onToggle()
    )

  render() {
    return this.props.children({
      isOpened: this.state.isOpened,
      toggle: this.toggle,
      apply: this.apply,
      cancel: this.cancel
    })
  }
}

export default Dropdown
