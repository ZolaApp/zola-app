import React from 'react'
import Link from 'next/link'
import Text from '@components/Text'
import Wrapper from '@components/Wrapper'
import Button from '@components/Button'
import InputWithLabel from '@components/InputWithLabel'
import Box from '@components/Box'
import { InlineWrapper, ActionsWrapper } from './styles'

const RegistrationForm = () => {
  return (
    <Wrapper mTop="regular">
      <Box>
        <form action="">
          <Wrapper mTop="regular">
            <InputWithLabel
              id="email"
              label="Email"
              placeholder="example@domain.com"
            />
          </Wrapper>
          <Wrapper mTop="regular">
            <InputWithLabel
              id="password"
              label="Password"
              placeholder="**********"
            />
          </Wrapper>
          <Wrapper mTop="large" mBottom="regular">
            <ActionsWrapper>
              <Button>Log in</Button>
            </ActionsWrapper>
          </Wrapper>
        </form>
      </Box>
      <Wrapper mTop="regular">
        <Box center>
          <InlineWrapper>
            <Text>First time here ?</Text>
            <Link href="/register">Create an account</Link>
          </InlineWrapper>
        </Box>
      </Wrapper>
    </Wrapper>
  )
}

export default RegistrationForm
