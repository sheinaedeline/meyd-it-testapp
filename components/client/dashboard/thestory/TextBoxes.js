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
	OutlinedInput,
	InputAdornment,
	SvgIcon,
} from '@material-ui/core'

import DollarSignIcon from '@/assets/icons/commerce/dollar-sign.svg'
import MapPinIcon from '@/assets/icons/location/map-pin.svg'
import CalendarIcon from '@/assets/icons/time/calendar.svg'

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
		// color: '#00000061',
		color: '#000000',
	},
	number: {
		'& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
			'-webkit-appearance': 'none',
			margin: 0,
		},
	},
	input: {
		'&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
			'-webkit-appearance': 'none',
			margin: 0,
		},
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
								<CalendarIcon style={{ color: '#00000061' }} />
							</SvgIcon>}
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
					<FormControl variant="outlined">
						<OutlinedInput
							id="component-outlined"
							placeholder="Budget"
							type="number"
							min='0'
							className={classes.number}
							// inputProps={{ className: classes.input }}
							endAdornment={
								<InputAdornment position="start">
									<SvgIcon>
										<DollarSignIcon style={{ color: '#00000061' }} />
									</SvgIcon>
								</InputAdornment>
							}
						/>
						<FormHelperText
							id="component-helper-text"
							className={classes.helperText}
						>
							Typically starting at $500 (numbers only)
						</FormHelperText>
					</FormControl>
				</Grid>

				<Grid item xs>
					<FormControl variant="outlined">
						<OutlinedInput
							id="component-outlined"
							placeholder="Location"
							endAdornment={
								<InputAdornment position="start">
									<SvgIcon>
										<MapPinIcon style={{ color: '#00000061' }} />
									</SvgIcon>
								</InputAdornment>
							}
						/>
						<FormHelperText
							id="component-helper-text"
							className={classes.helperText}
						>
							We can match you with the closest creatives
						</FormHelperText>
					</FormControl>
				</Grid>
			</Grid>
		</MuiPickersUtilsProvider>
	)
}
