/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
      },
			textColor: {
				 base: 'rgb(var(--color-text-base))',
				 accent: 'rgb(var(--color-accent))',
			},
			backgroundColor: {
				base: 'rgb(var(--color-bg-base))',
				accent: 'rgb(var(--color-accent))',
			},
			fill: {
				base: 'rgb(var(--color--base))',
				accent: 'rgb(var(--color-accent))',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
