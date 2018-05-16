import styled from 'styled-components'

export const StyledTag = styled.div`
  padding: 0.125em 0.25em;
  font-size: ${({ theme }) => theme.fonts.sizes.regular};
  color: ${({ theme }) => theme.colors.light};
  background: ${({ theme }) => theme.colors.rose};
  border-radius: ${({ theme }) => theme.globals.radius};
`
