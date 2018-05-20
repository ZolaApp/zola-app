import styled, { keyframes } from 'styled-components'

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export default styled.div`
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.colors.alphaLight};
  border-left: 2px solid ${({ theme }) => theme.colors.light};
  animation: ${spinAnimation} 1s infinite linear;
  margin-right: ${({ theme }) => theme.sizes.tiny};

  &,
  &::after {
    border-radius: 50%;
    width: 1em;
    height: 1em;
  }
`
