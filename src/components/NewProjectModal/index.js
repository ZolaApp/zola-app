// @flow
import React, { Component } from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import NewProjectForm from '@components/NewProjectForm'
import type { Locale } from '@types/Locale'

type Props = {
  locales: Array<Locale>,
  onSubmit: () => any,
  errors: Array<any>
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
    const { locales, onSubmit, errors } = this.props
    let normalizedLocales = [...locales]
    // TODO: We'll need to remove that size limit when the list will be shorter
    normalizedLocales = normalizedLocales
      .splice(0, 100)
      .map(l => ({ text: l.name, value: String(l.id) }))

    return (
      <div>
        <Wrapper padding="regular">
          <Text>Create a new projet and import your keys</Text>
        </Wrapper>
        <Wrapper padding="regular">
          <NewProjectForm
            locales={normalizedLocales}
            onSubmit={onSubmit}
            errors={errors}
          />
        </Wrapper>
      </div>
    )
  }
}

export default NewProjectModal
