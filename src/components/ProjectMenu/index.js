// @flow
import React from 'react'
import { withRouter } from 'next/router'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Icon from '@components/Icon'
import { MenuItem } from './styles'

const MENU_ITEMS = [
  { pathname: '/project', icon: 'key', label: 'Keys' },
  { pathname: '/locales', icon: 'planet', label: 'Locales' }
]

type Props = { router: any, href: string }

const ProjectMenu = ({ router, href }: Props) => (
  <Wrapper mTop="xlarge">
    {MENU_ITEMS.map(({ pathname, icon, label }) => (
      <MenuItem selected={router.pathname === pathname}>
        <Icon icon={icon} />
        <Text size="default" color="light">
          {label}
        </Text>
      </MenuItem>
    ))}
  </Wrapper>
)

export default withRouter(ProjectMenu)
