// @flow
import React, { type Node } from 'react'
import Wrapper from '@components/Wrapper'
import Sidebar from '@components/Sidebar'
import ProjectSidebar from '@components/ProjectSidebar'

type Props = {
  children: Node
}

const SingleProjectLayout = (props: Props) => (
  <Wrapper flex>
    <Sidebar />
    <ProjectSidebar />

    <Wrapper padding="xlarge" flex align="column">
      {props.children}
    </Wrapper>
  </Wrapper>
)

export default SingleProjectLayout
