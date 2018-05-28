// @flow
import React from 'react'
import Icon from '@components/Icon'
import { Button } from './styles'

type Props = {
  isOpened: boolean,
  onClick: () => {},
  triggerLabel: string
}

const DropdownTrigger = ({ onClick, isOpened, triggerLabel }: Props) => (
  <Button onClick={onClick} isOpened={isOpened} type="button">
    {triggerLabel}
    <Icon icon="arrow-down" width="16px" />
  </Button>
)

export default DropdownTrigger
