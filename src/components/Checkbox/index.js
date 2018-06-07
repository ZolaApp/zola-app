// @flow
import React from 'react'
import Icon from '@components/Icon'
import { StyledCheckbox } from './styles'

type Props = {
  isChecked: boolean,
  onCheckToggled: boolean => any
}

type State = {
  isChecked: boolean
}

class Checkbox extends React.Component<Props, State> {
  static defaultProps = {
    isChecked: false
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      isChecked: props.isChecked
    }
  }

  onCheckboxClick = (e: any) => {
    const newValue = !this.state.isChecked
    this.setState({ isChecked: newValue }, this.props.onCheckToggled(newValue))
  }

  render() {
    const { isChecked } = this.state

    return (
      <StyledCheckbox
        onClick={this.onCheckboxClick}
        isChecked={this.state.isChecked}
      >
        {isChecked && <Icon icon="checkbox" />}
      </StyledCheckbox>
    )
  }
}

export default Checkbox
