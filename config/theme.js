import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#FDFCFE',
			main: '#F0ECF8',
			dark: '#000',
			contrastText: '#000',
		},
		secondary: {
			main: '#8460C2',
			dark: '#7C58BC',
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
	},
})

export default theme
