/*
Making a new Project is in 3 steps. Step 1 involves 
getting the required tags and picture for the project
*/
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
	Typography,
	FormControl,
	FormHelperText,
	Input,
	TextField,
	OutlinedInput,
} from '@material-ui/core'

import TextBoxes from './thestory/TextBoxes'

const useStyles = makeStyles({
	root: {
		color: '#8460C2',
	},
	textBox: {
		align: 'center',
		display: 'block',
		margin: '0 auto',
		textAlign: 'center',
		height: '20vh',
	},
	centered: {
		textAlign: 'center',
		display: 'block',
		margin: '0 auto',
	},
	tag: {
		borderRadius: '25px',
		color: '#ffffff',
		backgroundColor: '#8460c2',
		margin: '8px',
	},
})

const TheStory = () => {
	const classes = useStyles()

	return (
		<div>
			<div
				style={{
					width: '94%',
					align: 'center',
					margin: '0 auto',
					display: 'block',
				}}
			>
				<TextField
					id="outlined-multiline-static"
					multiline
					rows={7}
					defaultValue="The Story"
					variant="outlined"
					border={1}
					borderColor="#C2B0E1"
					fullWidth
				/>
			</div>

			<Typography
				style={{
					marginLeft: '5%',
				}}
			>
				Tell us about your making. What’s the occasion? How have you visioned
				it? When do you need it?
			</Typography>
			<br />

			{/*This loads the text boxes. There are three of them.*/}
			<TextBoxes />
		</div>
	)
}

export default TheStory
