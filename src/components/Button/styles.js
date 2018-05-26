import styled, { css } from 'styled-components'
import { StyledIcon } from '@components/Icon/styles'

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  background: ${({ light, theme }) =>
    light ? theme.colors.light : theme.colors.dark};
  color: ${({ light, theme }) =>
    light ? theme.colors.dark : theme.colors.light};
  padding: 0.6em 1em;
  font-family: ${({ theme }) => theme.fonts.families.sourceSans};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  border: solid 1px
    ${({ light, theme }) => (light ? theme.colors.light : theme.colors.dark)};
  border-radius: ${({ theme }) => theme.globals.radius};
  cursor: ${({ isLoading }) => (isLoading ? 'wait' : 'pointer')};
  outline: none;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};

  > ${StyledIcon} {
    margin-right: ${({ theme }) => theme.sizes.tiny};
  }

  &:hover {
    background: ${({ light, theme }) =>
      light ? theme.colors.accentLight : theme.colors.accentDark};
  }

  ${({ transparent, theme }) =>
    transparent &&
    `
      padding: 0;
      background: transparent;
      &:hover {
        background: transparent;
      }
    `};

  ${({ bordered, theme }) =>
    bordered &&
    css`
      background: ${theme.colors.alphaDark};
      color: ${theme.colors.alphaBrown};
      border-color: ${theme.colors.gray};
    `};
`
