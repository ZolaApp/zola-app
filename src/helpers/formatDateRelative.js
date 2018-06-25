// @flow
import format from 'date-fns/format'
import isToday from 'date-fns/is_today'
import isYesterday from 'date-fns/is_yesterday'
import isSameWeek from 'date-fns/is_same_week'
import isSameYear from 'date-fns/is_same_year'

const formatDateRelative = (date: Date, locale: string = 'en') => {
  if (isToday(date)) {
    const prefix = locale === 'en' ? 'today at' : 'aujourd’hui à'

    return `${prefix} ${format(date, 'HH:mm')}`
  }

  if (isYesterday) {
    const prefix = locale === 'en' ? 'yesterday at' : 'hier à'

    return `${prefix} ${format(date, 'HH:mm')}`
  }

  if (isSameWeek) {
    const prefix = locale === 'en' ? 'on' : 'le'

    return `${prefix} ${format(date, 'DDDD')}`
  }

  if (!isSameYear) {
    const prefix = locale === 'en' ? 'on' : 'le'

    return `${prefix} ${format(date, 'MMMM Do, YYYY')}`
  }

  const prefix = locale === 'en' ? 'on' : 'le'

  return `${prefix} ${format(date, 'MMMM Do')}`
}

export default formatDateRelative
