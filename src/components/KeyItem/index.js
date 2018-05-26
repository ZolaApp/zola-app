// @flow
import React, { Component } from 'react'
import Text from '@components/Text'
import ButtonIcon from '@components/ButtonIcon'
import LocaleLabel from '@components/LocaleLabel'
import Tag from '@components/Tag'
import KeyDetails from '@components/KeyDetails'
import type { TranslationKey } from '@types/TranslationKey'
import {
  KeyRow,
  KeyValue,
  KeyTranslationColumn,
  KeyTagsAndActionsColumn,
  TagList,
  Actions
} from './styles'

type Props = {
  value: TranslationKey
}

type State = {
  detailsOpened: boolean
}

export default class KeyItem extends Component<Props, State> {
  state = {
    detailsOpened: false
  }

  onRowClick = () => {
    this.setState(state => ({ ...state, detailsOpened: !state.detailsOpened }))
  }

  render() {
    const { detailsOpened } = this.state
    const { value } = this.props
    const { key } = value

    return (
      <div>
        <KeyRow onClick={this.onRowClick} opened={detailsOpened}>
          <KeyValue>{key}</KeyValue>
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
        </KeyRow>
        {detailsOpened && <KeyDetails />}
      </div>
    )
  }
}
