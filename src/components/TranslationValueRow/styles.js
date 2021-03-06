import styled from 'styled-components'
import { StyledLoader } from '@components/Loader/styles'

export const LocaleWrapper = styled.div`
  display: inline-block;
  width: 150px;
  align-self: start;
  text-align: center;
  padding: ${({ theme }) => theme.sizes.tiny};
  border-radius: 2px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.sizes.regular};
  font-weight: bold;
`

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 18px;
  display: inline-flex;
  align-items: center;

  ${StyledLoader} {
    margin-right: ${({ theme }) => theme.sizes.small};
  }
`

export const PrefillButtonWrapper = styled.div`
  visibility: hidden;
  position: absolute;
  right: 14px;
  top: 6px;
`

export const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 150px auto;
  border: solid 1px
    ${({ theme, isFocused }) =>
      isFocused ? theme.colors.semiLight : 'transparent'};
  padding: ${({ theme }) => theme.sizes.tiny};
  margin-bottom: ${({ theme }) => theme.sizes.tiny};
  border-radius: ${({ theme }) => theme.globals.radius};

  ${LocaleWrapper} {
    color: ${({ isFocused, theme }) =>
      isFocused ? theme.colors.dark : theme.colors.semiLight};
    background: ${({ isFocused, theme }) =>
      isFocused ? theme.colors.light : theme.colors.alphaLight};
  }

  &:hover {
    ${PrefillButtonWrapper} {
      visibility: visible;
    }
  }
`
