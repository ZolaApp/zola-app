// @flow
import React from 'react'
import Icon from '@components/Icon'
import { StyledButton } from './styles'

type Props = {
  icon: string,
  onClick: Event => any
}

const ButtonIcon = ({ icon, onClick }: Props) => {
  return (
    <StyledButton onClick={e => onClick(e)}>
      <Icon icon={icon} width="16px" />
    </StyledButton>
  )
}

export default ButtonIcon
