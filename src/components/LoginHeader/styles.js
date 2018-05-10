import styled from 'styled-components'

export const HeaderTexts = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    margin-bottom: ${({ theme }) => theme.sizes.tiny};
  }
`
