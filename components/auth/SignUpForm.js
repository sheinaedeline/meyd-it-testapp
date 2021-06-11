// The header and form card in the auth page

import React from 'react'
import PropTypes from 'prop-types'
// import stylings
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import material ui components
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
// import custom components
import {
	MeyditLogoIcon,
	MeyditLogoLightIcon,
} from '@/assets/meydit/'
import { FacebookIcon } from '@/icons/brands'
import { MailIcon } from '@/icons/communication'
import TextInputs from './TextInputs'

const useStyles = makeStyles({
	gridContainer: {
		minHeight: '100vh',
		width: '60vw',
		minWidth: '400px',
		[theme.breakpoints.up('md')]: {
			paddingLeft: '10vw',
		},
		[theme.breakpoints.down('md')]: {
			width: '90vw',
		},
		[theme.breakpoints.down('sm')]: {
			width: '100vw',
			minWidth: '100vw',
		},
	},
	titleDiv: {
		display: 'flex',
		flexDirection: 'row',
		color: theme.palette.primary.light,
		alignItems: 'center',
		height: '100%',
		width: '200%',
	},
	logo: {
		height: 'auto',
		width: '100px',
		minWidth: '80px',
		margin: theme.spacing(3),
	},
	darkTitle: {
		color: theme.palette.primary.light,
		fontSize: '3.5em',
		[theme.breakpoints.down('md')]: {
			fontSize: '3em',
		},
	},
	lightTitle: {
		color: theme.palette.primary.main,
		fontSize: '3.5em',
		[theme.breakpoints.down('md')]: {
			fontSize: '3em',
		},
	},
	card: {
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.primary.main,
		padding: theme.spacing(6),
		paddingLeft: theme.spacing(8),
		minHeight: '88vh',
		[theme.breakpoints.down('sm')]: {
			minHeight: '88.5vh',
		},
		[theme.breakpoints.down('xs')]: {
			width: '100vw',
		},
	},
	formTitle: {
		fontWeight: 'bold',
		marginBottom: theme.spacing(2),
	},
	formDiv: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
	},
	saveTimeDiv: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: theme.spacing(4),
	},
	iconsDiv: {
		display: 'flex',
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'flex-end',
		width: '100%',
		flex: 1,
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
	iconButton: {
		paddingLeft: theme.spacing(3),
	},
	icon: {
		height: '30px',
		minHeight: '30px',
		width: 'auto',
	},
})

/**
 *
 * @param {bool} dark - Dark mode or not
 * @param {string} title - The header title above the form
 * @returns The header title and sign up card
 */
const SignUpForm = ({ dark, title }) => {
	const classes = useStyles()

	return (
		<div>
			<Grid container direction='column' className={classes.gridContainer}>
				<Grid item xs={2}>
					<div className={classes.titleDiv}>
						{dark
							? <MeyditLogoLightIcon className={classes.logo} />
							: <MeyditLogoIcon className={classes.logo}/>
						}
						<Typography
							className={clsx(dark ? classes.darkTitle : classes.lightTitle)}
						>
							{title}
						</Typography>
					</div>
				</Grid>

				<Grid item xs={10}>
					<Card className={classes.card} elevation={0}>
						{/* form title */}
						<Typography variant="h5" className={classes.formTitle}>Create an account</Typography>

						<div className={classes.formDiv}>

							{/* save time text */}
							<div className={classes.saveTimeDiv}>

								<Typography>Save time and create account with:</Typography>

								{/* icons */}
								<div className={classes.iconsDiv}>
									<IconButton size="small" color="primary" className={classes.iconButton}>
										<FacebookIcon className={classes.icon} />
									</IconButton>
									<IconButton size="small" color="primary" className={classes.iconButton}>
										<MailIcon className={classes.icon}/>
									</IconButton>
								</div>
							</div>

							{/* User inputs and submit button */}
							<TextInputs userType={dark ? 'client' : 'creative'}/>
						</div>
					</Card>
				</Grid>
			</Grid>
		</div>
	)
}

SignUpForm.propTypes = {
	dark: PropTypes.bool,
	title: PropTypes.string.isRequired,
}

export default SignUpForm
