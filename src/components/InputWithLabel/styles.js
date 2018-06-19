import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fonts.sizes.regular};
  font-family: ${({ theme }) => theme.fonts.families.sourceSans};

  ${({ isInvalid }) =>
    isInvalid &&
    css`
      color: ${({ theme }) => theme.colors.rose};
    `};
`
