// @flow
import React from 'react'
import Link from 'next/link'
import { type Locale } from '@types/Locale'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import { Row, RowWrapper, Texts } from './styles'

type Props = {
  isDefault: boolean,
  isEven: boolean,
  locale: Locale,
  cdnToken: string
}

const LocaleRow = ({ isDefault, isEven, locale, cdnToken }: Props) => (
  <Row isEven={isEven}>
    <Wrapper padding="regular">
      <RowWrapper>
        <Texts>
          <Text size="medium">{locale.name}</Text>
          {isDefault && <Text color="semiDark">Default locale</Text>}
        </Texts>

        <Texts>
          <Text size="medium">{locale.completePercentage}%</Text>
          <Text color="semiDark">Translated</Text>
        </Texts>

        <Texts bordered>
          <Text size="medium">{locale.missingTranslations}</Text>
          <Text color="semiDark">Missing translations</Text>
        </Texts>

        <Texts bordered contentCentered>
          <Link
            passHref
            href={`${process.env.CDN_URL}${cdnToken}/${locale.code}`}
          >
            <a target="_blank">CDN URL</a>
          </Link>
        </Texts>
      </RowWrapper>
    </Wrapper>
  </Row>
)

export default LocaleRow
