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

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
