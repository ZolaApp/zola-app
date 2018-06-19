import styled from 'styled-components'
import { StyledIcon } from '@components/Icon/styles'
import { StyledButton } from '@components/Button/styles'
import Text from '@components/Text'

export const Wrapper = styled.div`
  position: relative;
`

export const DropdownBubble = styled.div`
  z-index: 50;
  position: absolute;
  top: ${({ theme }) => `calc(100% + ${theme.sizes.tiny})`};
  width: 100%;
  min-width: 170px;
  padding: ${({ theme }) => theme.sizes.regular};
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.globals.radius};
`

export const OptionsList = styled.div`
  max-height: 170px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const OptionRow = styled.button`
  user-select: none;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  display: block;
  font-size: 1em;
  text-align: left;
  width: 100%;
  padding: ${({ theme }) => theme.sizes.tiny} 0;

  ${Text} {
    font-size: ${({ theme }) => theme.fonts.sizes.regular};
    color: ${({ selected, theme }) =>
      selected ? theme.colors.light : theme.colors.semiLight};
  }

  ${StyledIcon} {
    display: ${({ selected, theme }) => (selected ? 'inline-block' : 'none')};
    fill: ${({ theme }) => theme.colors.light};
    margin-right: ${({ theme }) => theme.sizes.tiny};
  }

  &:last-child {
    padding-bottom: 0;
  }
`

export const DropdownActions = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  margin-top: ${({ theme }) => theme.sizes.regular};
  padding-top: ${({ theme }) => theme.sizes.regular};
  border-top: solid 1px ${({ theme }) => theme.colors.alphaLight};

  ${StyledButton} {
    font-size: ${({ theme }) => theme.fonts.sizes.default};

    &:first-child {
      color: ${({ theme }) => theme.colors.semiLight};
    }
  }
`
