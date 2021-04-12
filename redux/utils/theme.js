import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#757ce8',
			main: '#a786df',
			dark: '#002884',
			contrastText: 'rgba(0,0,0,.87)',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
		footer: {
			light: '#8460c2',
			main: '#440f75',
			dark: '#ba000d',
			text: {
				color: 'white',
			},
		},
	},
})

export default theme
