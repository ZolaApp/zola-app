// @flow
import React, { Component } from 'react'
import Link from 'next/link'
import Dialog from 'react-a11y-dialog'
import { type Project } from '@types/Project'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Button from '@components/Button'
import ProjectRow from '@components/ProjectRow'
import ProjectsHeader from '@components/ProjectsHeader'
import NewProjectModalContainer from '@containers/NewProjectModalContainer'
import { injectIntl, type Intl } from 'react-intl'
import { StyledLink, NoResultsWrapper } from './styles'

type Props = {
  projects: Array<Project>,
  intl: Intl
}

class ProjectsList extends Component<Props> {
  dialog = null

  openNewProjectDialog = () => {
    if (this.dialog) this.dialog.show()
  }

  exposeDialog = () => this.dialog

  render() {
    const { projects } = this.props
    const { formatMessage } = this.props.intl
    const hasProjects = projects.length > 0

    return (
      <Wrapper>
        <ProjectsHeader onNewProjectClick={this.openNewProjectDialog} />
        <Wrapper padding="regular">
          {hasProjects &&
            projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/project/${project.slug}`}
                passHref
              >
                <StyledLink>
                  <ProjectRow project={project} isEven={index % 2 === 0} />
                </StyledLink>
              </Link>
            ))}
          {!hasProjects && (
            <Wrapper mTop="regular" contentCentered>
              <NoResultsWrapper>
                <Text monospaced>
                  Oh no, you haven’t created a project at the moment :(
                </Text>
                <Button onClick={this.openNewProjectDialog}>
                  Create your first project
                </Button>
              </NoResultsWrapper>
            </Wrapper>
          )}
        </Wrapper>
        <Dialog
          id="new-project-dialog"
          classNames={{
            base: 'dialog',
            document: 'dialog__document',
            closeButton: 'dialog__close-button',
            title: 'dialog__title'
          }}
          appRoot="#__next"
          dialogRoot="#dialog-root"
          dialogRef={dialog => (this.dialog = dialog)}
          title={formatMessage({ id: 'modal.add-project.title' })}
          closeButtonContent={formatMessage({ id: 'modal.close' })}
        >
          <NewProjectModalContainer getDialog={this.exposeDialog} />
        </Dialog>
      </Wrapper>
    )
  }
}

export default injectIntl(ProjectsList)
