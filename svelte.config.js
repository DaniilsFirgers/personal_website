import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({ pages: 'dist', assets: 'dist', fallback: 'index.html', precompress: true }),

		alias: {
			$stores: path.resolve('./src/stores'),
			$lib: path.resolve('./src/lib'),
			$components: path.resolve('./src/components'),
			$workers: path.resolve('./src/workers')
		}
	}
};

export default config;
