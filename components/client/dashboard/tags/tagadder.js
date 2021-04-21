import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: '95%',
		maxWidth: '95%',
		inline: 'block',
	},
	chips: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	chip: {
		margin: 2,
	},
	noLabel: {
		marginTop: theme.spacing(3),
	},
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
}

const tags = [
	'Bohemian',
	'Size Positive',
	'School Graduation',
	'Princess',
	'Vintage',
	'Adaptive',
]

function getStyles(name, personName, theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	}
}

export default function MultipleSelect() {
	const classes = useStyles()
	const theme = useTheme()
	const [personName, setPersonName] = React.useState([])

	const handleChange = (event) => {
		setPersonName(event.target.value)
	}
	const handleDelete = () => {
		console.info('You clicked the delete icon.')
	}

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
				<Select
					labelId="demo-mutiple-chip-label"
					id="demo-mutiple-chip"
					multiple
					value={personName}
					onChange={handleChange}
					input={<Input id="select-multiple-chip" />}
					renderValue={(selected) => (
						<div className={classes.chips}>
							{selected.map((value) => (
								<Chip
									key={value}
									label={value}
									className={classes.chip}
									onDelete={handleDelete}
									style={{
										backgroundColor: '#8460C2',
									}}
								/>
							))}
						</div>
					)}
					MenuProps={MenuProps}
				>
					{tags.map((name) => (
						<MenuItem
							key={name}
							value={name}
							style={getStyles(name, personName, theme)}
						>
							<Checkbox checked={personName.indexOf(name) > -1} />
							<ListItemText primary={name} />
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<FormControl className={classes.formControl}>
				<NativeSelect id="select" variant="outlined">
					{tags.map((name, index) => (
						<option value={index}>
							<MenuItem
								key={index}
								value={name}
								style={getStyles(name, personName, theme)}
							>
								<Checkbox checked={personName.indexOf(name) > -1} />
								<ListItemText primary={name} />
							</MenuItem>
						</option>
					))}
				</NativeSelect>
			</FormControl>
		</div>
	)
}
