/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				blue: 'rgb(0, 113, 255)',
				gray: {
					DEFAULT: '#86868b',
					100: '#94928d',
					200: '#afafaf',
					300: 'rgb(66 66 69/70%)',
				},
				zinc: '#101010',
			},
		},
	},
	plugins: [],
}
