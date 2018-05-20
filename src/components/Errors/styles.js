import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 0.5em;
  padding: ${({ hasErrors }) => (hasErrors ? '0.2em 0.3em' : 0)};
  background-color: ${({ theme }) => theme.colors.rose};
  border-radius: 3px;
`

export const SingleError = styled.span`
  color: ${({ theme }) => theme.colors.light};
`
