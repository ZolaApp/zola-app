import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 80px;
  margin-bottom: ${({ theme }) => theme.sizes.regular};
`
