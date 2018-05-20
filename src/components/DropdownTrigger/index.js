// @flow
import React from 'react'
import Icon from '@components/Icon'
import { Button } from './styles'

type Props = {
  onClick: () => {}
}

const DropdownTrigger = ({ onClick }: Props) => {
  return (
    <div>
      <Button onClick={onClick}>
        Tags
        <Icon icon="arrow-down" width="16px" />
      </Button>
    </div>
  )
}

export default DropdownTrigger
