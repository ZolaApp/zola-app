import styled from 'styled-components'

export const StyledBox = styled.div`
  background: ${({ theme }) => theme.colors.semiGray};
  padding: ${({ theme }) => theme.sizes.regular};
  border-radius: ${({ theme }) => theme.globals.radius};
  ${({ center }) =>
    center &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `};
`
