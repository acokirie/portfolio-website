import { defineCollection, z } from "astro:content";


const blog = defineCollection({

  type: "content",

  schema: z.object({

    title: z.string(),

    description: z.string(),

    date: z.date(),

    author: z.string().default("Adaku Okirie"),

    category: z.string(),

    tags: z.array(z.string()),

    cover: z.string().optional(),

    featured: z.boolean().default(false),

    draft: z.boolean().default(false),

    readingTime: z.string().optional(),

  })

});


export const collections = {

  blog,

};