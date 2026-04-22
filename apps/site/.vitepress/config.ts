import { defineConfig } from 'vitepress'
import { generateFeed } from './feed'

export default defineConfig({
  lang: 'en-US',
  title: 'stephenmelnicki.com',
  description: 'We\'ll make it up as we go along',
  cleanUrls: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'stephenmelnicki.com',
        href: '/feed.xml',
      },
    ],
  ],
  buildEnd: generateFeed,
})
