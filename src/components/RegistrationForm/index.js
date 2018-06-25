// @flow
import React from 'react'
import Link from 'next/link'
import Text from '@components/Text'
import Wrapper from '@components/Wrapper'
import Button from '@components/Button'
import InputWithLabel from '@components/InputWithLabel'
import Errors from '@components/Errors'
import errorFinder from '@helpers/errorFinder'
import { type ValidationError } from '@types/ValidationError'
import { injectIntl, FormattedMessage, type Intl } from 'react-intl'
import { Box, DoubleInputsWrapper, InlineWrapper } from './styles'

type Props = {
  onSubmit: Event => any,
  isLoading: boolean,
  errors: Array<ValidationError>,
  intl: Intl
}

const RegistrationForm = (props: Props) => {
  const findErrors = errorFinder(props.errors)
  const firstNameErrors = findErrors('firstName')
  const lastNameErrors = findErrors('lastName')
  const jobErrors = findErrors('job')
  const emailErrors = findErrors('email')
  const passwordPlainErrors = findErrors('passwordPlain')
  const passwordConfirmationErrors = findErrors('passwordConfirmation')
  const genericErrors = findErrors('generic')

  const { formatMessage } = props.intl
  const confirmPassLabel = formatMessage({
    id: 'register.confirm-password.label'
  })
  const passwordLabel = formatMessage({
    id: 'register.password.label'
  })
  const jobLabel = formatMessage({
    id: 'register.job.label'
  })
  const jobPlaceholder = formatMessage({
    id: 'register.job.placeholder'
  })
  const emailLabel = formatMessage({
    id: 'register.email.label'
  })
  const lastNameLabel = formatMessage({
    id: 'register.last-name.label'
  })
  const lastNamePlaceholder = formatMessage({
    id: 'register.last-name.placeholder'
  })
  const firstNameLabel = formatMessage({
    id: 'register.first-name.label'
  })
  const firstNamePlaceholder = formatMessage({
    id: 'register.first-name.placeholder'
  })

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
                  label={firstNameLabel}
                  aria-describedby="firstName-errors"
                  isInvalid={firstNameErrors.length > 0}
                  placeholder={firstNamePlaceholder}
                  minLength={2}
                  maxLength={30}
                />

                <InputWithLabel
                  required
                  name="lastName"
                  label={lastNameLabel}
                  aria-describedby="lastName-errors"
                  isInvalid={lastNameErrors.length > 0}
                  placeholder={lastNamePlaceholder}
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
                  label={jobLabel}
                  aria-describedby="job-errors"
                  isInvalid={jobErrors.length > 0}
                  placeholder={jobPlaceholder}
                  minLength={2}
                  maxLength={50}
                />

                <InputWithLabel
                  required
                  name="email"
                  label={emailLabel}
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
                label={passwordLabel}
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
                label={confirmPassLabel}
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
                <FormattedMessage id="register.submit" />
              </Button>

              <Errors name="generic" errors={genericErrors} />
            </Wrapper>
          </fieldset>
        </form>
      </Box>

      <Wrapper mTop="regular">
        <Box center>
          <InlineWrapper>
            <Text>
              <FormattedMessage id="register.already-registered" />
            </Text>
            <Link href="/login">
              <a>
                <FormattedMessage id="register.login" />
              </a>
            </Link>
          </InlineWrapper>
        </Box>
      </Wrapper>
    </Wrapper>
  )
}

export default injectIntl(RegistrationForm)
