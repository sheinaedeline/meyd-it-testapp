/**
Making a new Project is in 3 steps. This is the file uploader and preview
*/

// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
import React from 'react'

// import material ui components
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'

// import custom components
import UploadIcon from '@/assets/icons/user-interface/upload.svg'
import TrashIcon from '@/assets/icons/user-interface/trash.svg'

const useStyles = makeStyles({
	root: {
		color: theme.palette.primary.main,
		margin: '0 auto',
		alignItems: 'left',
	},
	uploadButton: {
		width: '20px',
		height: 'auto',
		marginRight: theme.spacing(1),
	},
	box: {
		margin: '0 auto',
		padding: theme.spacing(1),
		width: '94%',
		alignItems: 'center ',
	},
	message: {
		color: theme.palette.primary.grey,
		fontSize: '12px',
		marginTop: theme.spacing(1),
		marginLeft: '4%',
	},
	imgCard: {
		margin: theme.spacing(2),
		height: '300px',
		display: 'block',
	},
	media: {
		width: '100%',
		height: '100%',
	},
	typography: {
		display: 'block',
		position: 'relative',
		wordWrap: 'break-word',
	},
	trashButton: {
		display: 'block',
		background: theme.palette.primary.light,
		'&:hover': {
			background: theme.palette.primary.grey,
		},
		color: theme.palette.primary.contrastText,
		top: '75%',
		left: '65%',
		[theme.breakpoints.up('sm')]: {
			left: '75%',
		},
		minWidth: '64px',
		width: '10%',
		height: 'auto',
		borderRadius: '50%',
	},
})

/**
 *
 * @returns A component that allows the user to upload images
 */
const UploadImage = () => {
	const classes = useStyles()
	const [selectedFiles, setSelectedFiles] = React.useState([])

	const handleImageChange = (e) => {
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) =>
				URL.createObjectURL(file),
			)
			setSelectedFiles((prevImages) => prevImages.concat(filesArray))
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file), // avoid memory leak
			)
		}
	}

	const handleDelete = (source, index) => {
		// Find the image that's been selected
		const deletedImage = source.splice(index, 1)
		// Make a new array that is the same as the current image array but
		// without the selected image
		const newArray = selectedFiles.filter((image) => image !== deletedImage)
		setSelectedFiles(newArray)
	}

	const renderPhotos = (source) => {
		return source.map((photo, index) => {
			return (
				<Grid item xs={12} sm={6} md={4} key={`photo-item-${index}`}>
					<Card className={classes.imgCard}>
						<CardMedia className={classes.media} image={photo}>
							<Button className={classes.trashButton}>
								<TrashIcon onClick={() => handleDelete(source, index)} />
							</Button>
						</CardMedia>
					</Card>
				</Grid>
			)
		})
	}

	return (
		<div className="root">
			<div>
				<Box border={1} classes={{ root: classes.box }}>
					<div className={classes.root}>
						<label htmlFor="file">
							<Typography className={classes.typography}>
								<UploadIcon className={classes.uploadButton} />
								Add images of your inspirations
							</Typography>
						</label>

						<input
							accept="image/*"
							type="file"
							id="file"
							multiple
							onChange={handleImageChange}
							style={{ display: 'none' }}
						/>
					</div>
				</Box>

				<Typography className={classes.message}>
					These images will help us determine your making&apos;s tags
				</Typography>

				<Grid container>{renderPhotos(selectedFiles)}</Grid>
			</div>
		</div>
	)
}

export default UploadImage
