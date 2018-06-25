// @flow
import React, { Component } from 'react'
import Dropdown from '@components/Dropdown'
import DropdownTrigger from '@components/DropdownTrigger'
import Icon from '@components/Icon'
import Text from '@components/Text'
import Button from '@components/Button'
import { FormattedMessage } from 'react-intl'
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
  onCancel: () => any,
  options: Array<SelectOption>,
  selectedOptions: string[],
  isMultiple: boolean,
  hasValue: boolean,
  placeholder: string
}

type State = {
  selectedOptions: string[]
}

class SelectDropdown extends Component<Props, State> {
  static defaultProps = {
    onCancel: () => {},
    selectedOptions: [],
    isMultiple: true,
    hasValue: false,
    placeholder: 'Please select an option'
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      selectedOptions: props.selectedOptions
    }
  }

  selectItem = (value: string, apply: any) => {
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

    if (!isMultiple) {
      apply()
    }

    this.setState(state => ({
      ...state,
      selectedOptions: updatedSelectedOptions
    }))
  }

  isOptionSelected = (value: string) =>
    this.state.selectedOptions.includes(value)

  getTriggerLabel = () => {
    const { options, isMultiple, placeholder } = this.props
    const selectedOptionsTexts = options
      .filter(o => this.state.selectedOptions.includes(o.value))
      .map(o => o.text)

    let endValue = selectedOptionsTexts.length
      ? selectedOptionsTexts.join(', ')
      : placeholder

    if (isMultiple) {
      endValue =
        selectedOptionsTexts.length > 0
          ? `${selectedOptionsTexts.length} filter${
              selectedOptionsTexts.length > 1 ? 's' : ''
            }`
          : placeholder
    }

    return endValue
  }

  onApply = () => {
    this.props.onApply(this.state.selectedOptions)
  }

  onCancel = () => {
    this.setState(
      state => ({ ...state, selectedOptions: [] }),
      this.props.onCancel
    )
  }

  render() {
    const { options, isMultiple, hasValue } = this.props

    return (
      <Dropdown onCancel={this.onCancel} onApply={this.onApply}>
        {({ isOpened, toggle, cancel, apply }) => (
          <Wrapper>
            <DropdownTrigger
              onClick={toggle}
              isOpened={isOpened}
              triggerLabel={this.getTriggerLabel()}
              hasValue={hasValue}
            />
            {isOpened && (
              <DropdownBubble>
                <OptionsList>
                  {options.map(option => (
                    <OptionRow
                      key={option.value}
                      onClick={() => this.selectItem(option.value, apply)}
                      selected={this.isOptionSelected(option.value)}
                      type="button"
                    >
                      <Icon icon="tick" width="10px" />
                      <Text size="regular">{option.text}</Text>
                    </OptionRow>
                  ))}
                </OptionsList>
                {isMultiple && (
                  <DropdownActions>
                    <Button transparent onClick={cancel}>
                      <FormattedMessage id="dropdown.cancel" />
                    </Button>
                    <Button transparent onClick={apply}>
                      <FormattedMessage id="dropdown.apply" />
                    </Button>
                  </DropdownActions>
                )}
              </DropdownBubble>
            )}
          </Wrapper>
        )}
      </Dropdown>
    )
  }
}

export default SelectDropdown
