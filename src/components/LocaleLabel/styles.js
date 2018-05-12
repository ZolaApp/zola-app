import styled from 'styled-components'

export const StyledLabel = styled.div`
  padding: 0.125em 0.25em;
  font-size: ${({ theme }) => theme.fonts.sizes.regular};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.light};
  background: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.globals.radius};
`
