import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	// Starlight has no Russian for the search window (Pagefind); src/content/i18n/ru.json supplies it.
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
