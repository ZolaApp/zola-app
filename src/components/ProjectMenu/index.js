// @flow
import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Icon from '@components/Icon'
import { MenuItem } from './styles'

const MENU_ITEMS = [
  { href: '/', pathname: '/project', icon: 'key', label: 'Keys' },
  { href: '/locales', pathname: '/locales', icon: 'planet', label: 'Locales' }
]

type Props = { router: any, href: string }

const ProjectMenu = ({ router, href }: Props) => (
  <Wrapper mTop="xlarge">
    {MENU_ITEMS.map(({ href, pathname, icon, label }) => (
      <Link href={`/project/${router.query.projectSlug + href}`}>
        <MenuItem selected={router.pathname === pathname}>
          <Icon icon={icon} />
          <Text size="default" color="light">
            {label}
          </Text>
        </MenuItem>
      </Link>
    ))}
  </Wrapper>
)

export default withRouter(ProjectMenu)
