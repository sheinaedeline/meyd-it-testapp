/*
Making a new Project is in 3 steps. Step 1 involves
getting the required tags and picture for the project
*/

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import theme from '@/config/theme'
import TextBoxes from '@/components/client/dashboard/thestory/TextBoxes'
import React from 'react'
import Check from '@/assets/icons/user-interface/check.svg'

const useStyles = makeStyles({
	root: {
		color: theme.palette.primary.main,
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
		fontStyle: 'normal',
		fontWeight: 'normal',
		padding: theme.spacing(2),
	},

	tag: {
		color: theme.palette.primary.light,
		backgroundColor: theme.palette.primary.main,
		'&:hover': {
			background: theme.palette.primary.mainHighlight,
		},
		textAlign: 'center',
		margin: '0 auto',
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
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

				}}
			>
				<Grid container direction="row" alignItems="center">
					<Grid item>
						<Check style={{ marginTop: '25%', width: '25px' }}/>
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
