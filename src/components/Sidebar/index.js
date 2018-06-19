// @flow
import React from 'react'
import Link from 'next/link'
import LogoSmall from '@components/LogoSmall'
import Icon from '@components/Icon'
import { StyledSidebar } from './styles'

type Props = {
  small: boolean
}

const Sidebar = ({ small }: Props) => {
  return (
    <StyledSidebar small={small}>
      <Link href="/">
        <a>
          <LogoSmall />
        </a>
      </Link>
      <Link href="/logout">
        <a>
          <Icon icon="logout" />
        </a>
      </Link>
    </StyledSidebar>
  )
}

Sidebar.defaultProps = {
  small: false
}

export default Sidebar
