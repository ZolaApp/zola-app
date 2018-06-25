// @flow
import React, { Fragment } from 'react'
import { withRouter } from 'next/router'
import KeyItemContainer from '@containers/KeyItemContainer'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Button from '@components/Button'
import KeyListPaginationBar from '@components/KeyListPaginationBar'
import type { TranslationKey } from '@types/TranslationKey'
import type { Locale } from '@types/Locale'
import { injectIntl, FormattedMessage, type Intl } from 'react-intl'
import { ListWrapper, NoResultsWrapper } from './styles'

type Props = {
  intl: Intl,
  keys: Array<TranslationKey>,
  onAddKeyClick: () => any,
  locales: Array<Locale>,
  keysCount: number,
  projectSlug: string,
  cdnToken: string,
  router: any
}

const KeyList = ({
  keys,
  onAddKeyClick,
  locales,
  keysCount,
  projectSlug,
  cdnToken,
  router,
  intl
}: Props) => {
  const hasKeys = keys.length > 0
  const shouldRenderEmptyState = !router.query.search && !router.query.filters

  return (
    <ListWrapper>
      {hasKeys ? (
        <Fragment>
          {keys.map((k, index) => (
            <KeyItemContainer
              key={k.key}
              value={k}
              isEven={index % 2 === 0}
              locales={locales}
              projectSlug={projectSlug}
            />
          ))}
          <KeyListPaginationBar keysCount={keysCount} cdnToken={cdnToken} />
        </Fragment>
      ) : (
        <Wrapper flex contentCentered mTop="xlarge">
          <NoResultsWrapper>
            <Text size="medium">
              {shouldRenderEmptyState
                ? intl.formatMessage({ id: 'keys.empty-message' })
                : intl.formatMessage({ id: 'keys.empty-search' })}
            </Text>

            {shouldRenderEmptyState && (
              <Button onClick={onAddKeyClick}>
                <FormattedMessage id="keys.empty-create-button" />
              </Button>
            )}
          </NoResultsWrapper>
        </Wrapper>
      )}
    </ListWrapper>
  )
}

export default injectIntl(withRouter(KeyList))
