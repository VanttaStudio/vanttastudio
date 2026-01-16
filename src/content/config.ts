import { defineCollection, z } from "astro:content";

// Colección para los artículos del Blog
const postsCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            pubDate: z.date(),
            description: z.string(),
            author: z.object({
                name: z.string(),
                link: z.string(),
            }),
            image: z.object({
                source: image(),
                alt: z.string(),
            }),
            tags: z.array(z.string()),
        }),
});

// Colección para el Portafolio (Proyectos de Vantta Studio)
const projectsCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            client: z.string().optional(), // Nuevo: Para poner el nombre del cliente
            pubDate: z.date(),
            description: z.string(),
            link: z.string(), // URL del proyecto en vivo
            author: z.object({
                name: z.string(),
                link: z.string(),
            }),
            image: z.object({
                source: image(),
                alt: z.string(),
            }),
            tags: z.array(z.string()), // Nuevo: Para poner "Desarrollo Web", "Branding", etc.
        }),
});

// Colección para los Autores (miembros del equipo)
const authorsCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            description: z.string(),
            image: z.object({
                source: image(),
                alt: z.string(),
            }),
        }),
});

export const collections = {
    posts: postsCollection,
    projects: projectsCollection,
    authors: authorsCollection,
};