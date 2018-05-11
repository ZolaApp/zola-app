import styled from 'styled-components'

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 2.5em;
  padding: 0 ${({ theme }) => theme.sizes.regular};
  ${({ selected, theme }) =>
    selected &&
    `
    background: ${theme.colors.accentBrown};
    border-top-right-radius: ${theme.globals.radius};
    border-bottom-right-radius: ${theme.globals.radius};
    `};

  > svg {
    margin-right: ${({ theme }) => theme.sizes.small};
  }
`
