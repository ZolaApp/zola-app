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
  border: solid 1px ${({ theme }) => theme.colors.border};
  ${({ isOpened, theme }) => isOpened && `border-color: ${theme.colors.dark}`};
  background: transparent;
  ${({ active, theme }) => active && `background: ${theme.colors.dark}`};
  color: ${({ theme }) => theme.colors.border};
  ${({ isOpened, theme }) => isOpened && `color: ${theme.colors.dark}`};
  ${({ active, theme }) => active && `color: ${theme.colors.light}`};

  svg {
    margin-right: 0;
    fill: ${({ theme }) => theme.colors.border};
    ${({ isOpened, theme }) => isOpened && `fill: ${theme.colors.dark}`};
    ${({ active, theme }) => active && `fill: ${theme.colors.light}`};
  }

  &:hover {
    background: transparent;
    ${({ active, theme }) => active && `background: ${theme.colors.dark}`};
  }
`
