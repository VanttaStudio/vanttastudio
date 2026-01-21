import { defineCollection, z } from "astro:content";

// Colección para los artículos del Blog
const postsCollection = defineCollection({
    // Usamos el helper 'image' para que Astro procese las rutas de las imágenes
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            // 'z.coerce.date()' permite que Astro lea fechas incluso si vienen como string en el MDX
            pubDate: z.coerce.date(), 
            description: z.string(),
            author: z.object({
                name: z.string(),
                link: z.string(),
            }),
            image: z.object({
                source: image(), // Valida que el archivo de imagen exista físicamente
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
            client: z.string().optional(),
            pubDate: z.coerce.date(),
            description: z.string(),
            link: z.string().url().optional(), // '.url()' asegura que sea un enlace válido
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

// Exportamos las colecciones
export const collections = {
    posts: postsCollection,
    projects: projectsCollection,
    authors: authorsCollection,
};