/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#f9d2d4',
					200: '#f08e93',
					300: '#ea6168',
					400: '#e21d27',
					500: '#b0171f',
					600: '#710f14',
					700: '#44090c',
					800: '#170304',
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
