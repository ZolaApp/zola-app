// @flow
import React, { Component } from 'react'
import Paginator from 'paginator'
import { withRouter } from 'next/router'
import Link from 'next/link'
import { KEYS_PER_PAGE, LINKS_COUNT } from '@constants/pagination'
import { PaginationItem } from './styles'

type Props = {
  router: any,
  keysCount: number
}

const buildPagination = (totalPagesCount, currentPageIndex) => {
  const paginator = Paginator(KEYS_PER_PAGE, LINKS_COUNT)
  const { first_page: firstPage, last_page: lastPage } = paginator.build(
    totalPagesCount,
    currentPageIndex
  )

  return Array.from(
    { length: lastPage - firstPage + 1 },
    (_, index) => firstPage + index
  )
}

class Pagination extends Component<Props> {
  render() {
    const { keysCount, router } = this.props
    const activeIndex = router.query.page - 1 || 0
    const paginationElements = buildPagination(keysCount, activeIndex)

    return (
      <div>
        {paginationElements.map(page => (
          <PaginationItem key={page} isActive={page === activeIndex + 1}>
            <Link
              prefetch
              href={`${router.route}/${router.query.projectSlug}?page=${page}`}
            >
              <a>{page}</a>
            </Link>
          </PaginationItem>
        ))}
      </div>
    )
  }
}

export default withRouter(Pagination)
