/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#e6ffeb',
					100: '#b3ffc4',
					200: '#80ff9d',
					300: '#4dff76',
					400: '#1aff4f',
					500: '#00cc30',
					600: '#00a826',
					700: '#00801e',
					800: '#004d12',
					900: '#001a06',
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
	plugins: [require('@tailwindcss/line-clamp')],
	corePlugins: {
		preflight: false,
	},
};
