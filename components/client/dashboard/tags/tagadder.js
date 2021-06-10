/**
 * This is the part where tags are added to the tags section for
 *  part 1 of starting a new project.
 */

import React from 'react'
// import stylings
import theme from '@/config/theme'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
// import material ui components
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import Chip from '@material-ui/core/Chip'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import CardMedia from '@material-ui/core/CardMedia'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import CardActionArea from '@material-ui/core/CardActionArea'
// import custom components
import Gallery from '@/components/homepage/Gallery'
import Slugify from '@/config/Slugify'
import { XIcon } from '@/icons/user-interface'
import { Typography } from '@material-ui/core'

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
}))

const tags = [
	'Bohemian',
	'Size Positive',
	'School Graduation',
	'Princess',
	'Vintage',
	'Adaptive',
]

const TagAdder = () => {
	const classes = useStyles()
	const [selected, setSelected] = React.useState([])
	const [url, setURL] = React.useState('')

	// array of photos
	const [photoArray, setPhotoArray] = React.useState([])
	// how many photos to generate
	const numToGenerate = 12
	// random number generator
	const getRandomNum = () => {
		return Math.floor(Math.random() * 206)
	}

	const handlePhotoSelect = (index) => {
		photoArray[index].selectedPhoto = !photoArray[index].selectedPhoto
	}

	const handleChange = (e, tag, action) => {
		setSelected(tag)

		if (action === 'clear') {
			setSelected([])
		}
	}

	// everytime selected changes, change the url
	React.useEffect(() => {
		let temp = ''
		for (let i = 0; i < selected.length; i++) {
			if (temp.length > 1) {
				temp = temp.concat(',')
			}
			temp = temp.concat(Slugify(selected[i]))
		}
		setURL(temp)
	}, [selected])

	React.useEffect(() => {
		const temp = []
		for (let i = 0; i < numToGenerate; i++) {
			temp.push({
				index: i,
				selectedPhoto: false,
			})
		}
		setPhotoArray(temp)
	}, [])

	return (
		<div>
			<Autocomplete
				multiple
				id="tags-standard"
				options={tags}
				getOptionLabel={(option) => option}
				onChange={(e, tag, action) => handleChange(e, tag, action)}
				renderInput={(params) => (
					<TextField
						{...params}
						variant="outlined"
						placeholder="Tags"
					/>
				)}
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
			<Box>
				<ResponsiveMasonry
					columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
					gutter="0"
				>
					<Masonry gutter="0" className={classes.masonryContainer}>

						{selected.length > 0 && photoArray.map((item) => (
							<Card className={classes.card} elevation={0} key={item.index}>
								<CardActionArea onClick={() => handlePhotoSelect(item.index)}>
									{item.selectedPhoto && <Typography>hello</Typography>}
									<CardMedia
										component="img"
										className={clsx(item.selectedPhoto
											? classes.selectedMedia
											: classes.media)}
										src={`https://source.unsplash.com/featured/?${url}/${getRandomNum()}`}
									/>
								</CardActionArea>
							</Card>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</Box>
		</div>
	)
}

export default TagAdder
