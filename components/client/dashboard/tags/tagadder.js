import React from 'react'
import {
	makeStyles,
	useTheme,
} from '@material-ui/core/styles'
import {
	Input,
	Box,
	MenuItem,
	FormControl,
	ListItemText,
	Select,
	Checkbox,
	Chip,
} from '@material-ui/core/'
import XIcon from '@/assets/icons/user-interface/x.svg'

/**
 * This is the part where tags are added to the tags section for
 *  part 1 of starting a new project.
 */

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

function getStyles (name, personName, theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	}
}

export default function MultipleSelect () {
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
			<FormControl variant="outlined" className={classes.formControl}>
				<Select
					multiple
					variant="outlined"
					value={personName}
					onChange={handleChange}
					input={<Input id="select-multiple-chip" />}
					renderValue={(selected) => (
						<div className={classes.chips}>
							{selected.map((value) => (
								<Chip
									clickable
									key={value}
									label={value}
									className={classes.chip}
									deleteIcon={<XIcon style={{ color: '#ffffff' }} />}
									onDelete={handleDelete}
									style={{
										backgroundColor: '#8460C2',
										color: '#ffffff',
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
		</div>
	)
}
