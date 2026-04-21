import { defineRoutes } from 'vitepress'
import { getPaths, getPost } from '../.vitepress/theme/support/sanity'

export default defineRoutes({
  async paths() {
    return getPaths()
  },
  async transformPageData(pageData) {
    const post = await getPost(pageData?.params?.slug)

    return {
      title: `${post.title}`,
      post,
    }
  },
})
