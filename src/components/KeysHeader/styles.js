import styled from 'styled-components'
import { StyledButton } from '@components/Button/styles'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 200px;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes.regular};

  ${StyledButton} {
    justify-self: end;
  }
`
