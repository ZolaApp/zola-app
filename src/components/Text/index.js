import styled from 'styled-components'

const Text = styled.span`
  font-family: ${({ theme, font }) =>
    font ? theme.fonts.families[font] : theme.fonts.families.sourceSans};
  font-size: ${({ theme, size }) =>
    size ? theme.fonts.sizes[size] : theme.fonts.sizes.regular};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.dark};
  font-weight: normal;
  display: inline-block;
  ${({ theme, underline }) => underline && `text-decoration: underline;`};
  ${({ theme, monospaced }) =>
    monospaced && `font-family: ${theme.fonts.families.sourceCode}`};
`

export default Text
