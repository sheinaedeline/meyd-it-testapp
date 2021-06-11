/*
Making a new Project is in 3 steps. Step 1 involves
getting the required tags and picture for the project
*/
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
	Typography,
	TextField,
} from '@material-ui/core'

import TextBoxes from './thestory/TextBoxes'

const useStyles = makeStyles((theme) => ({
	root: {
		color: theme.palette.primary.main,
	},
	main: {
		width: '95%',
		align: 'center',
		margin: '0 auto',
		display: 'block',
	},
	helperText: {
		marginLeft: '4%',
		color: theme.palette.primary.main,
		marginBottom: theme.spacing(2),
	},
}))

const TheStory = () => {
	const classes = useStyles()

	return (
		<div>
			<div
				className={classes.main}
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
				className={classes.helperText}
			>
				Tell us about your making. What’s the occasion? How have you visioned
				it? When do you need it?
			</Typography>

			{/* This loads the text boxes. There are three of them. */}
			<TextBoxes />
		</div>
	)
}

export default TheStory
