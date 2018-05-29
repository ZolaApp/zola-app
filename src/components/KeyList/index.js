// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Button from '@components/Button'
import KeyItem from '@components/KeyItem'
import type { TranslationKey } from '@types/TranslationKey'
import { ListWrapper, NoResultsWrapper } from './styles'

type Props = {
  keys: Array<TranslationKey>,
  onAddKeyClick: () => any
}

const KeyList = ({ keys, onAddKeyClick }: Props) => {
  const hasKeys = Boolean(keys.length)

  return (
    <ListWrapper>
      {hasKeys &&
        keys.map((k, index) => (
          <KeyItem key={k.key} value={k} isEven={index % 2 === 0} />
        ))}
      {!hasKeys && (
        <Wrapper flex contentCentered mTop="xlarge">
          <NoResultsWrapper>
            <Text size="medium">
              Oh no! There isn’t any keys in this project
            </Text>
            <Button onClick={onAddKeyClick}>Create your first key</Button>
          </NoResultsWrapper>
        </Wrapper>
      )}
    </ListWrapper>
  )
}

export default KeyList
