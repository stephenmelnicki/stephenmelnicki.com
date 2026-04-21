import type { PortableTextBlock, SanityDocument } from '@sanity/types'
import process from 'node:process'
import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import { defineQuery } from 'groq'
import { loadEnv } from 'vitepress'
import { dateTime, formatDate } from './date'
import { toHtml } from './portabletext'

const { VITE_SANITY_STUDIO_PROJECT_ID, VITE_SANITY_STUDIO_DATASET } = loadEnv(
  '',
  process.cwd(),
)

interface PostDocument extends SanityDocument {
  slug: { current: string }
  title: string
  date: string
  content: PortableTextBlock[]
}

interface Path {
  params: {
    slug: string
  }
}

export interface Post {
  title: string
  date: string
  datetime: string
  content: string
  slug: string | undefined
}

export const sanityClient = createClient({
  projectId: VITE_SANITY_STUDIO_PROJECT_ID,
  dataset: VITE_SANITY_STUDIO_DATASET,
  useCdn: false,
  apiVersion: '2026-04-10',
})

export const sanityImageBuilder = createImageUrlBuilder(sanityClient)

async function toPost(document: PostDocument): Promise<Post> {
  const content = await toHtml(document.content)
  const date = formatDate(document.date)
  const datetime = dateTime(document.date)

  return {
    slug: document.slug.current,
    title: document.title,
    date,
    datetime,
    content,
  }
}

export async function getPost(identifier: string): Promise<Post> {
  const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    date,
    content
  }`)

  const document = await sanityClient.fetch<PostDocument>(POST_QUERY, { slug: identifier })
  return await toPost(document)
}

export async function getPosts(): Promise<Post[]> {
  const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)]|order(date desc){
    title,
    slug,
    date,
    content
  }`)

  const documents = await sanityClient.fetch<PostDocument[]>(POSTS_QUERY)
  return await Promise.all(documents.map(toPost))
}

export async function getPaths(): Promise<Path[]> {
  const SLUGS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)]{
    "params": {
      "slug": slug.current
    }
  }`)

  return sanityClient.fetch<Path[]>(SLUGS_QUERY)
}
