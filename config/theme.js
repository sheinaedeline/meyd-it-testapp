import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#fff',
			// Lighten 5
			main: '#F0ECF8',
			// Lighten 4
			dark: '#DACFED',
			contrastText: '#000',
		},
		secondary: {
			// Base
			main: '#8460C2',
			// Darken 1
			dark: '#7C58BC',
			// Lightest
			contrastText: '#FDFCFE',
		},
		text: {
			primary: '#8460C2',
			secondary: '#FDFCFE',
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
})

export default theme
