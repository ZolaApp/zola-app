// @flow
import React, { Component } from 'react'
import Text from '@components/Text'
import Icon from '@components/Icon'
import ButtonIcon from '@components/ButtonIcon'
import LocaleLabel from '@components/LocaleLabel'
import Tag from '@components/Tag'
import KeyDetails from '@components/KeyDetails'
import type { TranslationKey } from '@types/TranslationKey'
import type { TranslationValue } from '@types/TranslationValue'
import type { Locale } from '@types/Locale'
import { injectIntl, FormattedMessage, type Intl } from 'react-intl'
import {
  KeyRow,
  KeyValue,
  KeyTranslationColumn,
  KeyTagsAndActionsColumn,
  TagList
} from './styles'

type Props = {
  intl: Intl,
  value: TranslationKey,
  isEven: boolean,
  locales: Array<Locale>,
  onDeleteSubmit: () => any
}

type State = {
  detailsOpened: boolean
}

const valueGetter = (
  translationValues: Array<TranslationValue>,
  localeCode: string
) => {
  const translationValue = translationValues.find(
    item => item.locale.code === localeCode
  )

  return translationValue ? translationValue.value : null
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

  onDeleteClick = (event: Event) => event.stopPropagation()

  render() {
    const { isEven, value, locales, onDeleteSubmit } = this.props
    const { formatMessage } = this.props.intl
    const { detailsOpened } = this.state
    const { id: keyId, key } = value
    const defaultLocale = locales[0]
    const defaultLocaleTranslationValue = valueGetter(
      value.translationValues,
      defaultLocale.code
    )
    const hasValueForDefaultLocale = Boolean(defaultLocaleTranslationValue)
    const formattedDefaultValue = hasValueForDefaultLocale
      ? defaultLocaleTranslationValue
      : formatMessage({ id: 'tag.not-translated' })

    return (
      <div>
        <KeyRow
          onClick={this.onRowClick}
          isOpened={detailsOpened}
          isEven={isEven}
        >
          <KeyValue>{key}</KeyValue>
          <KeyTranslationColumn
            hasValueForDefaultLocale={hasValueForDefaultLocale}
          >
            <LocaleLabel>{defaultLocale.code}</LocaleLabel>
            <Text>{formattedDefaultValue}</Text>
          </KeyTranslationColumn>
          <KeyTagsAndActionsColumn>
            <TagList>
              {value.hasMissingTranslations && (
                <Tag>
                  <FormattedMessage id="tag.missing" />
                </Tag>
              )}
              {value.isNew && (
                <Tag color="orange">
                  <FormattedMessage id="tag.new" />
                </Tag>
              )}
            </TagList>

            <Icon icon="edit" width="16px" height="1em" />
            {/* eslint-disable-next-line */}
            <form onSubmit={onDeleteSubmit} onClick={this.onDeleteClick}>
              <input type="hidden" name="translationKeyId" value={keyId} />
              <ButtonIcon icon="delete" type="submit" />
            </form>
          </KeyTagsAndActionsColumn>
        </KeyRow>
        {detailsOpened && (
          <KeyDetails translationKey={value} locales={locales} />
        )}
      </div>
    )
  }
}

export default injectIntl(KeyItem)
