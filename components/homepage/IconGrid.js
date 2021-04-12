/* The grid of icons and fashion tags underneath the intro. */

import React from 'react'
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
import Grid from '@material-ui/core/Grid'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'
// import content
import FashionTags from '@/content/FashionTags'

const useStyles = makeStyles({
	titleStyle: {
		color: '#000',
		padding: '50px',
	},
	iconStyle: {
		fontSize: 100,
		display: 'block',
		alignItems: 'center',
		margin: '0 auto',
	},
	cardStyle: {
		backgroundColor: theme.palette.primary.main,
		display: 'block',
		alignItems: 'center',
		height: 'auto',
		padding: '100% 0 0 0',
		position: 'relative',
		width: '100%',
	},
	containerStyle: {
		margin: 0,
	},
	moreText: {
		fontWeight: 'lighter',
	},
	cardActionStyle: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		padding: theme.spacing(2),
		top: 0,
		left: 0,
	},
})

const IconGrid = () => {
	const classes = useStyles()

	// Each card will have a media component and content component.
	const tagCard = (item) => (
		<Card square elevation={0} className={classes.cardStyle}>
			<CardActionArea className={classes.cardActionStyle}>

				{/* Media component containing the icon */}
				<CardMedia style={{ alignContent: 'center', padding: 10 }}>
					<SvgIcon component={item.component} className={classes.iconStyle} color="secondary" />
				</CardMedia>

				{/* Content component containing the fashion tag text */}
				<CardContent>
					<Typography align="center">
						{item.name}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)

	return (
		<Box p={2}>
			<Typography variant="h6" className={classes.titleStyle}>Pick Your Style</Typography>
			<Grid container spacing={1} justify="center" className={classes.containerStyle}>

				{/* loop through the icon array and make a new Grid item each element.
					Each Grid item will contain a tagCard object. */}
				{FashionTags.map(icon => (
					<Grid item key={icon.name + 'card'}
						xs={6} sm={4} md={3} lg={2}>
						{tagCard(icon)}
					</Grid>
				))}

			</Grid>
			<Box style={{ width: '100%' }}>
				<Button style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Typography variant="h6" className={classes.moreText}>AND LOTS MORE...</Typography>
				</Button>
			</Box>
		</Box>
	)
}

export default IconGrid
