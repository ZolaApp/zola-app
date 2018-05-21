// @flow
import React from 'react'
import Link from 'next/link'
import Text from '@components/Text'
import Wrapper from '@components/Wrapper'
import Button from '@components/Button'
import InputWithLabel from '@components/InputWithLabel'
import Errors from '@components/Errors'
import { type ValidationError } from '@types/ValidationError'
import { Box, DoubleInputsWrapper, InlineWrapper } from './styles'

type Props = {
  onSubmit: Event => any,
  isLoading: boolean,
  errors: Array<ValidationError>
}

const errorFinder = (errors: Array<ValidationError>) => (
  field: string
): Array<ValidationError> => errors.filter(error => error.field === field)

const RegistrationForm = (props: Props) => {
  const findErrors = errorFinder(props.errors)
  const firstNameErrors = findErrors('firstName')
  const lastNameErrors = findErrors('lastName')
  const jobErrors = findErrors('job')
  const emailErrors = findErrors('email')
  const passwordPlainErrors = findErrors('passwordPlain')
  const passwordConfirmationErrors = findErrors('passwordConfirmation')
  const genericErrors = findErrors('generic')

  return (
    <Wrapper mTop="regular">
      <Box>
        <form onSubmit={props.onSubmit}>
          <fieldset disabled={props.isLoading}>
            <Wrapper mTop="regular">
              <DoubleInputsWrapper>
                <InputWithLabel
                  required
                  name="firstName"
                  label="First Name"
                  aria-describedby="firstName-errors"
                  isInvalid={firstNameErrors.length > 0}
                  placeholder="John"
                  minLength={2}
                  maxLength={30}
                />

                <InputWithLabel
                  required
                  name="lastName"
                  label="Last Name"
                  aria-describedby="lastName-errors"
                  isInvalid={lastNameErrors.length > 0}
                  placeholder="Doe"
                  minLength={2}
                  maxLength={30}
                />
              </DoubleInputsWrapper>

              <Errors name="firstName" errors={firstNameErrors} />
              <Errors name="lastName" errors={lastNameErrors} />
            </Wrapper>

            <Wrapper mTop="regular">
              <DoubleInputsWrapper>
                <InputWithLabel
                  required
                  name="job"
                  label="Job"
                  aria-describedby="job-errors"
                  isInvalid={jobErrors.length > 0}
                  placeholder="Product owner"
                  minLength={2}
                  maxLength={50}
                />

                <InputWithLabel
                  required
                  name="email"
                  label="Email"
                  aria-describedby="email-errors"
                  isInvalid={emailErrors.length > 0}
                  type="email"
                  placeholder="example@domain.com"
                />
              </DoubleInputsWrapper>

              <Errors name="job" errors={jobErrors} />
              <Errors name="email" errors={emailErrors} />
            </Wrapper>

            <Wrapper mTop="regular">
              <InputWithLabel
                required
                name="passwordPlain"
                label="Password"
                aria-describedby="passwordPlain-errors"
                isInvalid={passwordPlainErrors.length > 0}
                type="password"
                placeholder="**********"
              />
              <Errors name="passwordPlain" errors={passwordPlainErrors} />
            </Wrapper>

            <Wrapper mTop="regular">
              <InputWithLabel
                required
                name="passwordConfirmation"
                label="Confirm password"
                aria-describedby="passwordConfirmation-errors"
                isInvalid={passwordConfirmationErrors.length > 0}
                type="password"
                placeholder="**********"
              />
              <Errors
                name="passwordConfirmation"
                errors={passwordConfirmationErrors}
              />
            </Wrapper>

            <Wrapper mTop="large" mBottom="regular">
              <Button isLoading={props.isLoading} type="submit">
                Register a new account
              </Button>

              <Errors name="generic" errors={genericErrors} />
            </Wrapper>
          </fieldset>
        </form>
      </Box>

      <Wrapper mTop="regular">
        <Box center>
          <InlineWrapper>
            <Text>Already registered?</Text>
            <Link href="/login">
              <a>Log in</a>
            </Link>
          </InlineWrapper>
        </Box>
      </Wrapper>
    </Wrapper>
  )
}

export default RegistrationForm
