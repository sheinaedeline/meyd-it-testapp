/* eslint-disable react/no-unescaped-entities */
import React from 'react'
// import Stylings
import {
	makeStyles,
} from '@material-ui/core/styles'
import theme from '@/config/theme'
// import Layout
import Layout from '@/layouts/Default'
// import MUI components
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
// import Icons
import { MeyditLogoIcon } from '@/assets/meydit'

const useStyles = makeStyles({
	gridContainer: {
		minHeight: 'calc(100vh - 64px)',
		[theme.breakpoints.down('sm')]: {
			minHeight: 'calc(100vh - 54px)',
		},
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	gridItem: {
		padding: theme.spacing(2),
	},
	logo: {
		maxWidth: '200px',
		height: 'auto',
	},
	purpleCard: {
		height: '80vh',
		[theme.breakpoints.down('sm')]: {
			height: '50vh',
		},
		padding: theme.spacing(2),
		flexDirection: 'column',
		display: 'flex',
		justifyContent: 'center',
		color: theme.palette.primary.light,
		backgroundColor: theme.palette.primary.main,
	},
	whiteButton: {
		margin: theme.spacing(2),
		color: '#000',
		backgroundColor: theme.palette.primary.light,
	},
	whiteCard: {
		height: '79.5vh',
		[theme.breakpoints.down('sm')]: {
			height: '50vh',
		},
		padding: theme.spacing(2),
		flexDirection: 'column',
		display: 'flex',
		justifyContent: 'center',
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.primary.light,
		borderColor: theme.palette.primary.main,
		marginTop: theme.spacing(4),
	},
	purpleButton: {
		margin: theme.spacing(2),
		color: '#fff',
		backgroundColor: theme.palette.primary.main,
	},
	cardActionArea: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '100%',
	},
})

const Index = () => {
	const classes = useStyles()

	return (
		<Layout>
			<Grid container className={classes.gridContainer}>
				{/* The client login */}
				<Grid item xs={12} md={3} className={classes.gridItem}>
					<Card square elevation={0} className={classes.purpleCard}>
						<CardActionArea className={classes.cardActionArea} href="/auth/client">
							<MeyditLogoIcon className={classes.logo} />
							<Button variant="contained" disableElevation className={classes.whiteButton}>
								I'M A CLIENT
							</Button>
							<Typography color="inherit">
								I NEED SOMETHING MADE
							</Typography>
						</CardActionArea>
					</Card>
				</Grid>

				{/* The creative login */}
				<Grid item xs={12} md={3} className={classes.gridItem}>
					<Card square elevation={0} className={classes.whiteCard} variant="outlined">
						<CardActionArea className={classes.cardActionArea} href="/auth/creative">
							<MeyditLogoIcon className={classes.logo} />
							<Button variant="contained" disableElevation className={classes.purpleButton}>
								I'M A CREATIVE
							</Button>
							<Typography color="inherit">
								I CAN MAKE THINGS
							</Typography>
						</CardActionArea>
					</Card>
					<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
						<Typography style={{ color: theme.palette.primary.contrastText, paddingTop: theme.spacing(1) }}>
					Already have an account?
						</Typography>
						<Button>LOG BACK IN</Button>
					</div>
				</Grid>
			</Grid>

		</Layout>
	)
}

export default Index
