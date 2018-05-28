import styled from 'styled-components'

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.dark};
  padding: ${({ theme }) => theme.sizes.regular};
`
