// @flow
import React from 'react'
import { type Locale } from '@types/Locale'
import Wrapper from '@components/Wrapper'
import NewLocaleForm from '@components/NewLocaleForm'

type Props = {
  onSubmit: () => any,
  isLoading: boolean,
  projectId: string,
  locales: Array<Locale>
}

const NewLocaleModal = ({ onSubmit, isLoading, projectId, locales }: Props) => (
  <Wrapper padding="regular">
    <NewLocaleForm
      onSubmit={onSubmit}
      isLoading={isLoading}
      projectId={projectId}
      locales={locales}
    />
  </Wrapper>
)

export default NewLocaleModal
