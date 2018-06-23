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
import { ListWrapper, NoResultsWrapper } from './styles'

type Props = {
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
  router
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
                ? 'Oh no! There aren’t any keys in this project.'
                : 'No keys were found.'}
            </Text>

            {shouldRenderEmptyState && (
              <Button onClick={onAddKeyClick}>Create your first key</Button>
            )}
          </NoResultsWrapper>
        </Wrapper>
      )}
    </ListWrapper>
  )
}

export default withRouter(KeyList)
