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
import { FormattedMessage, injectIntl, type Intl } from 'react-intl'
import { InlineWrapper, ActionsWrapper } from './styles'

type Props = {
  onSubmit: Event => any,
  isLoading: boolean,
  errors: Array<ValidationError>,
  intl: Intl
}

class LoginForm extends React.Component<Props> {
  render() {
    const { onSubmit, isLoading, errors, intl } = this.props
    const passwordLabel = intl.formatMessage({ id: 'login.password.label' })
    const emailLabel = intl.formatMessage({ id: 'login.email.label' })

    return (
      <Wrapper mTop="regular">
        <Box>
          <form onSubmit={onSubmit}>
            <fieldset disabled={isLoading}>
              <Wrapper mTop="regular">
                <InputWithLabel
                  required
                  name="email"
                  label={emailLabel}
                  aria-describedby="login-errors"
                  isInvalid={errors.length > 0}
                  type="email"
                  placeholder="example@domain.com"
                />
              </Wrapper>

              <Wrapper mTop="regular">
                <InputWithLabel
                  required
                  name="password"
                  label={passwordLabel}
                  aria-describedby="login-errors"
                  isInvalid={errors.length > 0}
                  type="password"
                  placeholder="**********"
                />
              </Wrapper>

              <Wrapper mTop="large" mBottom="regular">
                <Errors name="login" errors={errors} />

                <ActionsWrapper>
                  <Button isLoading={isLoading} type="submit">
                    <FormattedMessage id="login.submit" />
                  </Button>
                </ActionsWrapper>
              </Wrapper>
            </fieldset>
          </form>
        </Box>

        <Wrapper mTop="regular">
          <Box center>
            <InlineWrapper>
              <Text>
                <FormattedMessage id="login.not-registered" />
              </Text>
              <Link href="/register">
                <a>
                  <FormattedMessage id="login.sign-up" />
                </a>
              </Link>
            </InlineWrapper>
          </Box>
        </Wrapper>
      </Wrapper>
    )
  }
}

export default injectIntl(LoginForm)
