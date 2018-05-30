import styled from 'styled-components'
import Text from '@components/Text'
import { StyledLabel } from '@components/Label/styles'

export const Row = styled.div`
  background-color: ${({ isEven, theme }) =>
    isEven ? theme.colors.semiAccentLight : theme.colors.light};
`

export const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 100px 150px;
`

export const Texts = styled.div`
  display: grid;

  ${({ bordered }) =>
    bordered &&
    `
  border-left: 1px solid rgb(219, 219, 219);
  padding-left: 2em;
  `};

  ${Text} {
    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.tiny};
    }
  }
`

export const Labels = styled.div`
  align-self: center;
  justify-self: end;

  ${StyledLabel} {
    margin-right: ${({ theme }) => theme.sizes.tiny};
  }
`
