import styled from 'styled-components'

export const StyledInput = styled.input`
  height: 2em;
  padding: 0 0.313em;
  font-family: ${({ theme }) => theme.fonts.families.sourceSans};
  font-size: ${({ theme }) => theme.fonts.sizes.regular};
  border: solid 1px ${({ theme }) => theme.colors.border};
  background: transparent;
  outline: none;

  &[aria-invalid='true'] {
    border-color: ${({ theme }) => theme.colors.rose};
    color: ${({ theme }) => theme.colors.rose};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.dark};
  }
`
