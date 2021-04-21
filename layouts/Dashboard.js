// import stylings
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '@/config/theme'

import React from 'react'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import SvgIcon from '@material-ui/core/SvgIcon'
import Zoom from '@material-ui/core/Zoom'
import Fab from '@material-ui/core/Fab'

// import custom components
import DefaultFooter from '@/layouts/components/DefaultFooter'

// import icons
import { MeyditLogoIcon } from '@/assets/meydit'
import { UserIcon } from '@/icons/user-interface'
import { ChevronRightIcon, ChevronLeftIcon } from '@/icons/arrows'
import { MessageSquareIcon } from '@/icons/communication/'
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
	},
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		minHeight: '100vh',
		minWidth: '300px',
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
	meyditLogo: {},
	companyName: {
		color: theme.palette.primary.contrastText,
	},
	icon: {
		width: '24px',
		height: 'auto',
		fill: 'transparent',
	},
	openButton: {
		height: '10%',
		display: 'block',
	},
	openButtonHidden: {
		display: 'none',
	},
	fab: {
		position: 'absolute',
		bottom: theme.spacing(4),
		left: theme.spacing(2),
		backgroundColor: theme.palette.primary.dark,
	},
}))

const Layout = (props) => {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)
	const toggleDrawer = (state) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return
		}

		setOpen(state)
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

	const transitionDuration = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen,
	}

	// The items in the list in the drawer
	const listItem = (icon, href, text) => {
		return (
			<ListItem button>
				<ListItemIcon>
					<SvgIcon component={icon} className={classes.icon} />
				</ListItemIcon>
				<ListItemText href={href} primary={text} />
			</ListItem>
		)
	}

	return (
		<div className={classes.root}>
			<CssBaseline />

			{/* The drawer */}
			<Drawer
				className={classes.drawerPaper}
				open={open}
				onClose={toggleDrawer(false)}
			>
				<div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
					{/* The close drawer button */}
					<div className={classes.toolbarIcon}>
						<IconButton onClick={toggleDrawer(false)}>
							<ChevronLeftIcon />
						</IconButton>
					</div>

					{/* The logo, name, and subtext */}
					<div>
						{/* The logo */}
						<Link href="/">
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
							listItem(item.icon, item.href, item.text)
						)}
					</List>
				</div>
			</Drawer>

			<Zoom
				in={!open}
				timeout={transitionDuration}
				style={{
					transitionDelay: `${!open ? transitionDuration.exit : 0}ms`,
				}}
				unmountOnExit
			>
				<Fab className={classes.fab}>
					<SvgIcon
						component={ChevronRightIcon}
						onClick={toggleDrawer(true)}
						style={{ fill: 'transparent' }}
					/>
				</Fab>
			</Zoom>

			<main className={classes.content}>
				<Container maxWidth="lg" className={classes.container}>
					{/* eslint-disable-next-line react/prop-types */}
					{props.children}
				</Container>
				<DefaultFooter />
			</main>
		</div>
	)
}

export default Layout
