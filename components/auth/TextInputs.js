// The text fields for the auth page including form validation features

import React from 'react'
import PropTypes from 'prop-types'
// import styling
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import material ui components
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
// import routing
import { useRouter } from 'next/router'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textField: {
		paddingBottom: theme.spacing(2),
		width: '100%',
		'& > *': {
			color: theme.palette.primary.main,
		},
	},
	button: {
		width: '100%',
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.light,
		padding: theme.spacing(1),
	},
})

/**
 *
 * @returns The text fields for the auth page including form validation features
 */
const TextInputs = ({ userType }) => {
	const classes = useStyles()
	const router = useRouter()

	const [data, setData] = React.useState({
		firstName: '',
		lastName: '',
		email: '',
		confirmEmail: '',
		password: '',
		confirmPassword: '',
	})

	const [error, setError] = React.useState({
		firstName: false,
		firstNameMessage: '',
		lastName: false,
		lastNameMessage: '',
		email: false,
		emailMessage: '',
		confirmEmail: false,
		confirmEmailMessage: '',
		password: false,
		passwordMessage: '',
		confirmPassword: false,
		confirmPasswordMessage: '',
		noErrors: false,
	})

	const fields = [
		{
			id: 'firstName',
			name: 'First name',
			data: data.firstName,
			error: error.firstName,
			errorMessage: error.firstNameMessage,
		},
		{
			id: 'lastName',
			name: 'Last name',
			data: data.lastName,
			error: error.lastName,
			errorMessage: error.lastNameMessage,
		},
		{
			id: 'email',
			name: 'Email',
			data: data.email,
			error: error.email,
			errorMessage: error.emailMessage,
		},
		{
			id: 'confirmEmail',
			name: 'Confirm email',
			data: data.confirmEmail,
			error: error.confirmEmail,
			errorMessage: error.confirmEmailMessage,
		},
		{
			id: 'password',
			name: 'Password',
			type: 'password',
			data: data.password,
			error: error.password,
			errorMessage: error.passwordMessage,
		},
		{
			id: 'confirmPassword',
			name: 'Confirm password',
			type: 'password',
			data: data.confirmPassword,
			error: error.confirmPassword,
			errorMessage: error.confirmPasswordMessage,
		},
	]

	const errorMessages = {
		emptyField: 'Please fill out this field',
		cannotConfirm: 'This does not match the previous entry',
		invalidEntry: 'Input is invalid',
		invalidPasswordLength: 'Password must have at least 8 characters',
	}

	const validateData = () => {
		setError({
			...error,
			// First name
			firstName: data.firstName.length < 1,
			firstNameMessage: [data.firstName.length < 1 ? errorMessages.emptyField : ''],

			// Last name
			lastName: data.lastName.length < 1,
			lastNameMessage: [data.lastName.length < 1 ? errorMessages.emptyField : ''],

			// Email
			email:
				data.email.length < 1 ||
					(data.email.length < 8 || !/[@]/g.test(data.email) || !/[.com]/.test(data.email)),
			emailMessage:
				[data.email.length < 1
					? errorMessages.emptyField
					: ((data.email.length < 8 || !/[@]/g.test(data.email) || !/[.com]/.test(data.email))
						? errorMessages.invalidEntry
						: '')],

			// Email confirmation
			confirmEmail:
				data.confirmEmail.length < 1 ||
					data.confirmEmail !== data.email,
			confirmEmailMessage:
				[data.confirmEmail.length < 1
					? errorMessages.emptyField
					: (data.confirmEmail !== data.email
						? errorMessages.cannotConfirm
						: '')],

			// Password
			password:
				data.password.length < 1 ||
					data.password.length < 9,
			passwordMessage:
				[data.password.length < 1
					? errorMessages.emptyField
					: (data.password.length < 9
						? errorMessages.invalidPasswordLength
						: '')],

			// Password confirmation
			confirmPassword:
				data.confirmPassword.length < 1 ||
					data.confirmPassword !== data.password,
			confirmPasswordMessage:
				[data.confirmPassword.length < 1
					? errorMessages.emptyField
					: (data.confirmPassword !== data.password
						? errorMessages.cannotConfirm
						: '')],

			noErrors: !error.firstName && !error.lastName &&
			!error.email && !error.confirmEmail && !error.password && !error.confirmPassword,
		})

		goToSuccess()
	}

	const goToSuccess = () => {
		const uri = '/join/' + userType + '/success'
		if (error.noErrors) {
			router.push(uri)
		}
	}

	const handleChange = (event) => {
		const { id, value } = event.target
		setData({
			...data,
			[id]: value,
		})
	}

	return (
		<div className={classes.root}>
			{fields.map((item, i) => (
				<FormControl key={i} variant="outlined" className={classes.textField} required error={item.error}>
					<InputLabel >{item.name}</InputLabel>
					<OutlinedInput
						id={item.id}
						type={item.type ? item.type : 'text'}
						value={item.data}
						onChange={handleChange}
						label={item.name}
					/>
					<FormHelperText>{item.errorMessage}</FormHelperText>
				</FormControl>
			))}
			<Button variant="contained" disableElevation className={classes.button}
				onClick={validateData}>
        SUBMIT
			</Button>
		</div>
	)
}

TextInputs.propTypes = {
	userType: PropTypes.oneOf(['client', 'creative']).isRequired,
}

export default TextInputs
