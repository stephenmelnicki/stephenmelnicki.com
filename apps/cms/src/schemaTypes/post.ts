import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    { name: 'meta', title: 'Meta' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'meta',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'meta',
      options: {
        source: 'title',
        maxLength: 48,
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'date',
      group: 'meta',
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'code',
          options: {
            withFilename: true,
          },
        },
        {
          type: 'image',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'caption',
              type: 'string',
            }),
            defineField({
              name: 'attribution',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
    },
    prepare({ title, date }) {
      return {
        title,
        subtitle: new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      }
    },
  },
})
