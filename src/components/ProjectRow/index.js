// @flow
import React from 'react'
import { type Project } from '@types/Project'
import formatDateRelative from '@helpers/formatDateRelative'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Label from '@components/Label'
import Tooltip from '@components/Tooltip'
import { FormattedMessage, injectIntl, type Intl } from 'react-intl'
import { Row, RowWrapper, Texts, Labels } from './styles'

type Props = {
  intl: Intl,
  project: Project,
  isEven: boolean
}

class ProjectRow extends React.Component<Props> {
  static defaultProps = {
    isEven: true
  }

  render() {
    const { isEven, project } = this.props
    const { formatMessage } = this.props.intl
    const preferedLanguage = localStorage.getItem('dashboard-language')
    const locale = preferedLanguage || 'en'

    return (
      <Row isEven={isEven}>
        <Wrapper padding="regular">
          <RowWrapper>
            <Texts>
              <Text size="medium">
                {project.name}
                {project.description.length > 0 && (
                  <Text color="semiDark">
                    &nbsp; – &nbsp; {project.description}
                  </Text>
                )}
              </Text>
              <Text color="semiDark">
                <FormattedMessage
                  id="projects-list.updated-date"
                  values={{
                    datetime: formatDateRelative(project.updatedAt, locale)
                  }}
                />
              </Text>
            </Texts>
            <Labels>
              <Tooltip
                text={formatMessage({ id: 'projects-list.tags.missing' })}
              >
                <Label background="rose">
                  {project.stats.missingTranslationsCount}
                </Label>
              </Tooltip>
              <Tooltip text={formatMessage({ id: 'projects-list.tags.new' })}>
                <Label background="orange">{project.stats.newKeysCount}</Label>
              </Tooltip>
            </Labels>
          </RowWrapper>
        </Wrapper>
      </Row>
    )
  }
}

export default injectIntl(ProjectRow)
