import React from 'react'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import material ui components
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	card: {
		width: '50%',
		minWidth: '350px',
		alignSelf: 'center',
	},
	cardContent: {
		height: '100%',
		padding: theme.spacing(5),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		margin: theme.spacing(3),
	},
	text: {
		color: theme.palette.primary.main,
		textAlign: 'center',
		margin: theme.spacing(3),
	},
	button: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.light,
		width: '100%',
		margin: theme.spacing(3),
	},
})

const SuccessCard = () => {
	const classes = useStyles()

	return (
		<Card className={classes.card} elevation={0}>
			<CardContent className={classes.cardContent}>
				<Typography variant="h5" className={classes.title}>
				Account creation successful
				</Typography>

				<Typography className={classes.text}>
				Your account has been created. <br />
				Thank you for registering with Meyd.It. <br />
				Please check your email for account validation. <br />
				</Typography>

				<Button variant="contained" disableElevation className={classes.button}>
				OK
				</Button>
			</CardContent>
		</Card>
	)
}

export default SuccessCard
