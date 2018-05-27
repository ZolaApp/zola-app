// @flow
import React from 'react'
import SingleProjectLayout from '@components/SingleProjectLayout'
import KeyList from '@components/KeyList'
import KeysFilters from '@components/KeysFilters'
import type { Project } from '@types/Project'

type Props = {
  project: Project
}

const SingleProjectPage = ({ project }: Props) => {
  const keys = project.translationKeys

  return (
    <SingleProjectLayout>
      <KeysFilters />
      <KeyList keys={keys} />
    </SingleProjectLayout>
  )
}

export default SingleProjectPage
