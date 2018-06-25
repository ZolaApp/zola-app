import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Logo from '@components/Logo'
import { FormattedMessage } from 'react-intl'
import { HeaderTexts } from './styles'

const RegistrationHeader = () => {
  return (
    <div>
      <Wrapper center width="small" mTop="huge" contentCentered>
        <Logo />
      </Wrapper>
      <Wrapper mLeft="regular" mTop="enormous">
        <HeaderTexts>
          <Text size="large">
            <FormattedMessage id="login.title" />
          </Text>
          <Text color="semiDark">
            <FormattedMessage id="login.subtitle" />
          </Text>
        </HeaderTexts>
      </Wrapper>
    </div>
  )
}

export default RegistrationHeader
