import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        publishedAt: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
      }),
    }),
  },
})
