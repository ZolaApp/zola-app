import styled from 'styled-components'

export const StyledIcon = styled.svg`
  display: inline-block;
  vertical-align: middle;
  min-width: ${({ theme, width }) => width || theme.sizes.regular};
`
