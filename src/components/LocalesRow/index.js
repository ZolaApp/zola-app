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

        <Texts>
          <Text>{locale.translatedPercentage * 100}%</Text>
          <Text color="semiDark">Translated</Text>
        </Texts>

        <Texts bordered>
          <Text>{locale.missingTranslations}</Text>
          <Text color="semiDark">Missing translations</Text>
        </Texts>
      </RowWrapper>
    </Wrapper>
  </Row>
)

export default LocalesRow
