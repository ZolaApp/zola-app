import styled from 'styled-components'
import { StyledLabel } from '@components/LocaleLabel/styles'
import { StyledTag } from '@components/Tag/styles'

export const KeyWrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 20% auto;
  padding: ${({ theme }) => theme.sizes.regular};
`

export const KeyValueColumn = styled.div``

export const KeyValue = styled.div`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.families.sourceCode};
  font-size: ${({ theme }) => theme.fonts.sizes.default};
  padding: 0.25em;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.globals.radius};
`

export const KeyTranslationColumn = styled.div`
  display: inline-block;
  vertical-align: middle;

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
