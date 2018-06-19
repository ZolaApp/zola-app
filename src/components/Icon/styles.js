import styled from 'styled-components'

export const StyledIcon = styled.svg`
  display: inline-block;
  vertical-align: middle;
  width: ${({ theme, width }) => width || theme.sizes.regular};
  height: ${({ height }) => height || 'auto'};

  svg {
    fill: ${({ color, theme }) =>
      color === 'dark' ? theme.colors.dark : theme.colors.light};
  }
`
