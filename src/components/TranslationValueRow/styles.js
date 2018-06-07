import styled from 'styled-components'
import { StyledButton } from '@components/AddTranslationButton/styles'
import { StyledLoader } from '@components/Loader/styles'

export const Wrapper = styled.div``

export const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 150px auto;
  border: solid 1px
    ${({ theme, isFocused }) =>
      isFocused ? theme.colors.light : 'transparent'};
  padding: ${({ theme }) => theme.sizes.tiny};
  margin-bottom: ${({ theme }) => theme.sizes.tiny};

  ${StyledButton} {
    justify-self: start;
    margin-left: ${({ theme }) => theme.sizes.tiny};
  }
`

export const LocaleWrapper = styled.div`
  display: inline-block;
  width: 150px;
  align-self: start;
  text-align: center;
  background: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.sizes.tiny};
  border-radius: 2px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.sizes.regular};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
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
