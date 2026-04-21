export function dateTime(raw: string) {
  const date = new Date(raw)
  date.setUTCHours(8)

  return date.toISOString().split('T')[0]
}

export function formatDate(raw: string) {
  const date = new Date(raw)
  date.setUTCHours(8)

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
