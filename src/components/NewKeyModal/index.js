// @flow
import React, { Component } from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import NewKeyForm from '@components/NewKeyForm'

type Props = {
  onSubmit: () => any,
  errors: Array<any>,
  isLoading: boolean,
  projectId: string
}

class NewKeyModal extends Component<Props> {
  render() {
    const { onSubmit, errors, isLoading, projectId } = this.props

    return (
      <div>
        <Wrapper padding="regular">
          <Text>Create a new key</Text>
        </Wrapper>
        <Wrapper padding="regular">
          <NewKeyForm
            onSubmit={onSubmit}
            errors={errors}
            isLoading={isLoading}
            projectId={projectId}
          />
        </Wrapper>
      </div>
    )
  }
}

export default NewKeyModal
