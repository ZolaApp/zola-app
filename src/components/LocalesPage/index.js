// @flow
import React from 'react'
import Dialog from 'react-a11y-dialog'
import { type Project } from '@types/Project'
import NewLocaleModalContainer from '@containers/NewLocaleModalContainer'
import SingleProjectLayout from '@components/SingleProjectLayout'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import LocaleRow from '@components/LocaleRow'
import Button from '@components/Button'
import { injectIntl, FormattedMessage, type Intl } from 'react-intl'
import { Texts, HeaderWrapper } from './styles'

type Props = {
  project: Project,
  intl: Intl
}

class LocalesPage extends React.Component<Props> {
  dialog = null

  onNewLocaleClick = () => {
    if (this.dialog) this.dialog.show()
  }

  exposeDialog = () => this.dialog

  render() {
    const { project } = this.props
    const { formatMessage } = this.props.intl

    return (
      <SingleProjectLayout>
        <Wrapper mBottom="xlarge">
          <Wrapper pBottom="large">
            <HeaderWrapper>
              <Texts>
                <Text size="large">
                  <FormattedMessage id="locales.title" />
                </Text>
                <Text color="semiDark">{project.name}</Text>
              </Texts>

              <Button bordered onClick={this.onNewLocaleClick}>
                <FormattedMessage id="locales.add" />
              </Button>
            </HeaderWrapper>
          </Wrapper>

          {project.locales.map((locale, index) => (
            <LocaleRow
              key={locale.code}
              isDefault={index === 0}
              isEven={index % 2 === 0}
              locale={locale}
              cdnToken={project.cdnToken}
            />
          ))}
        </Wrapper>
        <Dialog
          id="new-locale-dialog"
          classNames={{
            base: 'dialog',
            document: 'dialog__document',
            closeButton: 'dialog__close-button',
            title: 'dialog__title'
          }}
          appRoot="#__next"
          dialogRoot="#dialog-root"
          dialogRef={dialog => (this.dialog = dialog)}
          title={formatMessage({ id: 'modal.add-locale.title' })}
          closeButtonContent={formatMessage({ id: 'modal.close' })}
        >
          <NewLocaleModalContainer
            getDialog={this.exposeDialog}
            project={project}
          />
        </Dialog>
      </SingleProjectLayout>
    )
  }
}

export default injectIntl(LocalesPage)
