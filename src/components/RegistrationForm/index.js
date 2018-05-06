import React from 'react'
import Text from '@components/Text'
import Wrapper from '@components/Wrapper'
import Button from '@components/Button'
import Link from '@components/Link'
import InputWithLabel from '@components/InputWithLabel'
import { Box, DoubleInputsWrapper, InlineWrapper } from './styles'

const RegistrationForm = () => {
  return (
    <Wrapper mTop="regular">
      <Box>
        <form action="">
          <Wrapper mTop="regular">
            <DoubleInputsWrapper>
              <InputWithLabel
                id="firstName"
                label="First Name"
                placeholder="John"
              />
              <InputWithLabel
                id="lastName"
                label="Last Name"
                placeholder="Doe"
              />
            </DoubleInputsWrapper>
          </Wrapper>
          <Wrapper mTop="regular">
            <DoubleInputsWrapper>
              <InputWithLabel
                id="job"
                label="Job"
                placeholder="Product Designer"
              />
              <InputWithLabel
                id="email"
                label="Email"
                placeholder="example@domain.com"
              />
            </DoubleInputsWrapper>
          </Wrapper>
          <Wrapper mTop="regular">
            <InputWithLabel id="password" label="Password" placeholder="****" />
          </Wrapper>
          <Wrapper mTop="regular">
            <InputWithLabel
              id="confirmPassword"
              label="Confirm password"
              placeholder="****"
            />
          </Wrapper>
          <Wrapper mTop="large" mBottom="regular">
            <Button>Register a new account</Button>
          </Wrapper>
        </form>
      </Box>
      <Wrapper mTop="regular">
        <Box center>
          <InlineWrapper>
            <Text>Already registered?</Text>
            <Link href="#">Log in</Link>
          </InlineWrapper>
        </Box>
      </Wrapper>
    </Wrapper>
  )
}

export default RegistrationForm
