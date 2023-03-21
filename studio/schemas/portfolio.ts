import { defineField, defineType } from 'sanity'

// interface IProjectType {
//   image: {
//     href: string,
//     alt: string,
//     imageWidth?: string,
//     imageHeight?: string
//   },
//   project: {
//     github: string,
//     title: string,
//     description: string,
//     technologies: string[],
//     liveDemo: string,
//     backendDemo?: string,
//   }
// }

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'imageDetails',
      title: 'Image Details',
      type: 'object',
      fields: [
        { name: 'alt', type: 'string', title: 'Alt' },
        { name: 'imageWidth', type: 'string', title: 'Image Width' },
        { name: 'imageHeight', type: 'string', title: 'Image Height' }
      ]
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'github',
      title: 'Github',
      type: 'url',
    }),
    defineField({
      name: 'liveDemo',
      title: 'Live Demo',
      type: 'url',
    }),
    defineField({
      name: 'backendDemo',
      title: 'Backend Demo',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],

  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare(movie, viewOptions = {}) {
      const title = viewOptions.ordering && viewOptions.ordering.name
      return { title: title }
    }
  },
})
