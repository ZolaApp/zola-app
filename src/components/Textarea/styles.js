import styled from 'styled-components'

export const StyledTextarea = styled.textarea`
  padding: 0;
  border: none;
  background: transparent;
  font-size: ${({ theme }) => theme.fonts.sizes.regular};
  font-family: ${({ theme }) => theme.fonts.families.sourceSans};
  line-height: 1.7em;
  outline: none;
  color: ${({ theme }) => theme.colors.light};
  margin-left: ${({ theme }) => theme.sizes.regular};

  &::-webkit-input-placeholder {
    font-style: italic;
  }
  &:-moz-placeholder {
    font-style: italic;
  }
  &::-moz-placeholder {
    font-style: italic;
  }
  &:-ms-input-placeholder {
    font-style: italic;
  }
`
