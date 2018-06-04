// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Icon from '@components/Icon'
import {
  FixedBar,
  StyledBar,
  ExportButton,
  PaginationWrapper,
  StatWrapper
} from './styles'

type Props = {
  keysCount: number
}

const KeyListPaginationBar = ({ keysCount }: Props) => {
  return (
    <FixedBar>
      <Wrapper flex center pLeft="xlarge" pRight="xlarge">
        <StyledBar>
          <ExportButton>
            <Icon icon="download" />
            <Text color="light">Export all keys</Text>
          </ExportButton>
          <PaginationWrapper>
            <Text color="light">PAGINATION</Text>
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
