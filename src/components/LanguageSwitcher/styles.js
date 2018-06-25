import styled from 'styled-components'
import { StyledButton } from '@components/Button/styles'

export const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.large};
  display: flex;
  flex-direction: column;
`

export const Button = StyledButton.extend`
  opacity: ${({ active }) => (active ? '0.6' : '0.3')};
`
