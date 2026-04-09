import type { PortableTextBlock } from "@portabletext/types";
import type { SanityDocument } from "sanity";
import { sanityClient } from "sanity:client";
import groq from "groq";

interface Post extends SanityDocument {
  slug: { current: string };
  title: string;
  date: string;
  content: PortableTextBlock[];
}

export async function getPost(slug: string): Promise<Post> {
  const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    date,
    content
  }`;

  return await sanityClient.fetch<Post>(POST_QUERY, { slug });
}

export async function getPosts(): Promise<Post[]> {
  const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)]|order(date desc){
    title,
    slug,
    date,
    content
  }`;

  return await sanityClient.fetch<Post[]>(POSTS_QUERY);
}

export async function getSlugs(): Promise<{ params: { slug: string } }> {
  const SLUGS_QUERY = groq`*[_type == "post" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`;

  return await sanityClient.fetch(SLUGS_QUERY);
}
