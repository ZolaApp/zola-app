import styled from 'styled-components'
import Text from '@components/Text'

export const Texts = styled.div`
  ${Text} {
    display: block;

    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.tiny};
    }
  }
`

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 185px);
`

export const StatBlock = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  height: 90px;
  border-right: solid 1px ${({ theme }) => theme.colors.alphaLightBrown};

  ${Text} {
    display: block;
    text-align: center;

    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.tiny};
    }
  }

  &:last-child {
    border: none;
  }
`
