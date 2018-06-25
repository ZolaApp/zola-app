// @flow
import React, { Component } from 'react'
import SelectDropdown from '@components/SelectDropdown'
import { withRouter } from 'next/router'
import qs from 'qs'
import { injectIntl, type Intl } from 'react-intl'
import { Wrapper } from './styles'

type Props = {
  router: any,
  intl: Intl
}

class KeysFilters extends Component<Props> {
  pushFiltersToUrl = filters => {
    const { router } = this.props
    const queryString = qs.stringify({
      page: 1,
      search: router.query.search || '',
      filters: filters.join(',')
    })
    router.replace(`/project/${router.query.projectSlug}?${queryString}`)
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
    const { formatMessage } = this.props.intl
    const selectedOptions = this.getSelectedOptions()
    const hasValue = selectedOptions.length > 0

    return (
      <Wrapper>
        <SelectDropdown
          placeholder={formatMessage({ id: 'keys-header.filters.label' })}
          onApply={options => this.onFilter(options)}
          onCancel={this.onCancel}
          selectedOptions={selectedOptions}
          hasValue={hasValue}
          options={[
            {
              text: formatMessage({
                id: 'keys-header.filters.missing-translations'
              }),
              value: 'hasMissingTranslations'
            },
            {
              text: formatMessage({
                id: 'keys-header.filters.new-keys'
              }),
              value: 'isNew'
            }
          ]}
        />
      </Wrapper>
    )
  }
}

export default injectIntl(withRouter(KeysFilters))
