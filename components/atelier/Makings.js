// A grid of cards laid out in masonry

import { PropTypes } from 'prop-types'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import MUI components
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const useStyles = makeStyles({
	root: {
		maxWidth: 'auto',
	},
	masonryItem: {
		padding: theme.spacing(1),
	},
	media: {
		height: 'auto',
		minWidth: '100%',
	},
	projectStatus: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
		margin: theme.spacing(2),
	},
})

/**
 *
 * @param {array} makings - The array of objects to display containing photoid, title, and projectStatus
 * @returns A grid of images laid out in masonry
 */

const Gallery = ({ makings }) => {
	const classes = useStyles()

	return (
		<ResponsiveMasonry
			columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
			gutter="0"
		>
			<Masonry gutter="0" className={classes.masonryContainer}>

				{/* For each item in Gallery array, make a new card item.
							Each card item will have a title, tags, and picture. */}
				{makings.map((item, i) => (
					<Box className={classes.masonryItem} key={i}>
						<Card className={classes.root} square elevation={0}>
							<CardActionArea>
								{/* The photo */}
								<CardMedia
									component="img"
									className={classes.media}
									src={`https://source.unsplash.com/${item.photoid}`}
								/>

								<CardContent>
									{/* The title */}
									<Typography
										variant="h6"
										style={{ color: theme.palette.primary.contrastText }}
										align="center"
									>
										{item.title}
									</Typography>

									{/* The project status */}
									<Typography
										align="center"
										variant="body2"
										className={classes.projectStatus}
									>
										{item.projectStatus}
									</Typography>
								</CardContent>

							</CardActionArea>

						</Card>
					</Box>
				))}
			</Masonry>
		</ResponsiveMasonry>
	)
}

Gallery.propTypes = {
	makings: PropTypes.array.isRequired,
}

export default Gallery
