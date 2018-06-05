import styled from 'styled-components'
import { StyledButton } from '@components/Button/styles'
import { StyledIcon } from '@components/Icon/styles'

export const FixedBar = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.sizes.regular};
  left: 300px;
  width: calc(100% - 300px);
`

export const StyledBar = styled.div`
  display: grid;
  grid-template-columns: 160px auto 160px;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
`

export const ExportButton = StyledButton.extend`
  background: transparent;

  ${StyledIcon} {
    fill: ${({ theme }) => theme.colors.light};
    margin-right: ${({ theme }) => theme.sizes.regular};
  }
`

export const PaginationWrapper = styled.div`
  place-self: center;
`

export const StatWrapper = styled.div`
  align-self: center;
  justify-self: end;
  padding-right: ${({ theme }) => theme.sizes.regular};
`
