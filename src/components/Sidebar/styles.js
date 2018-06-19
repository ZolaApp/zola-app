import styled from 'styled-components'
import { StyledIcon } from '@components/Icon/styles'

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 70px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.dark};
  padding: ${({ theme }) => `${theme.sizes.large} ${theme.sizes.regular}`};

  ${StyledIcon} {
    fill: ${({ theme }) => theme.colors.light};
    margin-bottom: 6px;
  }
`
