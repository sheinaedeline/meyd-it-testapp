// A grid of images laid out in masonry

// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import MUI components
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
// import icons
import { SearchIcon } from '@/icons/user-interface'

import { PropTypes } from 'prop-types'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const useStyles = makeStyles({
	button: {
		color: '#fff',
	},
	root: {
		maxWidth: 'auto',
	},
	buttonWrapper: {
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	masonryItem: {
		paddingBottom: theme.spacing(4),
		paddingLeft: theme.spacing(4),
	},
	media: {
		height: 'auto',
		minWidth: '100%',
	},
	box: {
		padding: '5%',
		backgroundColor: '#fff4ff',
	},
	chip: {
		margin: theme.spacing(0.5),
	},
})

/**
 *
 * @param {array} galleryItems - The array of objects or photo IDs to display
 * @param {bool} photoOnly - Whether to display just the photo, or include the title and tags
 * @param {bool} isCollection - Whether the array should fetch from an unsplash collection or a single photo
 * @param {bool} buttonActive - Whether the "discover more" button in the bottom should appear or not
 * @returns A grid of images laid out in masonry
 */

const Gallery = ({ galleryItems, photoOnly, isCollection, buttonActive }) => {
	const classes = useStyles()
	const imgSrc = (item) => {
		if (isCollection) {
			return ('https://source.unsplash.com/collection/' + item.collection)
		} else {
			return ('https://source.unsplash.com/' + item)
		}
	}

	return (
		<Box className={classes.box}>
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
				gutter="0"
			>
				<Masonry gutter="0" className={classes.masonryContainer}>

					{/* For each item in Gallery array, make a new card item.
							Each card item will have a title, tags, and picture. */}
					{galleryItems.map((item, i) => (
						<Box className={classes.masonryItem} key={i}>
							<Card className={classes.root} square>
								<CardActionArea>

									{/* If photoOnly is set to false, display the title and tags, otherwise
										just display the photo */}
									{!photoOnly
										? (
											<CardContent>

												{/* The title */}
												<Typography gutterBottom variant="h5" component="h2" style={{ color: '#000' }}>
													{item.title}
												</Typography>

												{/* The tags */}
												<Typography
													variant="body2"
													color="textSecondary"
													component="p"
												>
													{item.tags.map((tag, i) => (
														<Chip
															key={'tag-' + tag + i}
															size="small"
															className={classes.chip}
															variant="outlined"
															color="secondary"
															label={tag.toUpperCase()}
														/>
													))}
												</Typography>
											</CardContent>
										)
										: null
									}

									{/* The photo */}
									<CardMedia
										component="img"
										className={classes.media}
										src={imgSrc(item)}
										title="Contemplative Reptile"
									/>
								</CardActionArea>

							</Card>
						</Box>
					))}
				</Masonry>
			</ResponsiveMasonry>

			{buttonActive
				? (
					<Box className={classes.buttonWrapper}>
						<Button
							variant="contained"
							color={'secondary'}
							size="large"
							startIcon={<SearchIcon />}
							className={classes.button}
						>
          Explore more and find your vibe
						</Button>
					</Box>
				)
				: null}
		</Box>
	)
}

Gallery.propTypes = {
	galleryItems: PropTypes.array.isRequired,
	photoOnly: PropTypes.bool,
	isCollection: PropTypes.bool,
	buttonActive: PropTypes.bool,
}

export default Gallery
