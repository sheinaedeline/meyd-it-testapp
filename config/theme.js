import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#fff',
			// Base
			main: '#8460C2',
			// Lighten 4
			dark: '#DACFED',
			contrastText: '#000',
			accent1: '#EFE8FF',
			accent2: '#CAB5FF',
			accent3: '#A682FF',
			accent4: '#9469FF',
			darken1: '#7C58BC',
			darken2: '#714EB4',
			darken3: '#6744AC',
			darken4: '#54339F',
			darkest: '#0F0A19',
			lighten1: '#9678CB',
			lighten2: '#A990D4',
			lighten3: '#C2B0E1',
			lighten4: '#DACFED',
			lighten5: '#F0ECF8',
		},
		secondary: {
			main: '#C2609E',
		},
		text: {
			primary: '#8460C2',
			secondary: '#FDFCFE',
		},
		customColors: {
			hello: '#fff',
		},
	},
	typography: {
		fontFamily: [
			'Quicksand',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},

	overrides: {
		MuiButton: {
			root: {
				borderRadius: 0,
				textTransform: 'uppercase',
			},
		},
		MuiTextField: {
			root: {
				borderRadius: 0,
			},
		},
	},
	shape: {
		borderRadius: 0,
	},
})

export default theme
