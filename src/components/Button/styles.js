import styled from 'styled-components'

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: 13px 15px;
  font-family: ${({ theme }) => theme.fonts.families.sourceSans};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  border: none;
  border-radius: ${({ theme }) => theme.globals.radius};
  cursor: pointer;
`
