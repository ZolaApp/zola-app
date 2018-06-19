// @flow
import format from 'date-fns/format'
import isToday from 'date-fns/is_today'
import isYesterday from 'date-fns/is_yesterday'
import isSameWeek from 'date-fns/is_same_week'
import isSameYear from 'date-fns/is_same_year'

const formatDateRelative = (date: Date) => {
  if (isToday(date)) {
    return `today at ${format(date, 'HH:mm')}`
  }

  if (isYesterday) {
    return `yesterday at ${format(date, 'HH:mm')}`
  }

  if (isSameWeek) {
    return `on ${format(date, 'DDDD')}`
  }

  if (!isSameYear) {
    return `on ${format(date, 'MMMM Do, YYYY')}`
  }

  return `on ${format(date, 'MMMM Do')}`
}

export default formatDateRelative
