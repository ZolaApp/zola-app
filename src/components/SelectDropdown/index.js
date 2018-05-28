// @flow
import React, { Component } from 'react'
import Dropdown from '@components/Dropdown'
import DropdownTrigger from '@components/DropdownTrigger'
import Icon from '@components/Icon'
import Text from '@components/Text'
import Button from '@components/Button'
import { type SelectOption } from '@types/SelectOption'
import {
  Wrapper,
  DropdownBubble,
  OptionsList,
  OptionRow,
  DropdownActions
} from './styles'

type Props = {
  onApply: (Array<string>) => any,
  options: Array<SelectOption>,
  isMultiple: boolean,
  placeholder: string
}

type State = {
  selectedOptions: string[]
}

class SelectDropdown extends Component<Props, State> {
  static defaultProps = {
    isMultiple: true,
    placeholder: 'Please select an option'
  }

  state = {
    selectedOptions: []
  }

  selectItem = (value: string) => {
    const { isMultiple } = this.props
    const updatedSelectedOptions = [...this.state.selectedOptions]
    const index = updatedSelectedOptions.indexOf(value)

    if (index !== -1) {
      updatedSelectedOptions.splice(index, 1)
    } else if (!isMultiple) {
      updatedSelectedOptions.splice(index, 1)
      updatedSelectedOptions.push(value)
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

  getTriggerLabel = () => {
    const { options } = this.props
    const selectedOptionsTexts = options
      .filter(o => this.state.selectedOptions.includes(o.value))
      .map(o => o.text)

    return selectedOptionsTexts.length
      ? selectedOptionsTexts.join(', ')
      : this.props.placeholder
  }

  onApply = () => {
    this.props.onApply(this.state.selectedOptions)
  }

  onCancel = () => {
    this.setState(state => ({ ...state, selectedOptions: [] }))
  }

  render() {
    const { options } = this.props

    return (
      <Dropdown onCancel={this.onCancel} onApply={this.onApply}>
        {({ isOpened, toggle, cancel, apply }) => (
          <Wrapper>
            <DropdownTrigger
              onClick={toggle}
              isOpened={isOpened}
              triggerLabel={this.getTriggerLabel()}
            />
            {isOpened && (
              <DropdownBubble>
                <OptionsList>
                  {options.map(option => (
                    <OptionRow
                      key={option.value}
                      onClick={() => this.selectItem(option.value)}
                      selected={this.isOptionSelected(option.value)}
                      type="button"
                    >
                      <Icon icon="tick" width="10px" />
                      <Text size="regular">{option.text}</Text>
                    </OptionRow>
                  ))}
                </OptionsList>
                <DropdownActions>
                  <Button transparent onClick={cancel}>
                    Cancel
                  </Button>
                  <Button
                    transparent
                    onClick={apply}
                    disabled={this.state.selectedOptions.length === 0}
                  >
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
