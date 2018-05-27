import styled from 'styled-components'
import { StyledLabel } from '@components/LocaleLabel/styles'
import { StyledTag } from '@components/Tag/styles'

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
  }
`

export const KeyTagsAndActionsColumn = styled.div`
  display: inline-block;
  justify-self: end;
  align-self: center;
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

export const Actions = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: ${({ theme }) => theme.sizes.regular};
  padding-left: ${({ theme }) => theme.sizes.regular};
  border-left: solid 1px ${({ theme }) => theme.colors.border};

  > button {
    display: inline-block;
    margin-right: ${({ theme }) => theme.sizes.regular};

    &:last-child {
      margin-right: 0;
    }
  }
`

export const KeyRow = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 30% 20% auto;
  padding: ${({ theme }) => theme.sizes.regular};
  background: ${({ opened, isEven, theme }) =>
    opened
      ? theme.colors.dark
      : isEven
        ? theme.colors.semiAccentLight
        : theme.colors.light};
  user-select: none;

  &:hover {
    background: ${({ theme, opened }) =>
      opened ? theme.colors.dark : theme.colors.lightGray};
  }

  ${KeyValue} {
    ${({ opened, theme }) =>
      opened &&
      `
        background: ${theme.colors.alphaDark};
        color: ${theme.colors.light};
      `};
  }

  ${KeyTranslationColumn} {
    ${({ opened, theme }) =>
      opened && `span { color: ${theme.colors.light}; }`};
  }

  ${StyledLabel} {
    ${({ opened, theme }) => opened && `background: ${theme.colors.alphaDark}`};
  }

  ${Actions} {
    ${({ opened, theme }) => opened && `filter: invert(100%);`};
  }
`
