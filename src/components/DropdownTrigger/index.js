// @flow
import React from 'react'
import Icon from '@components/Icon'
import { Button } from './styles'

type Props = {
  isOpened: boolean,
  onClick: () => {}
}

const DropdownTrigger = ({ onClick, isOpened }: Props) => {
  return (
    <Button onClick={onClick} isOpened={isOpened}>
      Tags
      <Icon icon="arrow-down" width="16px" />
    </Button>
  )
}

export default DropdownTrigger
