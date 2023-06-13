import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DPatt-UI',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Get Started',
					autogenerate: { directory: 'get-started' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Installation', link: '/get-started/installation/' },
					// 	{ label: 'Usage', link: '/get-started/usage/' },
					// ],
				},
				{
					label: 'Components',
					autogenerate: { directory: 'components' },
				},
			],
		}),
	],
});
