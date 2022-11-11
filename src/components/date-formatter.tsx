import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

export function DateFormatter({ dateString }: Props) {
  const date = parseISO(dateString)
  return <time className="text-zinc-700" dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
