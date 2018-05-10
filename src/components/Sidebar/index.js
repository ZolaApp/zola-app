// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
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
            <Text color="light">Search</Text>
          </StyledButton>
        </Wrapper>
        <Wrapper mTop="regular">
          <StyledButton>
            <Text color="light">Add</Text>
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
