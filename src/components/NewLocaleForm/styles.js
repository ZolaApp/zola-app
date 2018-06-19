import styled from 'styled-components'
import { StyledCheckbox } from '@components/Checkbox/styles'

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes.regular};

  ${StyledCheckbox} {
    margin-right: ${({ theme }) => theme.sizes.tiny};
  }
`
