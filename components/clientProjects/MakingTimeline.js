// The timeline component in "timeline" tab in makings page

import React from 'react'
import PropTypes from 'prop-types'
// import material ui components
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Image from 'material-ui-image'
import Paper from '@material-ui/core/Paper'
import Timeline from '@material-ui/lab/Timeline'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import Typography from '@material-ui/core/Typography'
// import styling
import theme from '@/config/theme'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
	grid: {
		display: 'flex',
		justifyContent: 'center',
	},
	timeline: {
		[theme.breakpoints.down('sm')]: {
			minWidth: '100vw',
		},
	},
	timelineTitle: {
		color: theme.palette.primary.contrastText,
	},
	paper: {
		padding: theme.spacing(2),
	},
	descTitle: {
		color: theme.palette.primary.contrastText,
		fontWeight: 'bold',
	},
	descBody: {
		color: theme.palette.primary.contrastText,
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
})

/**
 *
 * @param {array} timeline - An array of timeline objects(containing title, desc, date, photo)
 * @returns A timeline component and a paper component containing the details and photo
 */
const MakingTimeline = ({ timeline }) => {
	const classes = useStyles()
	const [selected, setSelected] = React.useState(timeline[0])

	return (
		<Grid container className={classes.grid}>
			{/* The first item is the timeline */}
			<Grid item xs={12} sm={6} className={classes.timeline}>

				<Timeline align="alternate">
					{timeline.map((item) => (
						<TimelineItem key={item.title}>

							{/* The dot */}
							<TimelineSeparator>
								<TimelineDot variant="outlined" style={{ alignSelf: 'center' }}>
									<Box style={{ width: '10px', height: '10px' }} />
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							{/* The title. When it is clicked, it has been selected and
								can display its details */}
							<TimelineContent style={{ minWidth: '40%', alignSelf: 'center' }}>
								<Card elevation={0} square>
									<CardActionArea onClick={() => setSelected(item)}>
										<CardContent>
											<Typography noWrap variant="h6" className={classes.timelineTitle}>
												{item.title}
											</Typography>

											<Typography variant="body2">{item.date}</Typography>
										</CardContent>
										{item.photo
											? <CardMedia image={`https://source.unsplash.com/${selected.photo}`} />
											: null}
									</CardActionArea>
								</Card>
							</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>
			</Grid>

			{/* The second item is the details. Display the details of the selected item */}
			<Grid item xs={12} sm={6}>
				<Paper elevation={0} square className={classes.paper}>

					{/* The title */}
					<Typography variant="h5" className={classes.descTitle}>
						{selected.title}
					</Typography>

					{/* The date */}
					<Typography variant="body2">
						{selected.date}
					</Typography>

					{/* The description (optional) */}
					{selected.desc
						? (
							<Typography className={classes.descBody}>
								{selected.desc}
							</Typography>
						)
						: null}

					{/* The photo (optional) */}
					{selected.photo
						? <Image src={`https://source.unsplash.com/${selected.photo}`}/>
						: null}
				</Paper>
			</Grid>
		</Grid>
	)
}

MakingTimeline.propTypes = {
	timeline: PropTypes.array.isRequired,
}

export default MakingTimeline
