import type { CollectionConfig } from 'payload'

export const Introduction: CollectionConfig = {
  slug: 'introduction',
  labels: { singular: 'Introduction', plural: 'Introduction' },
  admin: {
    useAsTitle: 'titre',
  },
  access: {
    create: () => true,
    read: () => true,
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
