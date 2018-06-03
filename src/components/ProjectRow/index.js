// @flow
import React from 'react'
import { type Project } from '@types/Project'
import formatDateRelative from '@helpers/formatDateRelative'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Label from '@components/Label'
import Tooltip from '@components/Tooltip'
import { Row, RowWrapper, Texts, Labels } from './styles'

type Props = {
  project: Project,
  isEven: boolean
}

const ProjectRow = ({ project, isEven }: Props) => (
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
            Last updated {formatDateRelative(project.updatedAt)}
          </Text>
        </Texts>
        <Labels>
          <Tooltip text="Missing translations">
            <Label background="rose">
              {project.stats.missingTranslationsCount}
            </Label>
          </Tooltip>
          <Tooltip text="New translations">
            <Label background="orange">{project.stats.newKeysCount}</Label>
          </Tooltip>
        </Labels>
      </RowWrapper>
    </Wrapper>
  </Row>
)

ProjectRow.defaultProps = {
  isEven: true
}

export default ProjectRow
