// @flow
import React, { type Node } from 'react'
import Wrapper from '@components/Wrapper'
import Sidebar from '@components/Sidebar'
import ProjectSidebarContainer from '@containers/ProjectSidebarContainer'
import { SidebarsWrapper, ContentWrapper } from './styles'

type Props = {
  children: Node
}

const SingleProjectLayout = (props: Props) => (
  <Wrapper flex>
    <SidebarsWrapper>
      <Sidebar />
      <ProjectSidebarContainer />
    </SidebarsWrapper>

    <ContentWrapper>
      <Wrapper padding="xlarge" flex align="column" center>
        {props.children}
      </Wrapper>
    </ContentWrapper>
  </Wrapper>
)

export default SingleProjectLayout
