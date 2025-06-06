/** @type {import('tailwindcss').Config} */
export default {
	content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
	theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        container: {
            padding: '1rem',
            center: true,
        },
        fontFamily: {
            'archivo': 'Archivo',
        },
		extend: {
            transitionDuration: {
                '4000': '4000ms',
            }
        },
	},
	plugins: [],
}
