import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Label from '@components/Label'
import { Row, RowWrapper, Texts, Labels } from './styles'

const ProjectRow = () => {
  return (
    <Row>
      <Wrapper padding="regular">
        <RowWrapper>
          <Texts>
            <Text size="medium">Spotify iOS App</Text>
            <Text color="semiDark">Last updated Wednesday by Eddy Warren</Text>
          </Texts>
          <Labels>
            <Label background="rose">14</Label>
            <Label background="orange">8</Label>
          </Labels>
        </RowWrapper>
      </Wrapper>
    </Row>
  )
}

export default ProjectRow
