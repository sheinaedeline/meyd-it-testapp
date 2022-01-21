import React from 'react'
import PropTypes from 'prop-types'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import material ui components
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Image from 'material-ui-image'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	card: {
		margin: theme.spacing(1),
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: theme.palette.primary.contrastText,
		margin: theme.spacing(1),
		marginBottom: theme.spacing(3),
	},
	photoGrid: {
		padding: theme.spacing(1),
	},
	imageGridItems: {
		padding: theme.spacing(0.5),
	},
	photoGridR: {
		display: 'flex',
		flexDirection: 'column',
	},
})

/**
 *
 * @param {object} collections - The data containing the name and id (unsplash collection id) of all the collections
 * @returns A component that will go in the creative atelier
 */
const Collections = ({ collections }) => {
	const classes = useStyles()

	// the max number that the random number generator should generate.
	// random number generator is so that the gallery will have different images
	const numImages = 48
	const customImage = (item, randNum) => (
		<Image
			src={`https://source.unsplash.com/collection/${item.id}/?sig=${randNum}`}
			className={classes.imageGridItems}
			cover
		/>
	)

	return (
		<Grid container>
			{collections.map((item) => (
				<Grid item xs={12} sm={6} md={4} key={item.name}>
					<Card className={classes.card} elevation={0}>
						<CardActionArea style={{ width: '100%', height: '100%' }}>
							<CardContent className={classes.photoGrid}>
								{/* The title */}
								<Typography variant="h5" className={classes.title}>
									{item.name}
								</Typography>

								{/* The photo grid */}
								<Grid container>
									{/* The first photo */}
									<Grid item xs={8}>
										{customImage(item, Math.floor(Math.random() * numImages))}
									</Grid>

									{/* The other 2 photos */}
									<Grid item xs={4}>
										<div className={classes.photoGridR}>
											{customImage(item, Math.floor(Math.random() * numImages))}
											{customImage(item, Math.floor(Math.random() * numImages))}
										</div>
									</Grid>
								</Grid>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			))}
		</Grid>
	)
}

Collections.propTypes = {
	collections: PropTypes.object.isRequired,
}

export default Collections
