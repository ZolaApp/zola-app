// @flow
import React from 'react'
import KeysFilters from '@components/KeysFilters'
import Button from '@components/Button'
import { Wrapper } from './styles'

type Props = {
  onAddKeyClick: () => any
}

const KeysHeader = ({ onAddKeyClick }: Props) => {
  return (
    <Wrapper>
      <KeysFilters />
      <Button bordered onClick={onAddKeyClick}>
        Add a new key
      </Button>
    </Wrapper>
  )
}

export default KeysHeader
