// @flow
import React, { Component } from 'react'
import SelectDropdown from '@components/SelectDropdown'
import { withRouter } from 'next/router'
import { Wrapper } from './styles'

type Props = {
  router: any
}

class KeysFilters extends Component<Props> {
  pushFiltersToUrl = filters => {
    const { router } = this.props
    const queryString = router.query.page
      ? `page=${router.query.page}&filters=${filters.join(',')}`
      : `filters=${filters.join(',')}`
    router.push(`/project/${router.query.projectSlug}?${queryString}`)
  }

  onFilter = filters => {
    this.pushFiltersToUrl(filters)
  }

  getSelectedOptions = () => {
    const { router } = this.props

    return router.query.filters ? router.query.filters.split(',') : []
  }

  onCancel = () => {
    this.pushFiltersToUrl([])
  }

  render() {
    const selectedOptions = this.getSelectedOptions()
    const hasValue = selectedOptions.length > 0

    return (
      <Wrapper>
        <SelectDropdown
          placeholder="Filter keys"
          onApply={options => this.onFilter(options)}
          onCancel={this.onCancel}
          selectedOptions={selectedOptions}
          hasValue={hasValue}
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
