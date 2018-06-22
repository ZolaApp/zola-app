import styled from 'styled-components'
import { InputWrapper } from '@components/InputWithLabel/styles'
import Text from '@components/Text'

export const Box = styled.div`
  background: ${({ theme }) => theme.colors.semiGray};
  padding: ${({ theme }) => theme.sizes.regular};
  border-radius: ${({ theme }) => theme.globals.radius};
  ${({ center }) =>
    center &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `};
`

export const DoubleInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > ${InputWrapper} {
    width: calc(50% - 7.5px);
  }
`

export const InlineWrapper = styled.div`
  > ${Text} {
    margin-right: ${({ theme }) => theme.sizes.tiny};
  }
`
