import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'main',
  title: 'Main',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
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
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'about',
      title: 'About Me',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'object',
      fields: [
        { name: 'linkedin', type: 'url', title: 'Linkedin' },
        { name: 'github', type: 'url', title: 'Github' },
      ]
    }),
    defineField({
      name: 'frontendStack',
      title: 'Frontend Stack',
      type: 'string',
    }),
    defineField({
      name: 'backendStack',
      title: 'Backend Stack',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
