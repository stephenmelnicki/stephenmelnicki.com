import type { SanityImageObject } from '@sanity/image-url'
import type { PortableTextBlock } from '@sanity/types'
import { toHTML } from '@portabletext/to-html'
import { bundledLanguages, getSingletonHighlighter } from 'shiki/bundle/web'
import { sanityImageBuilder } from './sanity'

interface CodeBlock {
  value: {
    language: string
    code: string
    filename?: string
    highlightedLines?: number[]
  }
}

interface ImageBlock {
  value: {
    name: string
    asset: SanityImageObject
    caption?: string
    attribution?: string
  }
}

export async function toHtml(content: PortableTextBlock[]) {
  const highlighter = await getSingletonHighlighter({
    themes: ['one-light', 'one-dark-pro'],
    langs: Object.keys(bundledLanguages),
  })

  return toHTML(content, {
    components: {
      types: {
        code: ({ value }: CodeBlock) => highlighter.codeToHtml(value.code, {
          lang: value.language,
          themes: {
            light: 'one-light',
            dark: 'one-dark-pro',
          },
        }),
        image: ({ value }: ImageBlock) => {
          const imageSrc = sanityImageBuilder.image(value.asset)
            .auto('format')
            .fit('max')
            .width(800)
            .toString()

          return `
            <div class="flex flex-col items-center justify-center not-prose gap-4">
              <img src="${imageSrc}" alt="${value.name}" />
              ${value.caption ? `<p class="text-muted text-sm italic">${value.caption}</p>` : ''}
            </div>
          `
        },
      },
    },
  })
}
