/*
Making a new Project is in 3 steps. Step 1 involves 
getting the required tags and picture for the project
*/

import { makeStyles } from '@material-ui/core/styles'
import {
	Button,
	Typography,
	FormControl,
	OutlinedInput,
	FormHelperText,
	Container,
} from '@material-ui/core'
import React from 'react'
import Check from '@/assets/icons/user-interface/check.svg'

const useStyles = makeStyles({
	root: {
		color: '#8460C2',
	},
	box: {
		width: '94%',
		align: 'center',
		display: 'block',
		margin: '0 auto',
		textAlign: 'center',
		height: '150px',
	},
	centered: {
		textAlign: 'center',
		display: 'block',
		margin: '0 auto',
		font: 'Cabin',
		fontStyle: 'normal',
		fontWeight: 'normal',
	},

	tag: {
		'color': '#ffffff',
		'backgroundColor': '#8460c2',
		'&:hover': {
			background: '#8460C261',
		},
		'textAlign': 'center',
		'display': 'block',
		'margin': '0 auto',
	},

	button: {
		'backgroundColor': '#8460C2',
		'&:hover': {
			background: '#8460C2 38%',
		},
	},
})

const NameIt = () => {
	const classes = useStyles()

	return (
		<div>
			<Typography variant="h3" classes={{ root: classes.centered }}>
				Name Your Making
			</Typography>
			<br />
			<FormControl variant="outlined" classes={{ root: classes.centered }}>
				<OutlinedInput id="component-outlined" placeholder="Name" />
				<FormHelperText
					id="component-helper-text"
					style={{ color: '#000000' }}
					classes={{ root: classes.centered }}
				>
					A unique name for your unique making
				</FormHelperText>
			</FormControl>
			<br />
			<Button classes={{ root: classes.tag }}>
				<Check
					style={{ display: 'inline-block' }}
					classes={{ root: classes.centered }}
				/>
				<Typography
					style={{ display: 'inline-block' }}
					classes={{ root: classes.centered }}
				>
					NAME IT
				</Typography>
			</Button>
			<br />
			<Typography variant="p" classes={{ root: classes.centered }}>
				We'll review your making after this.
			</Typography>
		</div>
	)
}

export default NameIt
