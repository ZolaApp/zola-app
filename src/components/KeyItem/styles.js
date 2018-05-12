import styled from 'styled-components'
import { StyledLabel } from '@components/LocaleLabel/styles'
import { StyledTag } from '@components/Tag/styles'

export const KeyWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.regular};
`

export const KeyValueColumn = styled.div`
  width: 30%;
`

export const KeyValue = styled.div`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.families.sourceCode};
  font-size: ${({ theme }) => theme.fonts.sizes.default};
  padding: 0.25em;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.globals.radius};
`

export const KeyTranslationColumn = styled.div`
  display: flex;
  align-items: center;
  width: 20%;

  ${StyledLabel} {
    margin-right: ${({ theme }) => theme.sizes.tiny};
  }
`

export const KeyTagsAndActionsColumn = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

export const TagList = styled.div`
  display: flex;
  align-items: center;

  ${StyledTag} {
    margin-right: ${({ theme }) => theme.sizes.tiny};

    &:last-child {
      margin-right: 0;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  margin-left: ${({ theme }) => theme.sizes.regular};
  padding-left: ${({ theme }) => theme.sizes.regular};
  border-left: solid 1px ${({ theme }) => theme.colors.border};

  > button {
    margin-right: ${({ theme }) => theme.sizes.regular};

    &:last-child {
      margin-right: 0;
    }
  }
`
