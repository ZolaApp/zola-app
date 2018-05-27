import styled from 'styled-components'

const getSelectedStyles = theme => `
  background: ${theme.colors.accentBrown};
  border-top-right-radius: ${theme.globals.radius};
  border-bottom-right-radius: ${theme.globals.radius};
`

export const MenuItem = styled.a`
  display: flex;
  align-items: center;
  height: 2.5em;
  margin-bottom: ${({ theme }) => theme.sizes.tiny};
  padding: 0 ${({ theme }) => theme.sizes.regular};
  ${({ selected, theme }) => selected && getSelectedStyles(theme)};
  cursor: pointer;

  &:hover {
    ${({ theme }) => getSelectedStyles(theme)};
  }

  > svg {
    margin-right: ${({ theme }) => theme.sizes.small};
  }
`
