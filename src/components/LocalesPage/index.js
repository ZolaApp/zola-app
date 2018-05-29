// @flow
import React from 'react'
import { type Project } from '@types/Project'
import SingleProjectLayout from '@components/SingleProjectLayout'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import { Texts } from './styles'

type Props = {
  project: Project
}

const LocalesPage = ({ project }: Props) => (
  <SingleProjectLayout>
    <Wrapper mBottom="xlarge">
      <Wrapper padding="large">
        <Texts>
          <Text size="large">Locales</Text>
          <Text color="semiDark">{project.name}</Text>
        </Texts>
      </Wrapper>
    </Wrapper>
  </SingleProjectLayout>
)

export default LocalesPage
