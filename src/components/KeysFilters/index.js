// @flow
import React, { Component } from 'react'
import SelectDropdown from '@components/SelectDropdown'
import { withRouter } from 'next/router'
import { Wrapper } from './styles'

type Props = {
  router: any
}

class KeysFilters extends Component<Props> {
  onFilter = options => {
    const { router } = this.props
    const queryString = router.query.page
      ? `page=${router.query.page}&filters=${options.join(',')}`
      : `filters=${options.join(',')}`
    router.push(`/project/${router.query.projectSlug}?${queryString}`)
  }

  render() {
    return (
      <Wrapper>
        <SelectDropdown
          placeholder="Filter keys"
          applyLabel="Filter"
          onApply={options => this.onFilter(options)}
          options={[
            { text: 'Missing translations', value: 'hasMissingTranslations' },
            { text: 'New key', value: 'isNew' }
          ]}
        />
      </Wrapper>
    )
  }
}

export default withRouter(KeysFilters)
