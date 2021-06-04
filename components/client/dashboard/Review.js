/*
Making a new Project is in 3 steps. Step 1 involves
getting the required tags and picture for the project
*/

import { makeStyles } from '@material-ui/core/styles'
import {
	Button,
	Typography,
	Box,
	Grid,
} from '@material-ui/core'
import TextBoxes from '@/components/client/dashboard/thestory/TextBoxes'
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
		padding: '20px',
	},

	tag: {
		color: '#ffffff',
		backgroundColor: '#8460c2',
		'&:hover': {
			background: '#8460C261',
		},
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
				Let&apos;s Review
			</Typography>
			<Typography variant="h4" classes={{ root: classes.centered }}>
				Navy Blue Graduation Dress
			</Typography>
			<Box style={{ margin: '50px 50px' }}>
				<Typography variant="p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut amet nisi
					quam dui, nulla risus. Fermentum lectus pulvinar mauris sed eu cras
					urna. Integer urna quam urna interdum mauris hendrerit integer.
					Ullamcorper ut sed fringilla arcu, urna, feugiat et massa. Facilisi
					sagittis ullamcorper ipsum non lobortis tellus. At tortor risus
					egestas urna varius suspendisse tincidunt suscipit. Sed ultrices nisl
					ut enim volutpat velit faucibus enim. Est feugiat orci fermentum sed.
					Sagittis, in ut pretium adipiscing et volutpat dictum adipiscing nunc.
					Bibendum cursus volutpat sed nibh orci tincidunt. Enim, nunc ornare
					massa ultrices. Lectus quam diam sit in dolor magna nisl tellus
					aliquam. Neque lacus mi, cursus nunc nibh odio consequat sit neque.
					Egestas magna velit vel et congue egestas feugiat. Neque, gravida eget
					feugiat sed suspendisse tempus. Turpis lectus vitae quisque phasellus
					augue viverra dui fusce sed. Tristique sit at curabitur massa lobortis
					eu, vestibulum. Mus sagittis, id velit nisl, etiam orci diam. Dis
					pellentesque in augue egestas. Aliquam et, euismod feugiat felis.
					Purus egestas nibh ut rhoncus.
				</Typography>
			</Box>

			<TextBoxes />

			<Button
				classes={{ root: classes.tag }}
				style={{
					display: 'flex',
					alignItems: 'center',
					flexWrap: 'wrap',
				}}
			>
				<Grid container direction="row" alignItems="center">
					<Grid item>
						<Check style={{ width: '30px' }}/>
					</Grid>
					<Grid item>
						FINALISE YOUR MAKING
					</Grid>
				</Grid>
			</Button>
			<Typography variant="p" classes={{ root: classes.centered }}>
				We&apos;ll get started with yout making inspirations after this.
			</Typography>
		</div>
	)
}

export default Review
