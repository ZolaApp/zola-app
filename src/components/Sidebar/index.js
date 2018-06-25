// @flow
import React from 'react'
import Link from 'next/link'
import LogoSmall from '@components/LogoSmall'
import Icon from '@components/Icon'
import LanguageSwitcher from '@components/LanguageSwitcher'
import { StyledSidebar, BottomWrapper } from './styles'

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

      <BottomWrapper>
        <LanguageSwitcher />
        <a href="/logout">
          <Icon icon="logout" />
        </a>
      </BottomWrapper>
    </StyledSidebar>
  )
}

Sidebar.defaultProps = {
  small: false
}

export default Sidebar
