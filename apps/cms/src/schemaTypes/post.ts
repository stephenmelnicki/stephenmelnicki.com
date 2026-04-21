import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 48,
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'date',
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
})
