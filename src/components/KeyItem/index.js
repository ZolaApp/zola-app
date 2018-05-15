// @flow
import React, { Component } from 'react'
import Text from '@components/Text'
import ButtonIcon from '@components/ButtonIcon'
import LocaleLabel from '@components/LocaleLabel'
import Tag from '@components/Tag'
import KeyDetails from '@components/KeyDetails'
import {
  KeyLine,
  KeyValue,
  KeyTranslationColumn,
  KeyTagsAndActionsColumn,
  TagList,
  Actions
} from './styles'

type Props = {}

type State = {
  detailsOpened: boolean
}

export default class KeyItem extends Component<Props, State> {
  state = {
    detailsOpened: false
  }

  onLineClick = () => {
    this.setState(state => ({ ...state, detailsOpened: !state.detailsOpened }))
  }

  render() {
    const { detailsOpened } = this.state

    return (
      <div>
        <KeyLine onClick={this.onLineClick} opened={detailsOpened}>
          <KeyValue>signup.login.success</KeyValue>
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
        </KeyLine>
        {detailsOpened && <KeyDetails />}
      </div>
    )
  }
}
