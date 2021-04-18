// The layout for the dashboard that shows the drawer and footer

// import stylings
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '@/config/theme'

import React from 'react'
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
import { UserIcon } from '@/icons/user-interface'
import {
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@/icons/arrows'
import { MessageSquareIcon } from '@/icons/communication'
import { GridIcon } from '@/icons/layouts'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		fill: 'transparent',
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		maxWidth: '100%',
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
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		overflow: 'hidden hidden',
	},
	container: {
		padding: theme.spacing(4),
		minHeight: '100vh',
		display: 'flex',
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
}))

const Layout = (props) => {
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

	// The list of directories
	const directories = [
		{
			icon: UserIcon,
			href: '/Index',
			text: 'User Name',
		},
		{
			icon: GridIcon,
			href: '',
			text: 'My Makings',
		},
		{
			icon: MessageSquareIcon,
			href: '/Index',
			text: 'Messages',
		},
	]

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
		<div className={classes.content}>
			{/* The close drawer button */}
			<div className={classes.toolbarIcon}>
				<IconButton onClick={toggleDrawer(false)}>
					<ChevronLeftIcon />
				</IconButton>
			</div>

			{/* The logo, name, and subtext */}
			<div>
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
					variant="permanent"
					open={open}
					classes={{ paper: clsx(open ? classes.drawerPaper : classes.drawerPaperClose) }}
				>
					{drawer}
				</Drawer>
			</Hidden>

			<main className={classes.content}>
				<div className={classes.container}>
					{/* eslint-disable-next-line react/prop-types */}
					{props.children}

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
				</div>
				<DefaultFooter />
			</main>
		</div>
	)
}

export default Layout
