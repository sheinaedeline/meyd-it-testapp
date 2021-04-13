// The grid of images in masonry layout at the bottom of the homepage

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
// import content
import GalleryItems from '@/content/GalleryItems'

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

const Gallery = (props) => {
	const classes = useStyles()

	return (
		<Box className={classes.box}>
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
				gutter="0"
			>
				<Masonry gutter="0" className={classes.masonryContainer}>

					{/* For each item in Gallery array, make a new card item.
							Each card item will have a title, tags, and picture. */}
					{GalleryItems.map((item, i) => (
						<Box className={classes.masonryItem} key={item.title}>
							<Card className={classes.root}>
								<CardActionArea>
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
													key={i}
													size="small"
													className={classes.chip}
													variant="outlined"
													color="secondary"
													label={tag.toUpperCase()}
												/>
											))}
										</Typography>
									</CardContent>

									{/* The photo */}
									<CardMedia
										component="img"
										className={classes.media}
										src={`https://source.unsplash.com/collection/${item.collection}`}
										title="Contemplative Reptile"
									/>
								</CardActionArea>
							</Card>
						</Box>
					))}
				</Masonry>
			</ResponsiveMasonry>
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
		</Box>
	)
}

export default Gallery
