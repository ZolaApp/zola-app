import styled from 'styled-components'

export default styled.span`
  font-family: ${({ theme, font }) =>
    font ? theme.fonts.families[font] : theme.fonts.families.sourceSans};
  font-size: ${({ theme, size }) =>
    size ? theme.fonts.sizes[size] : theme.fonts.sizes.regular};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.dark};
  font-weight: normal;
  display: inline-block;
  margin-bottom: 5px;
`
