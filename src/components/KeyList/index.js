// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Button from '@components/Button'
import KeyItem from '@components/KeyItem'
import KeyListPaginationBar from '@components/KeyListPaginationBar'
import type { TranslationKey } from '@types/TranslationKey'
import type { Locale } from '@types/Locale'
import { ListWrapper, NoResultsWrapper } from './styles'

type Props = {
  keys: Array<TranslationKey>,
  locales: Array<Locale>,
  keysCount: number,
  cdnToken: string,
  onAddKeyClick: () => any
}

const KeyList = ({
  keys,
  onAddKeyClick,
  locales,
  cdnToken,
  keysCount
}: Props) => {
  const hasKeys = keys.length > 0

  return (
    <ListWrapper>
      {hasKeys &&
        keys.map((k, index) => (
          <KeyItem
            key={k.key}
            value={k}
            isEven={index % 2 === 0}
            locales={locales}
          />
        ))}
      {!hasKeys && (
        <Wrapper flex contentCentered mTop="xlarge">
          <NoResultsWrapper>
            <Text size="medium">
              Oh no! There aren’t any keys in this project
            </Text>
            <Button onClick={onAddKeyClick}>Create your first key</Button>
          </NoResultsWrapper>
        </Wrapper>
      )}
      {hasKeys && (
        <KeyListPaginationBar keysCount={keysCount} cdnToken={cdnToken} />
      )}
    </ListWrapper>
  )
}

export default KeyList
