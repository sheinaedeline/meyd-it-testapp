/*
Making a new Project is in 3 steps. Step 1 involves 
getting the required tags and picture for the project
*/

import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import TextBoxes from '@/components/client/dashboard/thestory/TextBoxes'
import React from 'react'

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
		color: '#ffffff',
		backgroundColor: '#8460c2',
		textAlign: 'center',
		display: 'block',
		margin: '0 auto',
	},
})

const Review = () => {
	const classes = useStyles()

	return (
		<div>
			<Typography variant="h5" classes={{ root: classes.centered }}>
				Let's Review
			</Typography>
			<br />

			<div>THIS IS THE NAME</div>

			<br />

			<TextBoxes />

			<Button classes={{ root: classes.tag }}>NAME IT</Button>
			<br />
			<Typography variant="p" classes={{ root: classes.centered }}>
				We'll get started with yout making inspirations after this.
			</Typography>
		</div>
	)
}

export default Review
