// @flow
import React, { Component } from 'react'
import Text from '@components/Text'
import ButtonIcon from '@components/ButtonIcon'
import LocaleLabel from '@components/LocaleLabel'
import Tag from '@components/Tag'
import KeyDetailsContainer from '@containers/KeyDetailsContainer'
import type { TranslationKey } from '@types/TranslationKey'
import type { Locale } from '@types/Locale'
import {
  KeyRow,
  KeyValue,
  KeyTranslationColumn,
  KeyTagsAndActionsColumn,
  TagList
} from './styles'

type Props = {
  value: TranslationKey,
  isEven: boolean,
  locales: Array<Locale>
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
    const { isEven, value, locales } = this.props
    const { detailsOpened } = this.state
    const { key } = value

    return (
      <div>
        <KeyRow
          onClick={this.onRowClick}
          opened={detailsOpened}
          isEven={isEven}
        >
          <KeyValue>{key}</KeyValue>
          <KeyTranslationColumn>
            <LocaleLabel>en</LocaleLabel>
            <Text>"What's your first name ?"</Text>
          </KeyTranslationColumn>
          <KeyTagsAndActionsColumn>
            <TagList>
              <Tag>Missing translation</Tag>
            </TagList>
            <ButtonIcon icon="delete" onClick={() => {}} />
          </KeyTagsAndActionsColumn>
        </KeyRow>
        {detailsOpened && (
          <KeyDetailsContainer translationKey={value} locales={locales} />
        )}
      </div>
    )
  }
}

export default KeyItem
