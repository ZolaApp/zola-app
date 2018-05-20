import { StyledButton } from '@components/Button/styles'

export const Button = StyledButton.extend`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  min-width: 130px;
  width: 100%;
  border-radius: 1px;
  font-size: ${({ theme }) => theme.fonts.sizes.regular};
  padding: ${({ theme }) => theme.sizes.small};
  border: solid 1px ${({ theme }) => theme.colors.dark};
  background: transparent;
  color: ${({ theme }) => theme.colors.dark};

  svg {
    margin-right: 0;
  }

  &:hover {
    background: transparent;
  }
`
