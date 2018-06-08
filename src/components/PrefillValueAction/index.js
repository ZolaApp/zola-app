// @flow
import React from 'react'
import Button from '@components/Button'

type Props = {
  onClick: any
}

const PrefillValueAction = ({ onClick }: Props) => {
  return (
    <div>
      <Button type="button" light tabIndex="-1" onClick={onClick}>
        Prefill
      </Button>
    </div>
  )
}

export default PrefillValueAction
