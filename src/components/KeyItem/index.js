// @flow
import React from 'react'
import Text from '@components/Text'
import ButtonIcon from '@components/ButtonIcon'
import LocaleLabel from '@components/LocaleLabel'
import Tag from '@components/Tag'
import {
  KeyWrapper,
  KeyValueColumn,
  KeyValue,
  KeyTranslationColumn,
  KeyTagsAndActionsColumn,
  TagList,
  Actions
} from './styles'

const KeyItem = () => {
  return (
    <KeyWrapper>
      <KeyValueColumn>
        <KeyValue>signup.login.success</KeyValue>
      </KeyValueColumn>
      <KeyTranslationColumn>
        <LocaleLabel>en</LocaleLabel>
        <Text>"What's your first name ?"</Text>
      </KeyTranslationColumn>
      <KeyTagsAndActionsColumn>
        <TagList>
          <Tag>Missing translation</Tag>
        </TagList>
        <Actions>
          <ButtonIcon icon="edit" onClick={() => {}} />
          <ButtonIcon icon="delete" onClick={() => {}} />
        </Actions>
      </KeyTagsAndActionsColumn>
    </KeyWrapper>
  )
}

export default KeyItem
