import groq from "groq";

export const SITE_TITLE = "stephenmelnicki.com";
export const SITE_DESCRIPTION = "Broadcasting from the Computerhell Cabin";
export const PAGE_SIZE = 10;

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)]|order(date desc){
  title, 
  slug, 
  date, 
  content
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  slug,
  date,
  content
}`;

export const SLUGS_QUERY = groq`*[_type == "post" && defined(slug.current)]{
  "params": {
    "slug": slug.current
  }
}`;
