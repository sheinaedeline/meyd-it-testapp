/*
Making a new Project is in 3 steps. Step 1 involves
getting the required tags and picture for the project
*/

import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormHelperText from '@material-ui/core/FormHelperText'

import React from 'react'
import Check from '@/assets/icons/user-interface/check.svg'

const useStyles = makeStyles({
	root: {
		color: theme.palette.primary,
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
	},
	formControl: {
		textAlign: 'center',
		display: 'block',
		margin: '0 auto',
		fontStyle: 'normal',
		fontWeight: 'normal',
		padding: theme.spacing(1),
	},
	tag: {
		color: theme.palette.primary.light,
		backgroundColor: theme.palette.primary.main,
		'&:hover': {
			background: theme.palette.primary.mainHighlight,
		},
		textAlign: 'center',
		display: 'block',
		margin: '0 auto',
	},
})

const NameIt = () => {
	const classes = useStyles()

	return (
		<div>
			<Typography variant="h3" classes={{ root: classes.centered }}>
				Name Your Making
			</Typography>

			<FormControl variant="outlined" classes={{ root: classes.formControl }}>
				<OutlinedInput id="component-outlined" placeholder="Name" />
				<FormHelperText
					id="component-helper-text"
					style={{ color: theme.palette.primary.contrastText }}
					classes={{ root: classes.centered }}
				>
					A unique name for your unique making
				</FormHelperText>
			</FormControl>
			<br />

			<Button
				classes={{ root: classes.tag }}
			>
				<Grid container direction="row" alignItems="center">
					<Grid item>
						<Check style={{ marginTop: '25%', width: '25px' }} />
					</Grid>
					<Grid item>
						<Typography>NAME IT</Typography>
					</Grid>
				</Grid>
			</Button>
			<br />
			<Typography variant="p" classes={{ root: classes.centered }}>
				* You&apos;ll be able to modify your making anytime later.
			</Typography>
		</div>
	)
}

export default NameIt
