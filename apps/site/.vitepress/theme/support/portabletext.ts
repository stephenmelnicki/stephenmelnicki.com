import type { PortableTextBlock } from '@sanity/types'
import { toHTML } from '@portabletext/to-html'
import { bundledLanguages, getSingletonHighlighter } from 'shiki'

interface CodeBlock {
  value: {
    code: string
    language: string
  }
}

export async function toHtml(content: PortableTextBlock[]) {
  const highlighter = await getSingletonHighlighter({
    themes: ['material-theme-lighter', 'material-theme-darker'],
    langs: Object.keys(bundledLanguages),
  })

  return toHTML(content, {
    components: {
      types: {
        code: ({ value }: CodeBlock) => highlighter.codeToHtml(value.code, {
          lang: value.language,
          themes: {
            light: 'material-theme-lighter',
            dark: 'material-theme-darker',
          },
        }),
      },
    },
  })
}
