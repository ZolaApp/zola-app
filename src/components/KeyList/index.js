// @flow
import React from 'react'
import KeyItem from '@components/KeyItem'
import type { TranslationKey } from '@types/TranslationKey'
import { ListWrapper } from './styles'

type Props = {
  keys: Array<TranslationKey>
}

const KeyList = ({ keys }: Props) => {
  return (
    <ListWrapper>
      {keys.map((k, index) => (
        <KeyItem key={k.key} value={k} isEven={index % 2 === 0} />
      ))}
    </ListWrapper>
  )
}

export default KeyList
