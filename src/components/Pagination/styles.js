import styled from 'styled-components'

export const PaginationItem = styled.div`
  display: inline-block;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.dark : theme.colors.light};

  a {
    display: inline-block;
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.dark : theme.colors.light};
    background: ${({ isActive, theme }) =>
      isActive ? theme.colors.light : theme.colors.dark};
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fonts.sizes.regular};
    border-radius: ${({ theme }) => theme.globals.radius};

    &:hover,
    &:focus {
      background: ${({ isActive, theme }) =>
        isActive ? theme.colors.light : theme.colors.accentDark};
    }
  }
`
