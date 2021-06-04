/** These are the text boxes for the second part of the new projects page.
 * There are three sections: The date, the cost and the location.
*/

import 'date-fns'
import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from '@material-ui/core/styles'

import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers'
import {
	Grid,
	FormControl,
	FormHelperText,
	Input,
	OutlinedInput,
	InputAdornment,
} from '@material-ui/core'

import {
	ValidatorForm,
	TextValidator,
} from 'react-material-ui-form-validator'

import { DollarSignIcon } from '@/assets/icons/commerce'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
	grid: {
		margin: '0 auto',
		width: '96%',
	},
	helperText: {
		marginLeft: '10px',
		color: theme.palette.primary.main,
		fontFamily: 'sans-serif',
	},
	icon: {
		color: '#00000061',
	},
}))

export default function TextBoxes () {
	const classes = useStyles()
	const curr = new Date()
	curr.setDate(curr.getDate())

	const [selectedDate, setSelectedDate] = React.useState(new Date(curr))

	const handleDateChange = (date) => {
		setSelectedDate(date)
	}

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid
				container
				spacing={3}
				justify="space-around"
				className={classes.grid}
			>
				<Grid item xs>
					<div>
						{/* This is the first textBox. This details the date the garment is needed by */}
						<KeyboardDatePicker
							disablePast
							inputVariant="outlined"
							variant="inline"
							format="dd/MM/yyyy"
							margin="0 auto"
							placeholder="Due Date"
							id="date-picker-inline"
							value={selectedDate}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
						/>
						<FormHelperText
							id="component-helper-text"
							className={classes.helperText}
						>
							The exact date you need the garment by.
						</FormHelperText>
					</div>
				</Grid>

				<Grid item xs>
					<ValidatorForm>
						<TextValidator validators={['minNumber: 0', 'matchRegexp:^[0-9]$']} />
					</ValidatorForm>
					<br />
					<br />
					<FormControl variant="outlined">
						<OutlinedInput
							id="component-outlined"
							placeholder="Budget"
							endAdornment={
								<InputAdornment position="start">
									<AttachMoneyIcon className={classes.icon} />
								</InputAdornment>
							}
						/>
						<FormHelperText
							id="component-helper-text"
							className={classes.helperText}
						>
							Typically starting at $500
						</FormHelperText>
					</FormControl>
				</Grid>

				<Grid item xs={3}>
					<FormControl variant="outlined">
						<OutlinedInput
							id="component-outlined"
							placeholder="Location"
							endAdornment={
								<InputAdornment position="start">
									<LocationOnOutlinedIcon className={classes.icon} />
								</InputAdornment>
							}
						/>
						<FormHelperText
							id="component-helper-text"
							className={classes.helperText}
						>
							So we can match you with the closest creative in your location
						</FormHelperText>
					</FormControl>
				</Grid>
			</Grid>
		</MuiPickersUtilsProvider>
	)
}
