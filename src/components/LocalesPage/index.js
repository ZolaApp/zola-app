// @flow
import React from 'react'
import { type Project } from '@types/Project'
import SingleProjectLayout from '@components/SingleProjectLayout'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import LocaleRow from '@components/LocalesRow'
import Button from '@components/Button'
import { Texts, HeaderWrapper } from './styles'

type Props = {
  project: Project
}

const LocalesPage = ({ project }: Props) => (
  <SingleProjectLayout>
    <Wrapper mBottom="xlarge">
      <Wrapper pBottom="large">
        <HeaderWrapper>
          <Texts>
            <Text size="large">Locales</Text>
            <Text color="semiDark">{project.name}</Text>
          </Texts>

          <Button bordered>Add new locale</Button>
        </HeaderWrapper>
      </Wrapper>

      {project.locales.map((locale, index) => (
        <LocaleRow isEven={index % 2 === 0} locale={locale} />
      ))}
    </Wrapper>
  </SingleProjectLayout>
)

export default LocalesPage
