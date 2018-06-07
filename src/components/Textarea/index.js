// @flow
import React, { Component } from 'react'
import { StyledTextarea } from './styles'

type Props = {
  value: string,
  placeholder?: string,
  onFocus: Event => any,
  onBlur: string => any
}

type State = {
  value: string
}

class Textarea extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { value: props.value }
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value })
  }

  handleBlur = () => {
    this.props.onBlur(this.state.value)
  }

  render() {
    return (
      <StyledTextarea
        {...this.props}
        value={this.state.value}
        onBlur={this.handleBlur}
      />
    )
  }
}

export default Textarea
