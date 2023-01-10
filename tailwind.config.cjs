/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					'lighter-2': '#FAF4F2',
					'lighter-1': '#FF9B70',
					DEFAULT: '#FF7315',
				},
				secondary: '#010035',
			}
		},
	},
	plugins: [],
}
