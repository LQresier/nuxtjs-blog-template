import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: 'blogs/**/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        date: z.date(),
        rawbody: z.string()
      })
    })
  }
})