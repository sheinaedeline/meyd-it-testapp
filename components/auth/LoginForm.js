/**
 * The email and password text fields in login screen
 */

import React from 'react'
// import stylings
import theme from '@/config/theme'
import { makeStyles } from '@material-ui/core/styles'
// import material ui components
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
// import custom components
import {
	EyeIcon,
	EyeOffIcon,
	LogInIcon,
} from '@/icons/user-interface'

const useStyles = makeStyles({
	formDiv: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
		justifySelf: 'center',
		alignItems: 'center',
	},
	emailField: {
		width: '90%',
		marginTop: theme.spacing(5),
		justifySelf: 'center',
	},
	passwordField: {
		width: '90%',
		marginTop: theme.spacing(3),
		justifySelf: 'center',
	},
	loginButton: {
		width: '90%',
		color: theme.palette.primary.light,
		marginBottom: theme.spacing(2),
		marginTop: theme.spacing(2),
	},
	loginIcon: {
		width: '10%',
		height: 'auto',
		marginLeft: theme.spacing(2),
	},
})

/**
 *
 * @returns The email and password text fields in login screen
 */
const LoginForm = () => {
	const classes = useStyles()
	const [data, setData] = React.useState({
		email: '',
		password: '',
		showPassword: false,
	})

	const toggleShowPassword = () => {
		const isShown = data.showPassword
		setData({
			...data,
			showPassword: !isShown,
		})
	}

	return (
		<div className={classes.formDiv}>
			{/* Email input */}
			<TextField
				variant="outlined"
				label="E-mail"
				value={data.email}
				onChange={(e) => {
					setData({
						...data,
						email: e.target.value,
					})
				}}
				placeholder="E-mail"
				color="primary"
				className={classes.emailField}
				InputLabelProps={{
					style: { color: theme.palette.primary.grey },
				}}
			/>

			{/* Password input */}
			<TextField
				variant="outlined"
				label="Password"
				type={data.showPassword ? 'text' : 'password'}
				value={data.password}
				onChange={(e) => {
					setData({
						...data,
						password: e.target.value,
					})
				}}
				placeholder="Password"
				color="primary"
				className={classes.passwordField}
				InputLabelProps={{
					style: { color: theme.palette.primary.grey },
				}}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								edge="end"
								style={{ width: '50px' }}
								onClick={() => toggleShowPassword()}
							>
								{data.showPassword
									? <EyeIcon />
									: <EyeOffIcon />
								}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>

			{/* Login Button */}
			<Button variant="contained" color="primary" className={classes.loginButton} disableElevation>
						LOG IN
				<LogInIcon className={classes.loginIcon} />
			</Button>
		</div>
	)
}

export default LoginForm
