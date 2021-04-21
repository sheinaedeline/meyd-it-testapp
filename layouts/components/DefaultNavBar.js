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
import { ListItemAvatar } from '@material-ui/core'

import { MeyditLogoIcon } from '@/assets/meydit'

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
	meyditLogo: {
		minWidth: '40px',
		alignContent: 'center',
		margin: theme.spacing(2),
	},
}))

const navButtonText = [
	{ text: 'LEARN MORE', href: '#' },
	{ text: 'GET INSPIRED', href: '/client' },
	{ text: 'FEED', href: '#' },
]

const LayoutNavBar = () => {
	const classes = useStyles()

	return (
		<AppBar position="static" elevation={0}>
			<Toolbar>
				<DefaultNavDrawer>{navButtonText}</DefaultNavDrawer>

				{/*This is the logo*/}
				<Box className={classes.title}>
					<Button color="secondary" href="/" style={{ height: '40px' }}>
						<MeyditLogoIcon className={classes.meyditLogo} />
						<Typography>MEYD.IT</Typography>
					</Button>
				</Box>

				<Box>
					{navButtonText.map((item, index) => (
						<Button
							key={'button-item-' + index}
							className={classes.navButton}
							href={item.href}
						>
							{item.text}
						</Button>
					))}
				</Box>

				<Button
					variant="outlined"
					className={classes.loginButton}
					color="secondary"
					href="/auth"
				>
					LOGIN/JOIN
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default LayoutNavBar
