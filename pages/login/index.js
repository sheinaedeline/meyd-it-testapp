import React from 'react'
// import stylings
import theme from '@/config/theme'
import { makeStyles } from '@material-ui/core/styles'
// import material ui components
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
// import custom components
import AuthLayout from '@/layouts/Auth'
import LoginForm from '@/components/auth/LoginForm'
import { MeyditLogoLightIcon } from '@/assets/meydit'
import {
	FacebookIcon,
	TwitterIcon,
} from '@/icons/brands'

const useStyles = makeStyles({
	formDiv: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
		justifySelf: 'center',
		alignItems: 'center',
	},
	meyditLogo: {
		width: '10%',
		height: 'auto',
		minWidth: '80px',
		alignSelf: 'flex-start',
		marginBottom: theme.spacing(1),
	},
	paper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		width: '30vw',
		[theme.breakpoints.down('sm')]: {
			width: '50vw',
		},
		[theme.breakpoints.down('xs')]: {
			width: '80vw',
		},
	},
	dividerDiv: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	divider: {
		width: '38%',
	},
	orText: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		color: theme.palette.primary.contrastText,
	},
	socialsDiv: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	socialIcon: {
		width: '18%',
		height: 'auto',
		margin: theme.spacing(2),
		minWidth: '60px',
	},
	createAccountButton: {
		margin: theme.spacing(2),
	},
})

const Index = () => {
	const classes = useStyles()

	return (
		<AuthLayout dark={true}>
			<div className={classes.formDiv}>
				<MeyditLogoLightIcon className={classes.meyditLogo} />
				<Paper className={classes.paper} elevation={0}>
					<LoginForm />

					{/* Divider */}
					<div className={classes.dividerDiv}>
						<Divider className={classes.divider} />
						<Typography variant="caption" className={classes.orText}>
							or
						</Typography>
						<Divider className={classes.divider} />
					</div>

					{/* Social media icons */}
					<div className={classes.socialsDiv}>
						<IconButton className={classes.socialIcon}>
							<FacebookIcon style={{ width: '100%' }} />
						</IconButton>

						<IconButton className={classes.socialIcon}>
							<TwitterIcon style={{ width: '100%' }} />
						</IconButton>
					</div>

					{/* Divider */}
					<div className={classes.dividerDiv}>
						<Divider className={classes.divider} />
						<Typography variant="caption" className={classes.orText}>
							or
						</Typography>
						<Divider className={classes.divider} />
					</div>

					<Button variant="text" className={classes.createAccountButton} href="/join">
						CREATE A NEW ACCOUNT
					</Button>
				</Paper>
			</div>
		</AuthLayout>
	)
}

export default Index
