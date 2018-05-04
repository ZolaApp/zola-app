import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import { HeaderTexts } from './styles'

const RegistrationHeader = () => {
  return (
    <div>
      <Wrapper center width="small" mTop="90px">
        LOGO
      </Wrapper>
      <Wrapper mLeft="15px">
        <HeaderTexts>
          <Text size="large">Register a new account</Text>
          <Text color="semiDark">Zola is made for you</Text>
        </HeaderTexts>
      </Wrapper>
    </div>
  )
}

export default RegistrationHeader
