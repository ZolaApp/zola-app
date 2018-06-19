import { css } from 'styled-components'
import { StyledIcon } from '@components/Icon/styles'
import { StyledButton } from '@components/Button/styles'

export const Button = StyledButton.extend`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  min-width: 130px;
  width: 100%;
  border-radius: 1px;
  font-size: ${({ theme }) => theme.fonts.sizes.regular};
  padding: ${({ theme }) => theme.sizes.small};
  background: transparent;
  border: solid 1px ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.border};
  fill: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.globals.radius};

  ${({ isOpened, theme }) =>
    isOpened &&
    css`
      border-color: ${theme.colors.dark};
      color: ${theme.colors.dark};
      fill: ${theme.colors.dark};
    `};
  ${({ isActive, theme }) =>
    isActive &&
    css`
      background: ${theme.colors.dark};
      border-color: ${theme.colors.dark};
      color: ${theme.colors.light};
      fill: ${theme.colors.light};
    `};

  ${StyledIcon} {
    margin-right: 0;
  }

  &:hover {
    background: transparent;
    ${({ isActive, theme }) => isActive && `background: ${theme.colors.dark}`};
  }
`
