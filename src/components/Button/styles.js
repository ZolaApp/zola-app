import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background: ${({ light, theme }) =>
    light ? theme.colors.light : theme.colors.dark};
  color: ${({ light, theme }) =>
    light ? theme.colors.dark : theme.colors.light};
  padding: 0.6em 1em;
  font-family: ${({ theme }) => theme.fonts.families.sourceSans};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  border: none;
  border-radius: ${({ theme }) => theme.globals.radius};
  cursor: pointer;

  svg {
    margin-right: ${({ theme }) => theme.sizes.tiny};
  }

  &:hover {
    background: ${({ light, theme }) =>
      light ? theme.colors.accentLight : theme.colors.accentDark};
  }
`
