import { DateTime } from 'luxon'

export function getHumanDate(inputDate: string | undefined) {
  if (inputDate == undefined) {
    return 'Unknown'
  }

  const date = DateTime.fromISO(inputDate)
  const daysSince = DateTime.now().diff(date, 'days').days

  if (daysSince < 1) {
    return 'Today'
  } else if (daysSince < 2) {
    return 'Yesterday'
  }
  // else if (daysSince < 7) {
  //   return 'This Week'
  // } else if (daysSince < 14) {
  //   return 'Last Week'
  // }

  return date.toLocaleString(DateTime.DATE_FULL)
}
