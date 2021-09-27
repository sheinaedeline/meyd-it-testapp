import React from 'react'
import PropTypes from 'prop-types'
import MousePosition from 'mouse-position'
// import styling
import theme from '@/config/theme'
import { makeStyles } from '@material-ui/core/styles'
// import material ui components
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Fab from '@material-ui/core/Fab'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import Popover from '@material-ui/core/Popover'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Zoom from '@material-ui/core/Zoom'
// import custom components
import InspoMarkerText from './InspoMarkerText'

const useStyles = makeStyles({
	descPaper: {
		marginTop: theme.spacing(4),
		padding: theme.spacing(2),
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
	},
	descTextField: {
		width: '95%',
		color: theme.palette.primary.contrastText,
	},
	card: {
		marginTop: theme.spacing(4),
		position: 'relative',
	},
	media: {
		height: 'auto',
		minWidth: '100%',
	},
	markerButtons: {
		boxShadow: 'none',
		backgroundColor: theme.palette.primary.light,
		position: 'absolute',
		zIndex: 2,
	},
	list: {
		backgroundColor: theme.palette.primary.light,
		marginTop: theme.spacing(4),
		marginLeft: theme.spacing(4),
	},
})

const PhotoDetails = ({ photo }) => {
	const classes = useStyles()
	const mouse = MousePosition()
	// to get the mouse position
	const [mousePos, setMousePos] = React.useState({
		x: 0,
		y: 0,
	})
	// data about the moodboard photo
	const [data, setData] = React.useState({
		description: 'Laboris incididunt cupidatat anim quis magna consequat. Exercitation eu esse occaecat id consequat. Reprehenderit nostrud ut duis commodo cupidatat sunt aliqua nostrud et cupidatat exercitation nisi fugiat. Dolor qui ea aliqua dolor amet cupidatat adipisicing quis Lorem labore dolore consequat est.',
		markers: [],
		markerID: 0,
	})
	// To show markers or not to show, that is the question
	const [isShown, setIsShown] = React.useState(true)
	// The anchor el for popover element when fab is clicked
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleAddMarker = (mouseX, mouseY) => {
		setMousePos({
			...mousePos,
			x: mouseX,
			y: mouseY,
		})
	}

	const handleChangeMarkerText = (event, id) => {
		let foundItem = { ...data.markers.find((item) => item.id === id) }
		foundItem = { ...foundItem, description: event.target.value }
		const temp = [...data.markers]
		temp[id - 1] = foundItem
		setData({
			...data,
			markers: temp,
		})
	}

	const handleClick = (event, id) => {
		const temp = data.markers
		if (temp[id - 1]) {
			temp[id - 1].isClicked = !temp[id - 1].isClicked
		}
		setData({
			...data,
			markers: temp,
		})
		setAnchorEl(event.currentTarget)
	}

	const handleDeleteMarker = (id) => {
		// make sure that the one that we want to delete is actually being passed
		let foundItem = data.markers.find((item) => item.id === id)
		if (!foundItem.isClicked) {
			foundItem = data.markers.find((item) => item.isClicked)
			id = foundItem.id
		}
		// make a new array that doesn't contain the item to be deleted
		const temp = data.markers.filter((item) => item.id !== id)

		// traverse through the new array and rearrange the ids
		for (let i = 0; i < temp.length; i++) {
			if (temp[i].id > id) {
				temp[i].id -= 1
			}
		}

		let tempID = 0
		if (temp.length < 1) {
			tempID = 1
		} else {
			tempID = temp[temp.length - 1].id + 1
		}

		setData({
			...data,
			markers: temp,
			markerID: tempID,
		})
		setAnchorEl(null)
	}

	const handleBin = (id) => {
		const foundItem = data.markers.find((item) => item.id === id)
		foundItem.isClicked = true

		setData({ ...foundItem })
		handleDeleteMarker(id)
	}

	React.useEffect(() => {
		const tempMarkers = [...data.markers]
		const tempID = data.markerID
		// find the card element and get the size
		const imgCard = document.getElementById('imgCard')
		const cardSize = imgCard.getBoundingClientRect()

		// calculate the x and y position as a percentage of the card size
		const xPos = ((mousePos.x - cardSize.x) / cardSize.width) * 100
		const yPos = ((mousePos.y - cardSize.y) / cardSize.height) * 100

		if (data.markerID !== 0) {
			tempMarkers.push(
				{
					id: tempID,
					xPos: xPos,
					yPos: yPos,
					isClicked: false,
				},
			)
		}

		setData({
			...data,
			markers: tempMarkers,
			markerID: tempID + 1,
		})
	}, [mousePos])

	return (
		<div style={{ position: 'relative' }}>
			<Button variant="text" onClick={() => setData({
				...data,
				markers: [],
				markerID: 1,
			})}>
				CLEAR MARKERS
			</Button>
			<Grid container>

				{/* the description */}
				<Grid item xs={12}>
					<Paper elevation={0} className={classes.descPaper}>
						<TextField
							className={classes.descTextField}
							multiline
							rowsMax={4}
							id="Description"
							label="Description"
							value={data.description}
							onChange={(e) => setData({
								...data,
								description: e.target.value,
							})}
							InputLabelProps={{
								style: { color: theme.palette.primary.grey },
							}}
							inputProps={{
								style: { color: theme.palette.primary.contrastText },
							}}
						/>
					</Paper>
				</Grid>

				{/* the photo */}
				<Grid item xs={12} sm={6}>
					<Card className={classes.card} elevation={0} id="imgCard">
						{/* the inspo markers */}
						{data.markers.map((item) => (
							<div key={item.id}>

								{/* the marker button */}
								<Zoom in={isShown}>
									<Fab
										className={classes.markerButtons}
										style={{
											left: `calc(${item.xPos}% - 20px)`,
											top: `calc(${item.yPos}% - 20px)`,
										}}
										size="small"
										onClick={(e) => handleClick(e, item.id)}
									>
										{item.id}
									</Fab>
								</Zoom>

								{/* the popover */}
								<Popover
									id={item.isClicked ? 'popover' : undefined}
									open={Boolean(anchorEl)}
									anchorEl={anchorEl}
									onClose={() => setAnchorEl(null)}
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'center',
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'center',
									}}
								>

									{/* Question to ask to delete marker */}
									<Typography
										style={{ color: theme.palette.primary.contrastText, marginTop: theme.spacing(1) }}
										variant="body2"
										align="center"
									>
										Delete marker?
									</Typography>

									{/* cancel button */}
									<Button
										variant="text"
										style={{ color: theme.palette.primary.grey }}
										onClick={() => setAnchorEl(null)}
									>
										CANCEL
									</Button>

									{/* delete button */}
									<Button
										variant="text"
										color="secondary"
										onClick={() => handleDeleteMarker(item.id)}
									>
										DELETE
									</Button>
								</Popover>
							</div>
						))}
						<CardActionArea onClick={() => handleAddMarker(mouse[0], mouse[1])}>
							<CardMedia
								component="img"
								className={classes.media}
								src={photo}
							/>
						</CardActionArea>
					</Card>
				</Grid>

				{/* the list of inspo markers */}
				<Grid item xs={12} sm={6}>
					{data.markers.length < 1
						? (
							// If there are no markers, prompt the user to add markers
							<Paper elevation={0} className={classes.list} style={{ padding: theme.spacing(4) }}>
								<Typography style={{ color: theme.palette.primary.contrastText }}>
									Tap on the image to add markers
								</Typography>
							</Paper>
						)
						: (
							// Otherwise show the list of markers
							<List className={classes.list}>
								{data.markers.map((item) => (
									<InspoMarkerText
										key={item.id}
										onChangeText={(e) => handleChangeMarkerText(e, item.id)}
										number={item.id}
										text={item.description}
										onDelete={() => handleBin(item.id)}
									/>
								))}
								<ListItem>
									<FormControlLabel
										control={
											<Switch
												checked={isShown}
												onChange={() => setIsShown(!isShown)}
												name="Show Markers"
												color="primary"
											/>
										}
										label="SHOW MARKERS"
									/>
								</ListItem>
							</List>
						)
					}
				</Grid>
			</Grid>
		</div>
	)
}

PhotoDetails.propTypes = {
	photo: PropTypes.string.isRequired,
}

export default PhotoDetails
