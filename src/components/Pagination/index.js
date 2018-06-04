// @flow
import React, { Component } from 'react'
import Paginator from 'paginator'
import { withRouter } from 'next/router'
import Link from 'next/link'
import { PaginationItem } from './styles'

type Props = {
  router: any,
  keysCount: number,
  activeIndex: number
}

const KEYS_PER_PAGE = 10
const LINKS_COUNT = 4

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
  static defaultProps = {
    activeIndex: 0
  }

  render() {
    const { keysCount, activeIndex, router } = this.props
    const paginationElements = buildPagination(keysCount, activeIndex)

    return (
      <div>
        {paginationElements.map(page => (
          <PaginationItem key={page} isActive={page === activeIndex + 1}>
            <Link
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
