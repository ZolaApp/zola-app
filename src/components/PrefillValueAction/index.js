// @flow
import React from 'react'
import { Button } from './styles'

type Props = {
  onClick: any
}

const PrefillValueAction = ({ onClick }: Props) => {
  return (
    <Button type="button" transparent tabIndex="-1" onClick={onClick}>
      Prefill
    </Button>
  )
}

export default PrefillValueAction
