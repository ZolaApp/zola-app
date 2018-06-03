import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  background: transparent;
  border: none;
  padding: 0;
  line-height: 1em;
  cursor: pointer;
  outline: none;

  &:focus {
    fill: blue;
  }
`
