import styled from 'styled-components'
import Text from '@components/Text'
import { StyledLabel } from '@components/Label/styles'

export const Row = styled.div``

export const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
`

export const Texts = styled.div`
  display: grid;

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
