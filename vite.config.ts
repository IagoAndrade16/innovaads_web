import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
	plugins: [
		sveltekit(),
		viteStaticCopy({
      targets: [
        {
          src: 'scratch/**/*', // Define a pasta e os arquivos a serem copiados
          dest: 'scratch', // Define o destino dentro do diretório de build
        },
      ],
    }),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		fs: {
			allow: ['..']
		}
	},
	build: {}
});
