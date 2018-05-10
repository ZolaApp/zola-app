import styled from 'styled-components'

export const InlineWrapper = styled.div`
  > span {
    margin-right: ${({ theme }) => theme.sizes.tiny};
  }
`

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;

  > a {
    margin-left: ${({ theme }) => theme.sizes.regular};
  }
`
