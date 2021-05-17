import Link from '@material-ui/core/Link'
import Image from 'material-ui-image'

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import { MeyditLogoIcon } from '@/assets/meydit'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		width: '240px',
		flexShrink: 0,
	},
	drawerPaper: {
		width: '240px',
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	},
	centered: {
		textAlign: 'center',
		display: 'block',
		margin: '0 auto',
	},
	icon: {
		width: '24px',
		height: '24px',
		background: 'transparent',
		margin: '0 auto',
		display: 'block',
	},
	listItem: {
		height: '30px',
		width: '240px',
		borderRadius: '4px',
	},
}))

export default function PermanentDrawerLeft() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<CssBaseline />

			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor="left"
			>
				<div
					className={classes.toolbar}
					style={{
						width: '20vh',
						height: '30vh',
						margin: '0 auto',
					}}
				>
					<Link href="/client">
						<MeyditLogoIcon />

						<Typography
							classes={{ root: classes.centered }}
							style={{
								color: '#000000',
								fontSize: '16px',
							}}
						>
							<b>Meydit</b>
						</Typography>
					</Link>
					<Typography
						color="initial"
						classes={{ root: classes.centered }}
						style={{
							fontSize: '12px',
						}}
					>
						Subtext
					</Typography>
				</div>

				<List>
					<ListItem button className={classes.listItem}>
						<ListItemIcon>
							<Image
								src="/account_circle.svg"
								className={classes.icon}
								style={{
									width: '24px',
									background: 'transparent',
								}}
							/>
						</ListItemIcon>
						<ListItemText primary={'User Name'} />
					</ListItem>
					<Link href="/client/makings">
						<ListItem button className={classes.listItem}>
							<ListItemIcon>
								<Image
									src="/grid_on.svg"
									className={classes.icon}
									style={{
										width: '24px',
										background: 'transparent',
									}}
								/>
							</ListItemIcon>
							<ListItemText primary={'MY MAKINGS'} />
						</ListItem>
					</Link>
					<ListItem button className={classes.listItem}>
						<ListItemIcon>
							<Image
								src="/message.svg"
								className={classes.icon}
								style={{
									width: '24px',
									background: 'transparent',
								}}
							/>
						</ListItemIcon>
						<ListItemText primary={'MESSAGES'} />
					</ListItem>
				</List>
				<Divider />
			</Drawer>
		</div>
	)
}
