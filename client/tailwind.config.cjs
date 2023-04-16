/** @type {import('tailwindcss').Config} */
module.exports = {
	tailwindConfig: './styles/tailwind.config.js',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				cobalto: '#28469d',
				gris: 'rgb(0,0,0,0.80)',
				azulito: '#0080FF',
				azulitoClaro: 'rgba(0, 128, 255, 0.13)',
				opacidad: '1A1B1F',
				triplee: '#eee',
			},
			fontFamily: {
				monserrat: ['Montserrat, sans-serif'],
			},
			backgroundImage: {
				heroHome:
					'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./src/assets/Imagenes-Optimen/Home/heroHome.jpg)',
				heroAbout:
					'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./src/assets/Imagenes-Optimen/About Us/ops.png)',
				opacity: 'rgba(0, 0, 0, 0.8)',
				heroNew:
					'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./src/assets/Imagenes-Optimen/News/network-3524352.jpg)',
			},
			height: {
				500: '500px',
			},
			maxWidth: {
				1440: '1440px',
				940: '940px',
				900: '900px',
			},
			lineHeight: {
				40: '40px',
			},
			gridTemplateColumns: {
				templateColumns: 'auto auto auto 1fr',
				'2.5-1fr': '2.5fr 1fr',
			},
			gridTemplateRows: {
				auto1: 'auto',
				auto2: 'auto auto',
			},
			boxShadow: {
				sombra: '0 1px 5px -4px #000',
				sombra2: '-6px 6px 20px 0 rgba(0, 0, 0, 0.12)',
			},
			flex: {
				ceroAuto: '0 auto',
			},
			transitionProperty: {
				card: 'transition: transform 500ms ease 0',
			},
		},
	},
	darkMode: 'class',
	plugins: [],
};
