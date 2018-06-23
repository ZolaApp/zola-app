// @flow
import React, { Component, Fragment } from 'react'
import Paginator from 'paginator'
import { withRouter } from 'next/router'
import Link from 'next/link'
import { KEYS_PER_PAGE, LINKS_COUNT } from '@constants/pagination'
import qs from 'qs'
import { PaginationItem } from './styles'

type Props = {
  router: any,
  keysCount: number
}

const buildPagination = (totalPagesCount, currentPageIndex) => {
  const paginator = Paginator(KEYS_PER_PAGE, LINKS_COUNT)
  const { first_page: firstPage } = paginator.build(
    totalPagesCount,
    currentPageIndex
  )

  return Array.from(
    { length: LINKS_COUNT },
    (_, index) => firstPage + 1 + index
  )
}

class Pagination extends Component<Props> {
  getLinkHref = page => {
    const { router } = this.props
    const queryString = qs.stringify({
      page: page,
      search: router.query.search ? router.query.search : '',
      filters: router.query.filters ? router.query.filters : []
    })

    return `/project/${router.query.projectSlug}?${queryString}`
  }

  render() {
    const { keysCount, router } = this.props
    const activeIndex = router.query.page - 1 || 0
    const lastPage = Math.ceil(keysCount / KEYS_PER_PAGE)
    const paginationItems = buildPagination(keysCount, activeIndex).filter(
      page => page <= lastPage
    )
    const shouldRenderPagination = paginationItems.length > 0

    return shouldRenderPagination ? (
      <div>
        {!paginationItems.includes(1) && (
          <Fragment>
            <PaginationItem isActive={activeIndex + 1 === 1}>
              <Link prefetch href={this.getLinkHref(1)}>
                <a>{1}</a>
              </Link>
            </PaginationItem>

            {paginationItems[0] !== 2 && <PaginationItem>…</PaginationItem>}
          </Fragment>
        )}

        {paginationItems.map(page => (
          <PaginationItem key={page} isActive={page === activeIndex + 1}>
            <Link prefetch href={this.getLinkHref(page)}>
              <a>{page}</a>
            </Link>
          </PaginationItem>
        ))}

        {!paginationItems.includes(lastPage) && (
          <Fragment>
            {paginationItems[paginationItems.length - 1] !== lastPage - 1 && (
              <PaginationItem>…</PaginationItem>
            )}

            <PaginationItem isActive={activeIndex + 1 === lastPage}>
              <Link prefetch href={this.getLinkHref(lastPage)}>
                <a>{lastPage}</a>
              </Link>
            </PaginationItem>
          </Fragment>
        )}
      </div>
    ) : null
  }
}

export default withRouter(Pagination)
