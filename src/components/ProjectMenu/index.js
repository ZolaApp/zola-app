// @flow
import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Icon from '@components/Icon'
import { MenuItem } from './styles'

type Props = { router: any, href: string }

const ProjectMenu = ({ router, href }: Props) => (
  <Wrapper mTop="xlarge">
    <Link href={`/project/${router.query.projectSlug}`} passHref>
      <MenuItem selected={router.pathname === '/project'}>
        <Icon icon="key" />
        <Text size="default" color="light">
          Keys
        </Text>
      </MenuItem>
    </Link>

    <Link href={`/project/${router.query.projectSlug}/locales`} passHref>
      <MenuItem selected={router.pathname === '/locales'}>
        <Icon icon="planet" />
        <Text size="default" color="light">
          Locales
        </Text>
      </MenuItem>
    </Link>
  </Wrapper>
)

export default withRouter(ProjectMenu)
