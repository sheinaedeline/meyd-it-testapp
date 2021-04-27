// The due date, budget, and location input fields

/* eslint-disable react/prop-types */
import React from 'react'

// import stylings
import { makeStyles } from '@material-ui/core'
import theme from '@/config/theme'

import DateFnsUtils from '@date-io/date-fns'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers'

// import custom components
import { DollarSignIcon } from '@/icons/commerce'
import { MapPinIcon } from '@/icons/location'

const useStyles = makeStyles({
	formHelperText: {
		color: theme.palette.primary.contrastText,
	},
	inputFields: {
		maxWidth: '95%',
		minWidth: '80%',
	},
	icon: {
		height: '25px',
	},
})

const InputFields = ({ making, disabled }) => {
	const classes = useStyles()

	// Date picker functionalities
	const curr = new Date()
	curr.setDate(curr.getDate())
	const selectedDate = new Date(curr)

	const budget = '$' + making.budget

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container style={{ alignItems: 'center' }}>
				{/* The due date */}
				<Grid item xs={12} md={4}>
					<KeyboardDatePicker
						className={classes.inputFields}
						disabled={disabled}
						inputVariant="outlined"
						variant="inline"
						format="dd/MM/yyyy"
						id="date-picker-inline"
						value={selectedDate}
					/>
					<FormHelperText className={classes.formHelperText}>Due Date</FormHelperText>
				</Grid>

				{/* The budget */}
				<Grid item xs={12} md={4}>
					<FormControl
						className={classes.inputFields}
						disabled={disabled}
						variant="outlined"
					>
						<OutlinedInput
							value={budget}
							endAdornment={
								<InputAdornment position="start">
									<DollarSignIcon className={classes.icon} />
								</InputAdornment>
							}
						/>
					</FormControl>
					<FormHelperText className={classes.formHelperText}>Budget</FormHelperText>
				</Grid>

				{/* The location */}
				<Grid item xs={12} md={4}>
					<FormControl
						className={classes.inputFields}
						disabled={disabled}
						variant="outlined"
					>
						<OutlinedInput
							value={making.location}
							endAdornment={
								<InputAdornment position="start">
									<MapPinIcon className={classes.icon} />
								</InputAdornment>
							}
						/>
					</FormControl>
					<FormHelperText className={classes.formHelperText}>Location</FormHelperText>
				</Grid>
			</Grid>
		</MuiPickersUtilsProvider>
	)
}

export default InputFields
