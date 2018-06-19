import styled from 'styled-components'
import { StyledButton } from '@components/Button/styles'
import { StyledInput } from '@components/Input/styles'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: calc(130px + ${({ theme }) => theme.sizes.regular}) 130px auto;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes.regular};

  ${StyledButton} {
    justify-self: end;
  }

  ${StyledInput} {
    padding: ${({ theme }) => theme.sizes.small};
    height: auto;
    min-width: 160px;

    &::-webkit-input-placeholder {
      font-style: italic;
      color: ${({ theme }) => theme.colors.border};
    }
    &:-moz-placeholder {
      font-style: italic;
      color: ${({ theme }) => theme.colors.border};
    }
    &::-moz-placeholder {
      font-style: italic;
      color: ${({ theme }) => theme.colors.border};
    }
    &:-ms-input-placeholder {
      font-style: italic;
      color: ${({ theme }) => theme.colors.border};
    }
  }
`
