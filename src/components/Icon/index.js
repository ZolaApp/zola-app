// @flow
import React from 'react'
import { StyledIcon } from './styles'

type Props = {
  icon: string,
  className: string,
  width: string
}

const Icon = ({ icon, className, width }: Props) => {
  if (!icon) {
    return null
  }

  return (
    <StyledIcon
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

export default Icon
