// @flow
import React, { Component } from 'react'
import Dropdown from '@components/Dropdown'
import DropdownTrigger from '@components/DropdownTrigger'
import Icon from '@components/Icon'
import Text from '@components/Text'
import Button from '@components/Button'
import {
  Wrapper,
  DropdownBubble,
  OptionsList,
  OptionRow,
  DropdownActions
} from './styles'

type Props = {
  onApply: (selectedOptions: string[]) => {},
  options: { value: string, text: string }[]
}

type State = {
  selectedOptions: string[]
}

class SelectDropdown extends Component<Props, State> {
  state = {
    selectedOptions: []
  }

  selectItem = (value: string) => {
    const updatedSelectedOptions = [...this.state.selectedOptions]
    const index = updatedSelectedOptions.indexOf(value)

    if (index !== -1) {
      updatedSelectedOptions.splice(index, 1)
    } else {
      updatedSelectedOptions.push(value)
    }

    this.setState(state => ({
      ...state,
      selectedOptions: updatedSelectedOptions
    }))
  }

  isOptionSelected = (value: string) =>
    this.state.selectedOptions.includes(value)

  onToggle = () => {
    this.setState(state => ({ ...state, selectedOptions: [] }))
  }

  render() {
    const { selectedOptions } = this.state
    const { options, onApply } = this.props

    return (
      <Dropdown onToggle={this.onToggle}>
        {({ isOpened, toggle }) => (
          <Wrapper>
            <DropdownTrigger onClick={toggle} isOpened={isOpened} />
            {isOpened && (
              <DropdownBubble>
                <OptionsList>
                  {options.map(option => (
                    <OptionRow
                      key={option.value}
                      onClick={() => this.selectItem(option.value)}
                      selected={this.isOptionSelected(option.value)}
                    >
                      <Icon icon="tick" width="10px" />
                      <Text size="regular">{option.text}</Text>
                    </OptionRow>
                  ))}
                </OptionsList>
                <DropdownActions>
                  <Button transparent onClick={toggle}>
                    Cancel
                  </Button>
                  <Button transparent onClick={() => onApply(selectedOptions)}>
                    Apply
                  </Button>
                </DropdownActions>
              </DropdownBubble>
            )}
          </Wrapper>
        )}
      </Dropdown>
    )
  }
}

export default SelectDropdown
