import { toHTML } from '@portabletext/to-html'
import { getPosts } from '../../sanity'

interface Post {
  slug: string
  title: string
  date: string
  datetime: string
  content: string
}

interface HomeData {
  posts: Post[]
}

declare const data: HomeData
export { data }

export default {
  async load() {
    const data = await getPosts()
    const posts = data.map(({ slug, title, date, content }) => ({
      slug: slug.current,
      title,
      date: formatDate(date),
      datetime: dateTime(date),
      content: toHTML(content),
    }))

    return { posts }
  },
}

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
