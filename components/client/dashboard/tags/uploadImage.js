/**
Making a new Project is in 3 steps. This is the file uploader and preview
*/

import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
import React, {
	useState,
	useEffect,
} from 'react'
import {
	Typography,
	Box,
	Button,
	Card,
	CardActionArea,
	CardMedia,
} from '@material-ui/core'
import {
	UploadIcon,
	TrashIcon,
} from '@/assets/icons/user-interface'

const useStyles = makeStyles({
	root: {
		color: theme.palette.primary.main,
		margin: '0 auto',
	},
	uploadButton: {
		width: '20px',
		height: 'auto',
		marginRight: theme.spacing(1),
	},
	box: {
		margin: '0 auto',
		padding: '10px',
		width: '94%',
		alignItems: 'center ',
	},

	tag: {
		borderRadius: '25px',
		color: theme.palette.primary.light,
		backgroundColor: theme.palette.primary.main,
		margin: '8px',
	},
	message: {
		color: theme.palette.primary.grey,
		fontSize: '12px',
		marginTop: theme.spacing(1),
		marginLeft: '4%',
	},
	media: {
		minWidth: '64px',
		minHeight: '64px',
		width: '300px',
		height: '300px',
		display: 'block',
	},
})

const UploadImage = () => {
	const classes = useStyles()
	const [selectedFiles, setSelectedFiles] = React.useState([])

	const [filesArray, setFilesArray] = useState()

	const [isEmpty, setIsEmpty] = useState(false)

	const handleImageChange = (e) => {
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) =>
				URL.createObjectURL(file),
			)
			console.log(filesArray)
			setSelectedFiles((prevImages) => prevImages.concat(filesArray))
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file), // avoid memory leak
			)
		}
		setFilesArray(e)
	}

	const renderPhotos = (source) => {
		const handleDelete = (index) => {
			source.splice(index, 1)
			console.log(index, source)
		}

		return source.map((photo, index) => {
			return (
				<div style={{ margin: '3%' }} key={`photo-item-${index}`}>
					<Card
						className={classes.media}
						style={{ float: 'left', margin: '10px' }}
					>
						<CardMedia className={classes.media} image={photo}>
							<Button
								style={{
									display: 'block',
									background: '#ffffff',
									color: theme.palette.primary.light,
									top: '75%',
									left: '75%',
									height: '64px',

									borderRadius: '50px',
								}}
							>
								<TrashIcon onClick={() => handleDelete(index)} />
							</Button>
						</CardMedia>
					</Card>
				</div>
			)
		})
	}

	React.useEffect(() => {
	}, [filesArray])

	return (
		<div className="root">
			<div>
				<Box border={1} classes={{ root: classes.box }}>
					<div className={classes.root} style={{ alignItems: 'left' }}>
						<label htmlFor="file">
							<Typography
								style={{
									display: 'block',
									position: 'relative',
									wordWrap: 'break-word',
								}}
							>
								<UploadIcon className={classes.uploadButton} />
								Add images of your inspirations
							</Typography>
						</label>

						<input
							accept="image/*"
							type="file"
							id="file"
							// className={classes.input}
							multiple
							onChange={handleImageChange}
							style={{ display: 'none' }}
						/>
					</div>
				</Box>

				<Typography className={classes.message}>
					These images will help us determine your making&apos;s tags
				</Typography>

				<div className="result">{renderPhotos(selectedFiles)}</div>
			</div>
		</div>
	)
}

export default UploadImage
