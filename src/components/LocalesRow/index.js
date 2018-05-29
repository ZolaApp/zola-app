// @flow
import React from 'react'
import { type Locale } from '@types/Locale'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import { Row, RowWrapper, Texts } from './styles'

type Props = {
  isEven: boolean,
  locale: Locale
}

const LocalesRow = ({ isEven, locale }: Props) => (
  <Row isEven={isEven}>
    <Wrapper padding="regular">
      <RowWrapper>
        <Texts>
          <Text size="medium">{locale.name}</Text>
          {locale.isDefault && <Text color="semiDark">Default locale</Text>}
        </Texts>
      </RowWrapper>
    </Wrapper>
  </Row>
)

export default LocalesRow
