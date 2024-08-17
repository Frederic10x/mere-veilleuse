import { CollectionConfig } from 'payload'

export const Images: CollectionConfig = {
  slug: 'images',
  admin: {
    useAsTitle: 'nom',
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'nom',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // required
      required: true,
    },
    {
      name: 'orientation',
      type: 'select',
      options: [
        {
          label: 'Normal',
          value: 'normal',
        },
        {
          label: 'Sur deux rangées',
          value: 'two-rows',
        },
        {
          label: 'Sur deux colonnes',
          value: 'two-cols',
        },
      ],
      required: true,
    },
    {
      name: 'position',
      type: 'number',
      min: 0,
      required: true,
      defaultValue: 0,
    },
  ],
}
