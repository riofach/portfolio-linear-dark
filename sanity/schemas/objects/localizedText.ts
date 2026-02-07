import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'localizedText',
  title: 'Localized Text',
  type: 'object',
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'id',
      title: 'Indonesian',
      type: 'text',
      rows: 3,
    }),
  ],
})
