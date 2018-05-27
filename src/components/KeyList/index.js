import React from 'react'
import KeyItem from '@components/KeyItem'
import { ListWrapper } from './styles'

const KeyList = () => {
  return (
    <ListWrapper>
      <KeyItem isEven />
      <KeyItem isEven={false} />
      <KeyItem isEven />
      <KeyItem isEven={false} />
    </ListWrapper>
  )
}

export default KeyList
