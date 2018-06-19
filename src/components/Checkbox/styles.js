import styled from 'styled-components'
import { StyledIcon } from '@components/Icon/styles'

export const StyledCheckbox = styled.div`
  display: grid;
  height: 20px;
  width: 20px;
  border: solid 1px ${({ theme }) => theme.colors.dark};
  border-radius: 1px;
  border-color: ${({ isChecked, theme }) =>
    isChecked ? theme.colors.dark : theme.colors.border};
  cursor: pointer;

  ${StyledIcon} {
    place-self: center;
    stroke: ${({ theme }) => theme.colors.dark};
    width: 10px;
    height: 10px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.dark};
  }
`
