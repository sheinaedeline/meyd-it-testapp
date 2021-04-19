import 'date-fns'
import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { makeStyles } from '@material-ui/core/styles'

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

import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import LocationOnIcon from '@material-ui/icons/LocationOn'

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
}))

export default function TextBoxes() {
	const classes = useStyles()
	var curr = new Date()
	curr.setDate(curr.getDate())

	// The first commit of Material-UI
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
				style={{ margin: '0 auto', width: '96%' }}
			>
				<Grid item xs>
					<div>
						{/*This is the first textBox. This details the date the garment is needed by*/}
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
							style={{ marginLeft: '10px' }}
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
							endAdornment={
								<InputAdornment position="start">
									<AttachMoneyIcon />
								</InputAdornment>
							}
						/>
						<FormHelperText id="component-helper-text">
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
									<LocationOnOutlinedIcon />
								</InputAdornment>
							}
						/>
						<FormHelperText id="component-helper-text">
							So we can match you with the closest creative in your location
						</FormHelperText>
					</FormControl>
				</Grid>
			</Grid>
		</MuiPickersUtilsProvider>
	)
}
