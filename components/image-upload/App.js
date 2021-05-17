/** 
Making a new Project is in 3 steps. This is the file uploader and preview
*/

import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import {
	Typography,
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
} from '@material-ui/core'
import UploadButton from '@/assets/icons/user-interface/upload.svg'
import TrashButton from '@/assets/icons/user-interface/trash.svg'

const useStyles = makeStyles({
	root: {
		color: '#8460C2',
		margin: '0 auto',
		padding: '10px',
	},
	box: {
		width: '94%',
		margin: '0 auto',
		minHeight: '50px',
	},
	centered: {
		textAlign: 'center',
		display: 'block',
		margin: '0 auto',
	},
	tag: {
		borderRadius: '25px',
		color: '#ffffff',
		backgroundColor: '#8460c2',
		margin: '8px',
	},
	message: {
		color: '#180f2799',
		fontSize: '12px',
		marginTop: '5px',
		marginLeft: '4%',
	},
	media: {
		minWidth: '64px',
		minHeight: '64px',
		width: '300px',
		height: '300px',
	},
})

const App = () => {
	const classes = useStyles()
	const [selectedFiles, setSelectedFiles] = useState([])

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) =>
				URL.createObjectURL(file)
			)

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray))
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			)
		}
	}

	const handleDelete = () => {
		alert('Button Clicked!')
		console.info('You clicked the delete icon.')
	}

	const renderPhotos = (source) => {
		console.log('source: ', source)
		return source.map((photo) => {
			return (
				<div style={{ margin: '3%' }}>
					<Card
						className={classes.media}
						style={{ float: 'left', margin: '10px' }}
						onClick={alert('yayyy')}
					>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image={photo}
								style={{ display: 'block' }}
							>
								<Button
									style={{
										display: 'block',
										background: '#ffffff',
										color: '#000000',
										top: '75%',
										left: '75%',
										height: '64px',

										borderRadius: '50px',
									}}
								>
									<TrashButton />
								</Button>
							</CardMedia>
						</CardActionArea>
					</Card>
				</div>
			)
		})
	}

	return (
		<div className="root">
			<div>
				<Box border={1} classes={{ root: classes.box }}>
					<div className={classes.root}>
						<label for="file">
							<Typography
								variant="contained"
								color="primary"
								component="span"
								style={{
									color: '#000000',
								}}
							>
								<UploadButton style={{ marginRight: '5px' }} />
								Add images of your inspirations
							</Typography>
						</label>

						<input
							accept="image/*"
							type="file"
							id="file"
							//className={classes.input}
							multiple
							onChange={handleImageChange}
							style={{ display: 'none' }}
						/>
					</div>
				</Box>

				<Typography className={classes.message}>
					These images will help us determine your making's tags
				</Typography>

				<div className="result">{renderPhotos(selectedFiles)}</div>
			</div>
		</div>
	)
}

export default App
