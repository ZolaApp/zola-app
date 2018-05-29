// @flow
import React, { type Node } from 'react'
import Wrapper from '@components/Wrapper'
import Sidebar from '@components/Sidebar'
import ProjectSidebarContainer from '@containers/ProjectSidebarContainer'

type Props = {
  children: Node
}

const SingleProjectLayout = (props: Props) => (
  <Wrapper flex>
    <Sidebar />
    <ProjectSidebarContainer />

    <Wrapper padding="xlarge" flex align="column">
      {props.children}
    </Wrapper>
  </Wrapper>
)

export default SingleProjectLayout
