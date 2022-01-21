// The timeline component in "timeline" tab in makings page

import React from 'react'
import PropTypes from 'prop-types'
// import material ui components
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Slide from '@material-ui/core/Slide'
import Timeline from '@material-ui/lab/Timeline'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import Typography from '@material-ui/core/Typography'
import Zoom from '@material-ui/core/Zoom'
// import styling
import theme from '@/config/theme'
import { makeStyles } from '@material-ui/core/styles'
// import custom components
import TimelineItemDescription from './TimelineItemDescription'

const useStyles = makeStyles({
	grid: {
		display: 'flex',
		justifyContent: 'center',
	},
	timelineOpen: {
		[theme.breakpoints.down('sm')]: {
			minWidth: '100vw',
		},
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.easeInOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	timelineClosed: {
		[theme.breakpoints.down('sm')]: {
			minWidth: '100vw',
		},
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.easeInOut,
			duration: theme.transitions.duration.leavingScreen,
		}),
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
	const [selected, setSelected] = React.useState(null)

	const transitionDuration = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen,
	}

	const timelineComponent = (style) => (
		<Timeline align="alternate" className={style}>
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
							<CardActionArea onClick={() => selected === item ? setSelected(null) : setSelected(item)}>
								<CardContent>
									<Typography noWrap variant="h6" className={classes.timelineTitle}>
										{item.title}
									</Typography>

									<Typography variant="body2">{item.date}</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	)

	return (
		<div>
			{selected
			/* If something has been selected, make the timeline component only take up
					half of the screen on big screens and the other half should be the details */
				? (
					<Grid container className={classes.grid}>
						<Slide
							direction="left"
							in={selected !== null}
							unmountOnExit
						>

							<Grid item xs={12} sm={6} className={classes.timelineOpen}>
								{timelineComponent(classes.timelineOpen)}
							</Grid>
						</Slide>

						<Zoom
							in={selected !== null}
							timeout={transitionDuration}
							style={{
								transitionDelay: `${!open ? transitionDuration.exit : 0}ms`,
							}}
							unmountOnExit
						>
							<Grid item xs={12} sm={6}>
								<TimelineItemDescription item={selected} onClose={() => setSelected(null)}/>
							</Grid>

						</Zoom>
					</Grid>
				)
				/* If nothing is selected, make the timeline component take up
						 the whole screen */
				: (
					<div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
						<Slide
							direction="right"
							in={selected === null}
							unmountOnExit
						>
							{timelineComponent(classes.timelineClosed)}
						</Slide>
					</div>
				)}
		</div>
	)
}

MakingTimeline.propTypes = {
	timeline: PropTypes.array.isRequired,
}

export default MakingTimeline
