import React, { Component } from 'react'
import Dialog from 'react-a11y-dialog'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Button from '@components/Button'
import NewProjectModalContainer from '@containers/NewProjectModalContainer'
import { Texts, HeaderWrapper } from './styles'

class ProjectsHeader extends Component {
  dialog = null

  onNewProjectClick = () => {
    if (this.dialog) this.dialog.show()
  }

  render() {
    return (
      <Wrapper padding="large">
        <HeaderWrapper>
          <Texts>
            <Text size="large">Your work</Text>
            <Text color="semiDark">Projects you collaborate on</Text>
          </Texts>
          <Button onClick={this.onNewProjectClick} bordered>
            Add new project
          </Button>
        </HeaderWrapper>
        <Dialog
          id="new-project-dialog"
          appRoot="#main"
          dialogRoot="#dialog-root"
          dialogRef={dialog => (this.dialog = dialog)}
          title="Add a new project"
        >
          <NewProjectModalContainer />
        </Dialog>
      </Wrapper>
    )
  }
}

export default ProjectsHeader
