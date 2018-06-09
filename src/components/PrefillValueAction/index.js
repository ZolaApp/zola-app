// @flow
import React from 'react'
import Text from '@components/Text'
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
          Prefill
        </Button>
      )}
      {isLoading && <Text color="semiGray">Fetching translation...</Text>}
    </div>
  )
}

export default PrefillValueAction
