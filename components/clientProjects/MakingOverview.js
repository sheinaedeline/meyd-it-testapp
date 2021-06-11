/* This is the details of the selected making,
  displayed at the top of the projects page */

import React from 'react'
import { PropTypes } from 'prop-types'

// import stylings
import { makeStyles } from '@material-ui/core'
import theme from '@/config/theme'

import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Image from 'material-ui-image'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

// import custom components
import InputFields from './InputFields'

const useStyles = makeStyles({
	makingDetails: {
		display: 'flex',
		padding: theme.spacing(4),
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
	},
	chip: {
		marginRight: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	photoGridItem: {
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		maxHeight: '400px',
	},
	photoBox: {
		margin: '0 auto',
		maxHeight: '500px',
		maxWidth: '300px',
	},
})

const MakingOverview = ({ making }) => {
	const classes = useStyles()

	const imgSrc = 'https://source.unsplash.com/' + making.photoid

	return (
		<Paper elevation={0} square>
			<Grid container className={classes.makingDetails}>

				{/* The title, tags, and input fields */}
				<Grid item xs={12} sm={7} style={{ paddingBottom: theme.spacing(2) }}>
					<Grid container style={{ alignItems: 'center' }}>

						{/* The title */}
						<Grid item xs={12}>
							<Typography variant="h5" className={classes.title}>
								{making.title}
							</Typography>
						</Grid>

						{/* The tags */}
						<Grid item xs={12}>
							{making.tags.map((item, index) => {
								return (
									<Chip size="medium" label={item} color="primary" key={index} className={classes.chip}/>
								)
							})}
						</Grid>

						{/* The input fields */}
						<InputFields making={making} disabled={true} />
					</Grid>
				</Grid>

				{/* The photo */}
				<Grid item xs={12} sm={5} className={classes.photoGridItem}>
					<Box className={classes.photoBox}>
						<Image src={imgSrc} aspectRatio={5 / 8} imageStyle={{ minHeight: '100%' }}/>
					</Box>
				</Grid>

				{/* The story */}
				<Grid item xs={12} style={{ marginTop: theme.spacing(2) }}>
					<Typography variant="h6">The Story</Typography>
					<Typography style={{ color: theme.palette.primary.contrastText }}>{making.description}</Typography>
				</Grid>
			</Grid>
		</Paper>
	)
}

// Props validation to make sure input parameters are the correct type
MakingOverview.propTypes = {
	making: PropTypes.object.isRequired,
}

export default MakingOverview
