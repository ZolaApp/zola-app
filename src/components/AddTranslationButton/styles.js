import styled from 'styled-components'

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.sizes.regular};

  svg {
    margin-right: ${({ theme }) => theme.sizes.tiny};
  }
`
