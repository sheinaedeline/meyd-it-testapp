/**
 * This is the part where tags are added to the tags section for
 *  part 1 of starting a new project.
 */

import React from 'react'
import PropTypes from 'prop-types'
// import stylings
import theme from '@/config/theme'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
// import material ui components
import Autocomplete from '@material-ui/lab/Autocomplete'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import TextField from '@material-ui/core/TextField'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
// import custom components
import {
	XIcon,
	CheckIcon,
} from '@/icons/user-interface'

const useStyles = makeStyles((theme) => ({
	chipText: {
		color: theme.palette.primary.light,
	},
	masonryItem: {
		paddingBottom: theme.spacing(4),
		paddingLeft: theme.spacing(4),
	},
	card: {
		backgroundColor: theme.palette.primary.main,
		margin: theme.spacing(2),
	},
	media: {
		height: 'auto',
		minWidth: '100%',
	},
	selectedMedia: {
		opacity: '0.5',
		height: 'auto',
		minWidth: '100%',
	},
	checkIcon: {
		display: 'block',
		position: 'absolute',
		margin: '0 auto',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		color: theme.palette.primary.light,
		[theme.breakpoints.down('xs')]: {
			width: '30vw',
		},
		width: '10vw',
		height: 'auto',
		opacity: 1,
		zIndex: 2,
	},
	box: {
		padding: theme.spacing(1),
	},
}))

const tags = [
	'Bohemian',
	'Size Positive',
	'School Graduation',
	'Princess',
	'Vintage',
	'Adaptive',
]

const TagAdder = ({ numToGenerate, initialised }) => {
	const classes = useStyles()
	const [selectedTags, setSelectedTags] = React.useState([])
	const [url, setURL] = React.useState('')

	// array of photos
	const [photoArray, setPhotoArray] = React.useState([])
	// random number generator
	const getRandomNum = () => {
		return Math.floor(Math.random() * 206)
	}

	const handlePhotoSelect = (index) => {
		const temp = [...photoArray]
		temp[index].isSelected = !temp[index].isSelected
		setPhotoArray(temp)
	}

	const handleTagChange = (e, tag, action) => {
		setSelectedTags(tag)

		if (action === 'clear') {
			setSelectedTags([])
		}
	}

	// everytime selectedTags changes, change the url
	React.useEffect(() => {
		const uri = encodeURI(selectedTags.join(','))
		setURL(uri)
	}, [selectedTags])

	React.useEffect(() => {
		const temp = []
		for (let i = 0; i < numToGenerate; i++) {
			temp.push({
				index: i,
				isSelected: false,
				randomNum: getRandomNum(),
			})
		}
		setPhotoArray(temp)

		if (initialised) {
			setSelectedTags(['Bohemian'])
		}
	}, [])

	return (
		<div>
			<Autocomplete
				multiple
				id="tags-standard"
				options={tags}
				getOptionLabel={(option) => option}
				onChange={(e, tag, action) => handleTagChange(e, tag, action)}
				renderInput={(params) => (
					<TextField
						{...params}
						variant="outlined"
						placeholder="Tags"
					/>
				)}
				value={selectedTags}
				renderTags={(value, getTagProps) =>
					value.map((option, index) => (
						<Chip
							key={option}
							color="primary"
							style={{ color: theme.palette.primary.light }}
							label={option}
							{...getTagProps({ index })}
							deleteIcon={
								<XIcon style={{ color: theme.palette.primary.light }} />
							}
						/>
					))
				}
			/>

			{/* Render masonry */}
			<Box className={classes.box}>
				<ResponsiveMasonry
					columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
					gutter="0"
				>
					<Masonry gutter="0">

						{selectedTags.length > 0 && photoArray.map((item) => (
							<div key={`${item.index}-selectedTags-is-${item.isSelected}`} style={{ position: 'relative' }}>

								<Card className={classes.card} elevation={0}>
									<CardActionArea onClick={() => handlePhotoSelect(item.index)}>
										{item.isSelected && <CheckIcon className={classes.checkIcon} />}
										<CardMedia
											component="img"
											className={clsx(classes.media, item.isSelected && classes.selectedMedia)}
											src={`https://source.unsplash.com/featured/?${url}/${item.randomNum}`}
										/>
									</CardActionArea>
								</Card>
							</div>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</Box>
		</div>
	)
}

TagAdder.propTypes = {
	numToGenerate: PropTypes.number,
	initialised: PropTypes.bool,
}

export default TagAdder
