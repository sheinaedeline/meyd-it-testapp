import React from 'react'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import material ui components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
// import custom components
import Layout from '@/layouts/Auth'
import SignUpForm from '@/components/auth/SignUpForm'

const useStyles = makeStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100vw',
	},
	welcomeText: {
		color: theme.palette.primary.light,
		fontWeight: 'bold',
		width: '60%',
	},
})

const Index = () => {
	const classes = useStyles()

	return (
		<Layout>
			<Grid container className={classes.container}>
				<Grid item lg={7} xs={12}>
					<SignUpForm title="Client" />
				</Grid>

				<Hidden mdDown>
					<Grid item xs={5}>
						<Typography className={classes.welcomeText} variant="h2">
							Welcome to Meyd.It
						</Typography>
					</Grid>
				</Hidden>
			</Grid>
		</Layout>
	)
}

export default Index
