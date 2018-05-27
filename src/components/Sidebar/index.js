// @flow
import React, { Component } from 'react'
import Dialog from 'react-a11y-dialog'
import Wrapper from '@components/Wrapper'
import Icon from '@components/Icon'
import LogoSmall from '@components/LogoSmall'
import NewProjectModalContainer from '@containers/NewProjectModalContainer'
import { StyledSidebar, StyledButton } from './styles'

type Props = {
  small: boolean
}

type State = {
  isProjectModalVisible: boolean
}

class Sidebar extends Component<Props, State> {
  static defaultProps = {
    small: false
  }

  state = {
    isProjectModalVisible: false
  }

  dialog = null

  onAddClick = () => {
    if (this.dialog) this.dialog.show()
  }

  render() {
    const { small } = this.props

    return (
      <StyledSidebar small={small}>
        <Dialog
          id="new-project-dialog"
          appRoot="#__next"
          dialogRoot="#dialog-root"
          dialogRef={dialog => (this.dialog = dialog)}
          title="Add a new project"
        >
          <NewProjectModalContainer />
        </Dialog>
        <LogoSmall />
        <Wrapper mTop="xlarge">
          <Wrapper>
            <StyledButton onClick={this.onAddClick}>
              <Icon icon="plus" />
            </StyledButton>
          </Wrapper>
        </Wrapper>
      </StyledSidebar>
    )
  }
}

export default Sidebar
