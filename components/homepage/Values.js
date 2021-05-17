/* This is the company values on the homepage i.e. Made for you, eco-friendly, etc */

import React from 'react'
import clsx from 'clsx'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import MUI components
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const text = [
	{
		id: 1,
		title: 'Made for you',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
			'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' +
			'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
			'voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	},
	{
		id: 2,
		title: 'Eco-friendly',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
			'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' +
			'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
			'voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	},
	{
		id: 3,
		title: 'Community driven',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
			'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' +
			'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
			'voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	},
	{
		id: 4,
		title: 'Modern',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
			'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut' +
			'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in' +
			'voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	},
]

const useStyles = makeStyles({
	gridItemStyle: {
		height: '80vh',
	},
	purpScheme: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.secondary,
	},
	whiteScheme: {
		backgroundColor: theme.palette.primary.lighten5,
		color: theme.palette.primary.contrastText,
	},
	purpButton: {
		color: theme.palette.primary.lighten5,
	},
	whiteButton: {
		color: theme.palette.primary.main,
	},
})

const Values = () => {
	const classes = useStyles()

	return (
		<Grid container spacing={3} style={{ padding: 0, width: '100%' }}>

			{/* For each item in the text array, create a new Grid item.
				Each item will be a grid container with a heading,
				content, and 'learn more' button. */}
			{text.map(text => (
				<Grid item key={text.id} className={classes.gridItemStyle} md={6} xs={12}>

					{/* Container settings */}
					<Grid container
						justify="center" alignContent="center" alignItems="center"
						className={clsx(classes.purpScheme, {
							[classes.whiteScheme]: text.id === 1 || text.id % 4 === 0,
						})}
						direction="column"
						style={{ height: '100%' }}>

						{/* The heading */}
						<Grid item>
							<Typography variant="h4" align="center" style={{ fontWeight: 'bold' }}>
								{text.title}
							</Typography>
						</Grid>

						{/* The content */}
						<Grid item style={{ width: '80%', padding: 20 }}>
							<Typography align="center">
								{text.content}
							</Typography>
						</Grid>

						{/* Learn more button */}
						<Grid item>
							<Button size="small" style={{ justify: 'center', opacity: '60%' }}
								className={clsx(classes.purpButton, {
									[classes.whiteButton]: text.id === 1 || text.id % 4 === 0,
								})}>
								LEARN MORE</Button>
						</Grid>

					</Grid>
				</Grid>
			))}
		</Grid>

	)
}

export default Values
