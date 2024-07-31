import type { CollectionConfig } from 'payload'

export const Introduction: CollectionConfig = {
  slug: 'introduction',
  labels: { singular: 'Introduction', plural: 'Introductions' },
  admin: {
    useAsTitle: 'titre',
  },
  fields: [
    {
      name: 'titre',
      type: 'text',
      required: true,
    },
    {
      name: 'contenu',
      type: 'richText',
      required: true,
    },
  ],
}
