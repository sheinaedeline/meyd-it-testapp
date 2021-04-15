// The page that shows the full details of the selected client project

/* eslint-disable react/prop-types */

// import styling
import theme from '@/config/theme'
import { makeStyles } from '@material-ui/core/styles'

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'

// import custom components
import Layout from '@/layouts/Dashboard'

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
const Index = (props) => {
	const classes = useStyles()
	const notification = true

	return (
		<Layout>
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
				<Grid item xs={12}>
					{props.children}
				</Grid>
			</Grid>
		</Layout>
	)
}

export default Index
