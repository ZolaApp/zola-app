// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Link from 'next/link'
import Text from '@components/Text'
import Icon from '@components/Icon'
import Pagination from '@components/Pagination'
import {
  FixedBar,
  StyledBar,
  ExportButton,
  PaginationWrapper,
  StatWrapper
} from './styles'

type Props = {
  keysCount: number,
  cdnToken: string
}

const KeyListPaginationBar = ({ keysCount, cdnToken }: Props) => {
  return (
    <FixedBar>
      <Wrapper flex center pLeft="xlarge" pRight="xlarge">
        <StyledBar>
          <Link passHref href={`${process.env.CDN_URL}${cdnToken}/download`}>
            <ExportButton target="_blank">
              <Icon icon="download" />
              <Text color="light">Export all keys</Text>
            </ExportButton>
          </Link>
          <PaginationWrapper>
            <Pagination keysCount={keysCount} />
          </PaginationWrapper>
          <StatWrapper>
            <Text color="light">{keysCount} keys found</Text>
          </StatWrapper>
        </StyledBar>
      </Wrapper>
    </FixedBar>
  )
}

export default KeyListPaginationBar
