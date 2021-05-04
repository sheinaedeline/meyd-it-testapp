// The layout for the dashboard that shows the drawer and footer

import React from 'react'
import PropTypes from 'prop-types'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '@/config/theme'
// import material ui components
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'
import Zoom from '@material-ui/core/Zoom'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import custom components
import DefaultFooter from '@/layouts/components/DefaultFooter'
// import icons
import { MeyditLogoIcon } from '@/assets/meydit'
import {
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@/icons/arrows'

const drawerWidth = 240

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		overflow: 'hidden hidden',
		backgroundColor: theme.palette.primary.lighten5,
	},
	drawerRoot: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		overflow: 'hidden hidden',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'end',
		justifyContent: 'right',
		padding: '0 8px',
		fill: 'transparent',
		height: '100%',
		right: 0,
		position: 'absolute',
	},
	drawer: {
		position: 'relative',
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: '0px',
	},
	content: {
		flexGrow: 1,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: 0,
		'&& > *': {
			backgroundColor: 'transparent',
		},
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		[theme.breakpoints.up('md')]: {

			marginLeft: drawerWidth,
		},
	},
	container: {
		padding: theme.spacing(4),
		minHeight: '100vh',
		alignItems: 'flex-start',
		backgroundColor: theme.palette.primary.main,
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
	openButton: {
		height: '10%',
		display: 'block',
	},
	openButtonHidden: {
		display: 'none',
	},
	fab: {
		position: 'fixed',
		bottom: theme.spacing(4),
		left: theme.spacing(2),
		backgroundColor: theme.palette.primary.dark,
	},
	meyditBlock: {
		paddingTop: theme.spacing(2),
	},
	meyditLogo: {
		width: '40%',
		height: 'auto',
		maxWidth: drawerWidth,
		minWidth: '100px',
		margin: '0 auto',
	},
	companyName: {
		color: theme.palette.primary.contrastText,
	},
	meyditLink: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		alignContent: 'center',
	},
	icon: {
		width: '24px',
		height: 'auto',
		fill: 'transparent',
	},
})

const Layout = ({ children, directories }) => {
	const classes = useStyles()

	// State of the drawer
	const [open, setOpen] = React.useState(false)
	const toggleDrawer = (state) => (event) => {
		setOpen(state)
	}

	const transitionDuration = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen,
	}

	// The text under the company name
	const subtext = 'Subtext'

	// The items in the list in the drawer
	const listItem = (icon, href, text, key) => {
		return (
			<ListItem button key={key} style={{ minWidth: '100%' }}>
				<ListItemIcon>
					<SvgIcon component={icon} className={classes.icon} />
				</ListItemIcon>
				<ListItemText href={href} primary={text} />
			</ListItem>
		)
	}

	const drawer = (
		<div className={classes.drawerRoot}>

			{/* The logo, name, and subtext */}
			<div className={classes.meyditBlock}>
				{/* The logo */}
				<Link href="/" className={classes.meyditLink}>
					<MeyditLogoIcon className={classes.meyditLogo} />

					{/* Company name under the logo */}
					<Typography align="center" className={classes.companyName}>
						<b>Meydit</b>
					</Typography>
				</Link>

				{/* Text that goes under the logo */}
				<Typography
					align="center"
					color="initial"
					className={classes.subtext}
				>
					{subtext}
				</Typography>
			</div>
			<Divider />

			{/* The list of directories */}
			<List>
				{directories.map((item) =>
					listItem(item.icon, item.href, item.text, item.text),
				)}
			</List>
			<Divider />

			{/* The close drawer button */}
			<div className={classes.toolbarIcon}>
				<IconButton onClick={toggleDrawer(false)}>
					<ChevronLeftIcon style={{ height: '30px' }}/>
				</IconButton>
			</div>
		</div>
	)

	return (
		<div className={classes.root}>
			<CssBaseline />

			{/* Drawer on small screens */}
			<Hidden smUp>
				<Drawer
					variant="temporary"
					open={open}
					onClose={toggleDrawer(false)}
					classes={{ paper: classes.drawerPaper }}
					ModalProps={{ keepMounted: true }} // Better performance on mobile
				>
					{drawer}
				</Drawer>
			</Hidden>

			{/* Drawer on big screens */}
			<Hidden xsDown>
				<Drawer
					anchor="left"
					variant="persistent"
					onClose={toggleDrawer(false)}
					open={open}
					classes={{ paper: classes.drawerPaper }}
					// classes={{ paper: clsx(open ? classes.drawerPaper : classes.drawerPaperClose) }}
				>
					{drawer}
				</Drawer>
			</Hidden>

			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<div className={classes.container}>
					<Container
						maxWidth="lg"
					>
						{children}

						<Zoom
							in={!open}
							timeout={transitionDuration}
							style={{
								transitionDelay: `${!open ? transitionDuration.exit : 0}ms`,
							}}
							unmountOnExit
						>
							<Fab className={classes.fab} onClick={toggleDrawer(true)}>
								<SvgIcon
									component={ChevronRightIcon}
									style={{ fill: 'transparent' }}
								/>
							</Fab>
						</Zoom>
					</Container>
				</div>
				<DefaultFooter />
			</main>
		</div>
	)
}

Layout.propTypes = {
	directories: PropTypes.array.isRequired,
	children: PropTypes.node,
}

export default Layout
