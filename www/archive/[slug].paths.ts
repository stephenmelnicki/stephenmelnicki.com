import { toHTML } from '@portabletext/to-html'
import { dateTime, formatDate } from '../.vitepress/theme/home.data'
import { getPosts } from '../sanity'

export default {
  async paths() {
    const posts = await getPosts()

    return posts.map(({ slug, title, date, content }) => ({
      params: {
        slug: slug.current,
        title,
        date: formatDate(date),
        datetime: dateTime(date),
      },
      content: toHTML(content),
    }))
  },
}
