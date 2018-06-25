// @flow
import React from 'react'
import Text from '@components/Text'
import { FormattedMessage } from 'react-intl'
import { Button } from './styles'

type Props = {
  onClick: any,
  isLoading: boolean
}

const PrefillValueAction = ({ onClick, isLoading }: Props) => {
  return (
    <div>
      {!isLoading && (
        <Button type="button" transparent tabIndex="-1" onClick={onClick}>
          <FormattedMessage id="translation-value.prefill" />
        </Button>
      )}
      {isLoading && (
        <Text color="semiGray">
          <FormattedMessage id="translation-value.fetching" />
        </Text>
      )}
    </div>
  )
}

export default PrefillValueAction
