import styled from 'styled-components'
import Text from '@components/Text'

export const ListWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.sizes.xlarge};
`

export const NoResultsWrapper = styled.div`
  text-align: center;

  ${Text} {
    display: block;
    margin-bottom: ${({ theme }) => theme.sizes.regular};
  }
`
