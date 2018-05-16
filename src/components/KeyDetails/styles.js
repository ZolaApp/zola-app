import styled from 'styled-components'

export const DetailsWrapper = styled.div`
  position: relative;
  display: grid;
  padding: ${({ theme }) => theme.sizes.regular};
  border-top: solid 1px ${({ theme }) => theme.colors.alphaLight};
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`

export const TranslationsList = styled.div``

export const Actions = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.sizes.regular};
  right: ${({ theme }) => theme.sizes.regular};
`
