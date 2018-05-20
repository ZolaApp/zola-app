// @flow
import React from 'react'
import Link from 'next/link'
import Text from '@components/Text'
import Wrapper from '@components/Wrapper'
import Button from '@components/Button'
import InputWithLabel from '@components/InputWithLabel'
import Box from '@components/Box'
import Errors from '@components/Errors'
import { type ValidationError } from '@types/ValidationError'
import { InlineWrapper, ActionsWrapper } from './styles'

type Props = {
  onSubmit: Event => any,
  isLoading: boolean,
  errors: Array<ValidationError>
}

const LoginForm = (props: Props) => (
  <Wrapper mTop="regular">
    <Box>
      <form onSubmit={props.onSubmit}>
        <fieldset disabled={props.isLoading}>
          <Wrapper mTop="regular">
            <InputWithLabel
              required
              name="email"
              label="Email"
              aria-describedby="login-errors"
              isInvalid={props.errors.length > 0}
              type="email"
              placeholder="example@domain.com"
            />
          </Wrapper>

          <Wrapper mTop="regular">
            <InputWithLabel
              required
              name="password"
              label="Password"
              aria-describedby="login-errors"
              isInvalid={props.errors.length > 0}
              type="password"
              placeholder="**********"
            />
          </Wrapper>

          <Wrapper mTop="large" mBottom="regular">
            <Errors name="login" errors={props.errors} />

            <ActionsWrapper>
              <Button isLoading={props.isLoading} type="submit">
                Log in
              </Button>
            </ActionsWrapper>
          </Wrapper>
        </fieldset>
      </form>
    </Box>

    <Wrapper mTop="regular">
      <Box center>
        <InlineWrapper>
          <Text>First time here?</Text>
          <Link href="/register">
            <a>Create an account</a>
          </Link>
        </InlineWrapper>
      </Box>
    </Wrapper>
  </Wrapper>
)

export default LoginForm
