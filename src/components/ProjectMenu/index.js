// @flow
import React from 'react'
import { withRouter } from 'next/router'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Icon from '@components/Icon'
import { Link } from '../../../routes'
import { MenuItem } from './styles'

const MENU_ITEMS = [
  { route: 'project', icon: 'key', label: 'Keys' },
  { route: 'locales', icon: 'planet', label: 'Locales' }
]

type Props = { router: any, href: string }

const ProjectMenu = ({ router, href }: Props) => (
  <Wrapper mTop="xlarge">
    {MENU_ITEMS.map(({ route, icon, label }) => (
      <Link
        key={route}
        route={route}
        params={{ projectSlug: router.query.projectSlug }}
      >
        <MenuItem selected={router.pathname === `/${route}`}>
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
