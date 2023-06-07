import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
	fonts: {
		heading: 'Nunito, sans-serif',
		link: 'Bodoni Moda, sans-serif',
		body: 'Doasi, sans-serif',
		button: 'Play, san-serif'
	},
	styles: {
		global: {
			body: {
				backgroundImage: `url('/background.webp')`,
				backgroundColor: 'rgba(0, 0, 0, 0.4)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			},
		},
	},
});