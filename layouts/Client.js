import React from 'react'
import PropTypes from 'prop-types'
// import styling
import theme from '@/config/theme'
import { makeStyles } from '@material-ui/core/styles'
// import material ui components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
// import custom components
import Layout from '@/layouts/Dashboard'
// import icons
import { MessageSquareIcon } from '@/icons/communication'
import { GridIcon } from '@/icons/layouts'
import { UserIcon } from '@/icons/user-interface'

// The list of directories for the dashboard drawer
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

const useStyles = makeStyles({
	appBar: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: theme.spacing(1),
		backgroundColor: theme.palette.primary.light,
		width: '100%',
	},
	notificationText: {
		color: theme.palette.primary.contrastText,
		flexGrow: 1,
	},
	button: {
		position: 'relative',
	},
})

const ClientLayout = ({ children }) => {
	const classes = useStyles()
	const notification = true

	return (
		<Layout directories={directories}>
			<Grid container>

				{/* If there is a notification, show notification appbar */}
				{notification
					? (
						<Grid item xs={12}>
							<AppBar position="static" className={classes.appBar} elevation={0}>
								<Typography className={classes.notificationText}>
							A notification from Meydit
								</Typography>
								<Button className={classes.button}>ACTION</Button>
							</AppBar>
						</Grid>
					)
					: null}
				<Grid item xs={12} style={{ marginTop: theme.spacing(2) }}>
					{children}
				</Grid>
			</Grid>
		</Layout>
	)
}

ClientLayout.propTypes = {
	children: PropTypes.node,
}

export default ClientLayout
