// @flow
import React from 'react'
import KeyItemContainer from '@containers/KeyItemContainer'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Button from '@components/Button'
import KeyListPaginationBar from '@components/KeyListPaginationBar'
import type { TranslationKey } from '@types/TranslationKey'
import type { Locale } from '@types/Locale'
import { ListWrapper, NoResultsWrapper } from './styles'

type Props = {
  keys: Array<TranslationKey>,
  locales: Array<Locale>,
  keysCount: number,
  onAddKeyClick: () => any,
  projectSlug: string
}

const KeyList = ({
  keys,
  onAddKeyClick,
  locales,
  keysCount,
  projectSlug
}: Props) => {
  const hasKeys = keys.length > 0

  return (
    <ListWrapper>
      {hasKeys &&
        keys.map((k, index) => (
          <KeyItemContainer
            key={k.key}
            value={k}
            isEven={index % 2 === 0}
            locales={locales}
            projectSlug={projectSlug}
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
      {hasKeys && <KeyListPaginationBar keysCount={keysCount} />}
    </ListWrapper>
  )
}

export default KeyList
