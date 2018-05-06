// @flow
import React from 'react'
import PageContainer from '@containers/PageContainer'
import Wrapper from '@components/Wrapper'
import RegistrationHeader from '@components/RegistrationHeader'
import RegistrationForm from '@components/RegistrationForm'

export default () => (
  <PageContainer>
    <Wrapper center width="small" mTop="enormous">
      <RegistrationHeader />
      <RegistrationForm />
    </Wrapper>
  </PageContainer>
)
