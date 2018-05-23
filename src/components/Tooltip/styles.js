import styled from 'styled-components'

export const StyledTooltip = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.sizes.tiny};
  border-radius: ${({ theme }) => theme.globals.radius};
  left: calc(-150%);
  top: 140%;
  visibility: hidden;
  z-index: 20;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 4px 4px 4px;
    border-color: transparent transparent ${({ theme }) => theme.colors.dark}
      transparent;
    top: -4px;
    left: calc(50% - 4px);
  }
`

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: help;

  &:hover ${StyledTooltip} {
    visibility: visible;
  }
`
