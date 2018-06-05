// @flow
import React from 'react'
import Icon from '@components/Icon'
import { StyledButton } from './styles'

type Props = {
  icon: string,
  onClick?: Event => any,
  type: string
}

const ButtonIcon = ({ icon, onClick, type }: Props) => {
  const buttonProps = {
    type,
    // $FlowFixMe
    ...(type === 'button' && { onClick: event => onClick(event) })
  }

  return (
    <StyledButton {...buttonProps}>
      <Icon icon={icon} width="16px" />
    </StyledButton>
  )
}

ButtonIcon.defaultProps = {
  type: 'button'
}

export default ButtonIcon
