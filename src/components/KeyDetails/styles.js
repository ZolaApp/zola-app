import styled from 'styled-components'

export const DetailsWrapper = styled.div`
  position: relative;
  display: grid;
  padding: ${({ theme }) => theme.sizes.regular};
  border-top: solid 1px ${({ theme }) => theme.colors.alphaLight};
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 2px;
  border-bottom-left-radius: ${({ theme }) => theme.globals.radius};
  border-bottom-right-radius: ${({ theme }) => theme.globals.radius};
`
