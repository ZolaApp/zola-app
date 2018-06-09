import { StyledButton } from '@components/Button/styles'

export const Button = StyledButton.extend`
  color: ${({ theme }) => theme.colors.semiLight};

  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.colors.green};
  }
`
