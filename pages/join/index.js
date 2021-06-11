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
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// import Icons
import {
	MeyditLogoIcon,
	MeyditLogoLightIcon,
} from '@/assets/meydit'

const cardHeight = '70vh'

const useStyles = makeStyles({
	gridContainer: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: theme.spacing(2),
	},
	gridItem: {
		padding: theme.spacing(2),
	},
	logo: {
		maxWidth: '150px',
		height: 'auto',
	},
	purpleCard: {
		minHeight: cardHeight,
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
		minHeight: cardHeight,
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
	},
	purpleButton: {
		margin: theme.spacing(2),
		color: '#fff',
		backgroundColor: theme.palette.primary.main,
	},
	cardActionArea: {
		height: cardHeight,
		[theme.breakpoints.down('sm')]: {
			height: '50vh',
		},
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: '100%',
	},
	loginDiv: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: theme.spacing(2),
	},
	loginButton: {
		display: 'flex',
		// flex: 1,
	},
})

const Index = () => {
	const classes = useStyles()

	return (
		<Layout>
			<div>
				<Grid container className={classes.gridContainer}>
					{/* The client login */}
					<Grid item xs={12} md={3} className={classes.gridItem}>
						<Card square elevation={0} className={classes.purpleCard}>
							<CardActionArea className={classes.cardActionArea} href="/join/client">
								<MeyditLogoLightIcon className={classes.logo} />
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
							<CardActionArea className={classes.cardActionArea} href="/join/creative">
								<MeyditLogoIcon className={classes.logo} />
								<Button variant="contained" disableElevation className={classes.purpleButton}>
								I'M A CREATIVE
								</Button>
								<Typography color="inherit">
								I CAN MAKE THINGS
								</Typography>
							</CardActionArea>
						</Card>
					</Grid>
					<div className={classes.loginDiv}>
						<Typography style={{ color: theme.palette.primary.contrastText, paddingTop: theme.spacing(1) }}>
					Already have an account?
						</Typography>
						<Button className={classes.loginButton} href="/login">LOG BACK IN</Button>
					</div>
				</Grid>
			</div>
		</Layout>
	)
}

export default Index
