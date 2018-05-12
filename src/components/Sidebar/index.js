// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Icon from '@components/Icon'
import LogoSmall from '@components/LogoSmall'
import { StyledSidebar, StyledButton } from './styles'

type Props = {
  small: boolean
}

const Sidebar = ({ small }: Props) => {
  return (
    <StyledSidebar small={small}>
      <LogoSmall />
      <Wrapper mTop="xlarge">
        <Wrapper>
          <StyledButton>
            <Icon icon="search" />
          </StyledButton>
        </Wrapper>
        <Wrapper mTop="regular">
          <StyledButton>
            <Icon icon="plus" />
          </StyledButton>
        </Wrapper>
      </Wrapper>
    </StyledSidebar>
  )
}

Sidebar.defaultProps = {
  small: false
}

export default Sidebar
