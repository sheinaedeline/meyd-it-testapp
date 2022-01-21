/* This is the company values on the homepage i.e. Made for you, eco-friendly, etc */

import React from 'react'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import MUI components
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
// import custom components
// import {
// 	CommunityDrivenImage,
// 	EcoFriendlyImage,
// 	MadeForYouImage,
// 	ModernImage,
// } from '@/assets/graphics'
import CommunityDrivenImage from '@/assets/graphics/community_driven.svg'
import EcoFriendlyImage from '@/assets/graphics/eco_friendly.svg'
import MadeForYouImage from '@/assets/graphics/made_for_you.svg'
import ModernImage from '@/assets/graphics/modern.svg'

const useStyles = makeStyles({
	gridItemStyle: {
		minHeight: '50vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		color: theme.palette.primary.contrastText,
		padding: theme.spacing(10),
		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(5),
		},
		[theme.breakpoints.down('xs')]: {
			height: '50%',
		},
	},
	icon: {
		height: '200px',
		[theme.breakpoints.down('md')]: {
			height: '150px',
		},
		[theme.breakpoints.down('xs')]: {
			height: '250px',
		},
	},
})

const Values = () => {
	const classes = useStyles()

	const values = [
		{
			id: 1,
			title: 'Made for you',
			content: 'Wear clothes that support your values and interests. ' +
			'Get clothes made that are unique. Get accessible and inclusive clothing ' +
			'designed to meet your special needs.',
			icon: <MadeForYouImage className={classes.icon} />,
		},
		{
			id: 2,
			title: 'Modern',
			content: 'We bring the latest in Fashion Technology to empower independent ' +
			'fashion creatives.We are making slow fashion digital.Our services make ' +
			'made to order, on demand and to measure, easy and convenient.',
			icon: <ModernImage className={classes.icon} />,
		},
		{
			id: 3,
			title: 'Community driven',
			content: 'Collaboration is key to our existence. We create a very special ' +
			'experience between client and creative.We want to see fashion designers ' +
			'and garment workers thriving, treated with the respect they deserve.',
			icon: <CommunityDrivenImage className={classes.icon} />,
		},
		{
			id: 4,
			title: 'Eco-friendly',
			content: 'What does ecological health of the planet have to do with fashion? ' +
			'Everything! The production and consumption of fashion is an environmental ' +
			'disaster Made on order prevents over production and waste.',
			icon: <EcoFriendlyImage className={classes.icon} />,
		},
	]

	return (
		<Grid container>

			{/* For each item in the values array, create a new Grid item.
				Each item will contain an icon, a heading,
				content, and 'learn more' button. */}
			{values.map(values => (
				<Grid item key={values.id} xs={12} sm={6} md={3}>
					<Card elevation={0} style={{ backgroundColor: 'transparent' }}>
						<CardActionArea className={classes.gridItemStyle}>
							{/* The icon */}
							{values.icon}

							{/* The heading */}
							<Typography variant="h4" align="center" style={{ fontWeight: 'bold' }}>
								{values.title}
							</Typography>

							{/* The content */}
							<Typography align="center">
								{values.content}
							</Typography>

							{/* Learn more button */}
							<Button size="small" color="primary">
						LEARN MORE
							</Button>
						</CardActionArea>
					</Card>

				</Grid>
			))}
		</Grid>

	)
}

export default Values
