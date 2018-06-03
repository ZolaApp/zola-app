// @flow
import React, { Component } from 'react'
import Dialog from 'react-a11y-dialog'
import SingleProjectLayout from '@components/SingleProjectLayout'
import KeyList from '@components/KeyList'
import KeysHeader from '@components/KeysHeader'
import SingleProjectStats from '@components/SingleProjectStats'
import type { Project } from '@types/Project'
import NewKeyModalContainer from '@containers/NewKeyModalContainer'

type Props = {
  project: Project
}

class SingleProjectPage extends Component<Props> {
  dialog = null

  onAddKeyClick = () => {
    if (this.dialog) {
      this.dialog.show()
    }
  }

  exposeDialog = () => this.dialog

  render() {
    const { project } = this.props
    const { locales } = project
    const keys = project.translationKeys

    return (
      <SingleProjectLayout>
        <SingleProjectStats stats={project.stats} />
        <KeysHeader onAddKeyClick={this.onAddKeyClick} />
        <KeyList
          keys={keys}
          onAddKeyClick={this.onAddKeyClick}
          locales={locales}
        />
        <Dialog
          id="new-key-dialog"
          classNames={{
            base: 'dialog',
            document: 'dialog__document',
            closeButton: 'dialog__close-button',
            title: 'dialog__title'
          }}
          appRoot="#__next"
          dialogRoot="#dialog-root"
          dialogRef={dialog => (this.dialog = dialog)}
          title="Add a new key"
          closeButtonContent="× Close"
        >
          <NewKeyModalContainer
            getDialog={this.exposeDialog}
            project={project}
          />
        </Dialog>
      </SingleProjectLayout>
    )
  }
}

export default SingleProjectPage
