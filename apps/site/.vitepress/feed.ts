import type { SiteConfig } from 'vitepress'
import { writeFileSync } from 'node:fs'
import path from 'node:path'
import { Feed } from 'feed'
import { getPosts } from './theme/support/sanity'

const baseUrl = 'https://stephenmelnicki.com'

export async function generateFeed(siteConfig: SiteConfig) {
  const feed = new Feed({
    title: siteConfig.site.title,
    description: siteConfig.site.description,
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    favicon: `${baseUrl}/favicon.ico`,
    copyright: 'Copyright © 2026 Stephen Melnicki. All rights reserved.',
  })

  const posts = await getPosts()
  for (const post of posts) {
    const date = new Date(post.date)
    date.setUTCHours(8)

    feed.addItem({
      title: post.title,
      id: `${baseUrl}/archive/${post.slug}`,
      link: `${baseUrl}/archive/${post.slug}`,
      date,
      content: post.content,
    })
  }

  writeFileSync(path.join(siteConfig.outDir, 'feed.xml'), feed.rss2())
}
