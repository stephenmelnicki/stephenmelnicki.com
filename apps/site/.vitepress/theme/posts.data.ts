import { defineLoader } from 'vitepress'
import { getPosts, type Post } from './support/sanity'

interface PostData {
  posts: Post[]
}

declare const data: PostData
export { data }

export default defineLoader({
  async load() {
    const posts = await getPosts()
    return { posts }
  },
})
