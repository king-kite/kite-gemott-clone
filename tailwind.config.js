/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#6565cd',
					200: '#5252c7',
					300: '#3e3ec1',
					400: '#252574',
					500: '#1f1f60',
					600: '#19194d',
					700: '#13133a',
					800: '#0c0c27',
					900: '#060613',
				},
				secondary: {
					100: '#ffa366',
					200: '#ff944d',
					300: '#ff8533',
					400: '#ff751a',
					500: '#ff6600',
					600: '#e65c00',
					700: '#cc5200',
					800: '#b34700',
					900: '#993d00',
				},
			},
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
};
