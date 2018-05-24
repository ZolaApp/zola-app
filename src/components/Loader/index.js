// @flow
import React from 'react'
import Text from '@components/Text'
import { StyledLoaderWrapper, StyledLoader } from './styles'

type Props = {
  isCenter: boolean,
  withText: boolean,
  isDark: boolean
}

const Loader = (props: Props) => {
  const { withText, isCenter, isDark } = props

  return (
    <StyledLoaderWrapper isCenter={isCenter}>
      <StyledLoader {...props} />
      {withText && (
        <Text size="regular" color={isDark ? 'dark' : 'light'}>
          Loading
        </Text>
      )}
    </StyledLoaderWrapper>
  )
}

Loader.defaultProps = {
  withText: false,
  isCenter: false,
  isDark: false
}

export default Loader
