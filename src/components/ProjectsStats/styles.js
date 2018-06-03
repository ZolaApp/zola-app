import styled from 'styled-components'
import Text from '@components/Text'

export const Texts = styled.div`
  ${Text} {
    display: block;

    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.tiny};
    }
  }
`

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 185px);
`
