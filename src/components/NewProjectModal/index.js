// @flow
import React, { Component } from 'react'
import Wrapper from '@components/Wrapper'
import NewProjectForm from '@components/NewProjectForm'
import type { Locale } from '@types/Locale'

type Props = {
  locales: Array<Locale>,
  onSubmit: () => any,
  errors: Array<any>,
  isLoading: boolean
}

type State = {
  selectedOption: string | null
}

class NewProjectModal extends Component<Props, State> {
  state = {
    selectedOption: null
  }

  onApply = (options: Array<string>) => {
    this.setState(state => ({ ...state, selectedOption: options[0] }))
  }

  render() {
    const { locales, onSubmit, errors, isLoading } = this.props
    let localesList = locales.map(l => ({ text: l.name, value: String(l.id) }))

    return (
      <Wrapper padding="regular">
        <NewProjectForm
          locales={localesList}
          onSubmit={onSubmit}
          errors={errors}
          isLoading={isLoading}
        />
      </Wrapper>
    )
  }
}

export default NewProjectModal
