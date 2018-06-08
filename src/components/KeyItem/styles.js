import styled from 'styled-components'
import { StyledButton } from '@components/ButtonIcon/styles'
import { StyledLabel } from '@components/LocaleLabel/styles'
import { StyledTag } from '@components/Tag/styles'
import Text from '@components/Text'

export const KeyValue = styled.div`
  display: inline-block;
  justify-self: start;
  font-family: ${({ theme }) => theme.fonts.families.sourceCode};
  font-size: ${({ theme }) => theme.fonts.sizes.default};
  padding: 0.25em;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.globals.radius};
  user-select: text;
`

export const KeyTranslationColumn = styled.div`
  display: inline-block;
  align-self: center;

  ${StyledLabel} {
    margin-right: ${({ theme }) => theme.sizes.tiny};
    opacity: ${({ hasValueForDefaultLocale }) =>
      hasValueForDefaultLocale ? '1' : '0.5'};
  }

  ${Text} {
    font-style: ${({ hasValueForDefaultLocale }) =>
      hasValueForDefaultLocale ? 'normal' : 'italic'};
    opacity: ${({ hasValueForDefaultLocale, theme }) =>
      hasValueForDefaultLocale ? '1' : '0.5'};
  }
`

export const KeyTagsAndActionsColumn = styled.div`
  display: inline-flex;
  justify-self: end;
  align-self: center;

  ${StyledButton} {
    margin-left: ${({ theme }) => theme.sizes.regular};
  }
`

export const TagList = styled.div`
  display: inline-block;
  vertical-align: middle;

  ${StyledTag} {
    margin-right: ${({ theme }) => theme.sizes.tiny};

    &:last-child {
      margin-right: 0;
    }
  }
`

export const KeyRow = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 30% auto 210px;
  padding: ${({ theme }) => theme.sizes.regular};
  background: ${({ isOpened, isEven, theme }) =>
    isOpened
      ? theme.colors.dark
      : isEven
        ? theme.colors.semiAccentLight
        : theme.colors.light};
  user-select: none;

  ${({ isOpened, theme }) =>
    isOpened &&
    `
    border-top-left-radius: ${theme.globals.radius};
    border-top-right-radius: ${theme.globals.radius};
  `};

  &:hover {
    background: ${({ theme, isOpened }) =>
      isOpened ? theme.colors.dark : theme.colors.lightGray};
  }

  ${KeyValue} {
    ${({ isOpened, theme }) =>
      isOpened &&
      `
        background: ${theme.colors.alphaDark};
        color: ${theme.colors.light};
      `};
  }

  ${StyledLabel} {
    ${({ isOpened, theme }) =>
      isOpened && `background: ${theme.colors.alphaDark}`};
  }

  ${StyledButton} {
    ${({ isOpened, theme }) => isOpened && `fill: ${theme.colors.light};`};
  }

  ${Text} {
    color: ${({ isOpened, theme }) =>
      isOpened ? theme.colors.light : theme.colors.dark};
  }
`
