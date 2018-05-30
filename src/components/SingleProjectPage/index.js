// @flow
import React, { Component } from 'react'
import Dialog from 'react-a11y-dialog'
import SingleProjectLayout from '@components/SingleProjectLayout'
import KeyList from '@components/KeyList'
import KeysHeader from '@components/KeysHeader'
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

  render() {
    const { project } = this.props
    const keys = project.translationKeys

    return (
      <SingleProjectLayout>
        <KeysHeader onAddKeyClick={this.onAddKeyClick} />
        <KeyList keys={keys} onAddKeyClick={this.onAddKeyClick} />
        <Dialog
          id="new-project-dialog"
          appRoot="#__next"
          dialogRoot="#dialog-root"
          dialogRef={dialog => (this.dialog = dialog)}
          title="Add a new project"
          closeButtonContent="× Close"
        >
          <NewKeyModalContainer dialog={this.dialog} project={project} />
        </Dialog>
      </SingleProjectLayout>
    )
  }
}

export default SingleProjectPage
