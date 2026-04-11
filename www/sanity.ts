import type { PortableTextBlock } from '@portabletext/types'
import type { SanityDocument } from '@sanity/types'
import process from 'node:process'
import { createClient } from '@sanity/client'
import groq from 'groq'
import { loadEnv } from 'vitepress'

const { VITE_SANITY_STUDIO_PROJECT_ID, VITE_SANITY_STUDIO_DATASET } = loadEnv(
  '',
  process.cwd(),
)

export interface Post extends SanityDocument {
  slug: { current: string }
  title: string
  date: string
  content: PortableTextBlock[]
}

const sanityClient = createClient({
  projectId: VITE_SANITY_STUDIO_PROJECT_ID,
  dataset: VITE_SANITY_STUDIO_DATASET,
  useCdn: true,
  apiVersion: '2026-04-10',
})

export async function getPosts(): Promise<Post[]> {
  const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)]|order(date desc){
    title,
    slug,
    date,
    content
  }`

  return await sanityClient.fetch<Post[]>(POSTS_QUERY)
}
