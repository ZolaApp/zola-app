// @flow
import React from 'react'
import Icon from '@components/Icon'
import { Button } from './styles'

type Props = {
  isOpened: boolean,
  onClick: () => {},
  placeholder: string
}

const DropdownTrigger = ({ onClick, isOpened, placeholder }: Props) => {
  return (
    <Button onClick={onClick} isOpened={isOpened}>
      {placeholder}
      <Icon icon="arrow-down" width="16px" />
    </Button>
  )
}

export default DropdownTrigger
