// @flow
import React, { Component } from 'react'
import Text from '@components/Text'
import ButtonIcon from '@components/ButtonIcon'
import LocaleLabel from '@components/LocaleLabel'
import Tag from '@components/Tag'
import KeyDetails from '@components/KeyDetails'
import {
  KeyRow,
  KeyValue,
  KeyTranslationColumn,
  KeyTagsAndActionsColumn,
  TagList,
  Actions
} from './styles'

type Props = {
  isEven: boolean
}

type State = {
  detailsOpened: boolean
}

class KeyItem extends Component<Props, State> {
  static defaultProps = {
    isEven: true
  }

  state = {
    detailsOpened: false
  }

  onRowClick = () => {
    this.setState(state => ({ ...state, detailsOpened: !state.detailsOpened }))
  }

  render() {
    const { isEven } = this.props
    const { detailsOpened } = this.state

    return (
      <div>
        <KeyRow
          onClick={this.onRowClick}
          opened={detailsOpened}
          isEven={isEven}
        >
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
        </KeyRow>
        {detailsOpened && <KeyDetails />}
      </div>
    )
  }
}

export default KeyItem
