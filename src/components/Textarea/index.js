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

  getRowsCount = (value: string) => value.split('\n').length

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value })
  }

  handleBlur = () => {
    this.props.onBlur(this.state.value)
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault()
      this.props.onBlur(this.state.value)
    }
  }

  render() {
    const { value } = this.state

    return (
      <StyledTextarea
        {...this.props}
        rows={this.getRowsCount(value) || 1}
        value={value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
      />
    )
  }
}

export default Textarea
