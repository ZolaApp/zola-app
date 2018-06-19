// @flow
import React from 'react'
import { type User } from '@types/User'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'

type Props = {
  user: User
}

const ProjectSidebarUser = ({ user }: Props) => (
  <Wrapper mBottom="large" mLeft="regular" mRight="regular">
    <Text size="default" color="light">
      {user.fullName}
    </Text>
    <Wrapper mTop="tiny">
      <Text color="semiGray">{user.job}</Text>
    </Wrapper>
  </Wrapper>
)

export default ProjectSidebarUser
