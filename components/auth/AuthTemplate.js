// The whole page template for the auth pages

import React from 'react'
import PropTypes from 'prop-types'
// import stylings
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import material ui components
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
// import custom components
import Layout from '@/layouts/Auth'
import SignUpForm from '@/components/auth/SignUpForm'

const useStyles = makeStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	darkWelcomeText: {
		color: theme.palette.primary.light,
		fontWeight: 'bold',
		width: '60%',
	},
	lightWelcomeText: {
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		width: '60%',
	},
})

/**
 *
 * @param {bool} dark - Should this page be in dark mode or not
 * @param {string} title - The header title of the page
 * @returns The signup form with the complete layout
 */
const AuthTemplate = ({ dark, title }) => {
	const classes = useStyles()

	return (
		<Layout dark={dark}>
			<Grid container className={classes.container}>
				<Grid item lg={7} xs={12}>
					<SignUpForm dark={dark} title={title} />
				</Grid>

				<Hidden mdDown>
					<Grid item xs={5}>
						<Typography
							className={clsx(dark ? classes.darkWelcomeText : classes.lightWelcomeText)}
							variant="h2">
							Welcome to Meyd.It
						</Typography>
					</Grid>
				</Hidden>
			</Grid>
		</Layout>
	)
}

AuthTemplate.propTypes = {
	dark: PropTypes.bool,
	title: PropTypes.string.isRequired,
}

export default AuthTemplate
