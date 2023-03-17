// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// Define a schema for each collection you'd like to validate.
const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // In frontmatter, dates written without quotes around them are interpreted as Date objects
        created: z.string().or(z.date()).transform((val) => new Date(val)),
        updated: z.string().or(z.date()).transform((val) => new Date(val)),
        image: z.string().optional(),
        avatar: z.string().optional(),
        author: z.string().default('ardency'),
        tags: z.array(z.string()),
        language: z.enum(['en', 'es']),
    }),
});

// Define a schema for each collection you'd like to validate.
const policy = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // In frontmatter, dates written without quotes around them are interpreted as Date objects
        created: z.string().or(z.date()).transform((val) => new Date(val)),
        updated: z.string().or(z.date()).transform((val) => new Date(val)),
        image: z.string().optional(),
        avatar: z.string().optional(),
        author: z.string().default('ardency'),
        tags: z.array(z.string()),
        language: z.enum(['en', 'es']),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
    blog, policy
};