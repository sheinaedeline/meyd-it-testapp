/** These are the text boxes for the second part of the new projects page.
 * There are three sections: The date, the cost and the location.
*/

import 'date-fns'
import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import theme from '@/config/theme'
import { makeStyles } from '@material-ui/core/styles/'

import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers'
// import MuiPickersUtilsProvider from '@material-ui/pickers/MuiPickersUtilsProvider'
// import KeyboardDatePicker from '@material-ui/pickers/KeyboardDatePicker'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SvgIcon from '@material-ui/core/SvgIcon'

import DollarSignIcon from '@/assets/icons/commerce/dollar-sign.svg'
import MapPinIcon from '@/assets/icons/location/map-pin.svg'
import CalendarIcon from '@/assets/icons/time/calendar.svg'

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	grid: {
		margin: '0 auto',
		width: '97%',
	},
	number: {
		'& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
			'-webkit-appearance': 'none',
			margin: 0,
		},
		width: '98%',
	},
	input: {
		'&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
			'-webkit-appearance': 'none',
			margin: 0,
		},
	},
	margin: {
		margin: theme.spacing(1),
	},
	TextField: {
		width: '98%',
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
				<Grid item xs={12} sm={4}>
					{/* This is the first textBox. This details the date the garment is needed by */}
					<KeyboardDatePicker
						disablePast
						inputVariant="outlined"
						label="Date"
						InputLabelProps={{
							style: { color: theme.palette.primary.grey },
						}}
						className={classes.TextField}
						format="dd/MM/yyyy"
						margin="0 auto"
						placeholder="Due Date"
						id="date-picker-inline"
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
						variant="inline"
						keyboardIcon={<SvgIcon>
							<CalendarIcon style={{ color: theme.palette.grey }} />
						</SvgIcon>}
					/>
				</Grid>

				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						id="outlined-static"
						placeholder="Start from $500"
						type="number"
						min='0'
						className={classes.number}
						label="Budget"
						InputLabelProps={{
							style: { color: theme.palette.primary.grey },
						}}
						InputProps={{
							endAdornment:
								<InputAdornment position="start">
									<SvgIcon>
										<DollarSignIcon style={{ color: theme.palette.primary.grey }} />
									</SvgIcon>
								</InputAdornment>,
						}}
					/>
				</Grid>

				<Grid item xs={12} sm={4}>
					<TextField
						variant="outlined"
						id="component-outlined"
						placeholder="We can match you"
						label="Location"
						className={classes.TextField}
						InputLabelProps={{
							style: { color: theme.palette.primary.grey },
						}}
						InputProps={{
							endAdornment:
								<InputAdornment position="start">
									<SvgIcon>
										<MapPinIcon style={{ color: theme.palette.primary.grey }} />
									</SvgIcon>
								</InputAdornment>,
						}}
					/>
				</Grid>
			</Grid>
		</MuiPickersUtilsProvider>
	)
}
