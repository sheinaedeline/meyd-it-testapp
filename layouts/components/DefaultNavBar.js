// import stylings
import { makeStyles } from '@material-ui/core/styles'
// import MUI components
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import custom components
import DefaultNavDrawer from './DefaultNavDrawer'

const useStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1,
	},
	navButton: {
		color: '#000',
		fontWeight: 'bold',
		marginRight: theme.spacing(1),
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	},
	loginButton: {
		fontWeight: 'bold',
	},
}))

const navButtonText = ['LEARN MORE', 'GET INSPIRED', 'FEED']

const LayoutNavBar = () => {
	const classes = useStyles()

	return (
		<AppBar position="static" elevation={0} >
			<Toolbar>
				<DefaultNavDrawer>
					{navButtonText}
				</DefaultNavDrawer>

				<Box className={classes.title}>
					<Button color="secondary">
						<Typography>MEYD.IT</Typography>
					</Button>
				</Box>

				<Box>
					{navButtonText.map((text, index) => (
						<Button key={'button-item-' + index} className={classes.navButton}>{text}</Button>
					))}
				</Box>

				<Button variant="outlined" className={classes.loginButton} color="secondary">
          LOGIN/JOIN
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default LayoutNavBar
