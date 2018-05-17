// @flow
import React from 'react'
import Link from 'next/link'
import Text from '@components/Text'
import Wrapper from '@components/Wrapper'
import Button from '@components/Button'
import InputWithLabel from '@components/InputWithLabel'
import { Box, DoubleInputsWrapper, InlineWrapper } from './styles'

type Props = {
  onSubmit: Event => any,
  isLoading: boolean
}

const RegistrationForm = (props: Props) => (
  <Wrapper mTop="regular">
    <Box>
      <form onSubmit={props.onSubmit}>
        <fieldset disabled={props.isLoading}>
          <Wrapper mTop="regular">
            <DoubleInputsWrapper>
              <InputWithLabel
                required
                id="firstName"
                label="First Name"
                placeholder="John"
                minLength={2}
                maxLength={30}
              />

              <InputWithLabel
                required
                id="lastName"
                label="Last Name"
                placeholder="Doe"
                minLength={2}
                maxLength={30}
              />
            </DoubleInputsWrapper>
          </Wrapper>

          <Wrapper mTop="regular">
            <DoubleInputsWrapper>
              <InputWithLabel
                required
                id="job"
                label="Job"
                placeholder="Product owner"
                minLength={2}
                maxLength={50}
              />

              <InputWithLabel
                required
                id="email"
                label="Email"
                type="email"
                placeholder="example@domain.com"
              />
            </DoubleInputsWrapper>
          </Wrapper>

          <Wrapper mTop="regular">
            <InputWithLabel
              required
              id="passwordPlain"
              label="Password"
              type="password"
              placeholder="**********"
            />
          </Wrapper>

          <Wrapper mTop="regular">
            <InputWithLabel
              required
              id="passwordConfirmation"
              label="Confirm password"
              type="password"
              placeholder="**********"
            />
          </Wrapper>

          <Wrapper mTop="large" mBottom="regular">
            <Button isLoading={props.isLoading} type="submit">
              Register a new account
            </Button>
          </Wrapper>
        </fieldset>
      </form>
    </Box>

    <Wrapper mTop="regular">
      <Box center>
        <InlineWrapper>
          <Text>Already registered?</Text>
          <Link href="/login">Log in</Link>
        </InlineWrapper>
      </Box>
    </Wrapper>
  </Wrapper>
)

export default RegistrationForm
