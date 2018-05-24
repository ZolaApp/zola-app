import styled, { keyframes } from 'styled-components'
import Text from '@components/Text'

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const StyledLoaderWrapper = styled.div`
  display: flex;
  align-self: center;

  ${({ isCentered }) => isCentered && `justify-content: center;`};

  ${Text} {
    margin-left: ${({ theme }) => theme.sizes.tiny};
  }
`

export const StyledLoader = styled.div`
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.colors.alphaLight};
  border-left: 2px solid
    ${({ isDark, theme }) => (isDark ? theme.colors.dark : theme.colors.light)};
  animation: ${spinAnimation} 1s infinite linear;
  margin-right: ${({ theme }) => theme.sizes.tiny};

  &,
  &::after {
    border-radius: 50%;
    width: 1em;
    height: 1em;
  }
`
