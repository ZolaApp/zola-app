import styled from 'styled-components'

export const StyledLabel = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fonts.sizes.regular};
  background: ${({ background, theme }) =>
    background ? theme.colors[background] : theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: 0.2em;
  text-align: center;
  border-radius: 30px;
  min-width: 1.4em;
`
