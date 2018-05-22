// @flow
import React from 'react'
import { StyledIcon } from './styles'

type Props = {
  icon: string,
  className: string,
  width: string,
  color: string
}

const Icon = ({ icon, className, width, color }: Props) => {
  if (!icon) {
    return null
  }

  return (
    <StyledIcon
      color={color}
      width={width}
      className={className}
      viewBox="0 0 32 32"
      aria-hidden
      focusable="false"
    >
      <use xlinkHref={`#icons--sprite_${icon}`} />
    </StyledIcon>
  )
}

Icon.defaultProps = {
  width: '22px',
  className: '',
  color: 'dark'
}

export default Icon
