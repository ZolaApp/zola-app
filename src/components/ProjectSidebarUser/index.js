import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'

const ProjectSidebarUser = () => {
  return (
    <Wrapper mBottom="large" mLeft="regular" mRight="regular">
      <Text size="default" color="light">
        Joseph Ward
      </Text>
      <Wrapper mTop="tiny">
        <Text color="semiGray">Chief Technical Officer</Text>
      </Wrapper>
    </Wrapper>
  )
}

export default ProjectSidebarUser
