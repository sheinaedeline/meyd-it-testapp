import React from 'react'
import clsx from 'clsx'
import {
	Link,
	Button,
	Element,
} from 'react-scroll'
// import styling
import theme from '@/config/theme'
import { makeStyles } from '@material-ui/core'
// import material ui components
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
// import custom components
import Measurements from '@/components/clientProjects/Measurements'
import MakingTimeline from '@/components/clientProjects/MakingTimeline'
import Collections from '@/components/atelier/Collections'
import TagAdder from '@/components/client/dashboard/tags/tagadder'
import Gallery from './Gallery'
import list from '@/assets/dummy/makings'
import atelier from '@/assets/dummy/atelier'
import GalleryItems from '@/content/GalleryItems'

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		padding: `${theme.spacing(10)}px 15% ${theme.spacing(10)}px 15%`,
		[theme.breakpoints.down('md')]: {
			padding: `${theme.spacing(10)}px 5% ${theme.spacing(10)}px 5%`,
		},
	},
	rightContainer: {
		display: 'flex',
		maxHeight: '100%',
		marginLeft: theme.spacing(3),
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			marginTop: theme.spacing(5),
			marginLeft: 0,
		},
	},
	accordion: {
		backgroundColor: 'transparent',
		height: '100%',
		maxHeight: '100%',
	},
	accordionExpanded: {
		backgroundColor: theme.palette.primary.lighten5,
		minHeight: '30%',
		overflow: 'auto',
	},
	accordionTitle: {
		fontWeight: 'bold',
	},
	accordionDesc: {
		color: '#000',
	},
}))

const InfoSlide = () => {
	const classes = useStyles()
	const [expanded, setExpanded] = React.useState(0)
	const making = list.making
	const galleryItems = GalleryItems.filter((item) => item.id < 3)

	const accordion = [
		{
			id: 0,
			title: 'Measurements',
			details: 'Tempor non aliqua consequat Lorem non id voluptate et labore do.',
			component: <Measurements measurements={making.measurements} style={{ height: '50vh', minHeight: '500px' }}/>,
		},
		{
			id: 1,
			title: 'Timeline',
			details: 'Tempor non aliqua consequat Lorem non id voluptate et labore do.',
			component: <MakingTimeline timeline={making.timeline} />,
		},
		{
			id: 2,
			title: 'Collections',
			details: 'Tempor non aliqua consequat Lorem non id voluptate et labore do.',
			component: <Collections collections={atelier.collections}/>,
		},
		{
			id: 3,
			title: 'Tags',
			details: 'Tempor non aliqua consequat Lorem non id voluptate et labore do.',
			component: <TagAdder numToGenerate={4} initialised/>,
		},
		{
			id: 4,
			title: 'Inspirations',
			details: 'Enim id do elit aliqua est irure amet labore ullamco officia cupidatat sit.',
			component: <Gallery galleryItems={galleryItems} isCollection/>,
		},
		{
			id: 5,
			title: 'Watch Product Demo',
			details: 'Ad consectetur occaecat veniam velit.',
			component: <Paper style={{ height: '500px' }} />,
		},
	]

	const handleExpand = (panel) => (e, isExpanded) => {
		setExpanded(panel)
	}

	const renderComponent = (id) => {
		const foundItem = accordion.find((item) => item.id === id)

		if (foundItem) {
			return (
				<Paper component={Element} name="component" elevation={0}>
					{foundItem.component}
				</Paper>
			)
		}
	}

	return (
		<Grid container className={classes.root}>
			<Grid item xs={12} md={6}>
				{renderComponent(expanded)}
			</Grid>

			<Grid item xs={12} md={6}>
				<Grid container className={classes.rightContainer}>
					{accordion.map((item) => (
						<Grid item key={item.id} xs={6} md={12}>
							<Accordion
								component={Link}
								to="component"
								smooth="true"
								elevation={0}
								className={clsx(item.id === expanded ? classes.accordionExpanded : classes.accordion)}
								expanded={expanded === item.id}
								disabled={expanded === item.id}
								onChange={handleExpand(item.id)}
							>
								<AccordionSummary>
									<Typography className={classes.accordionTitle}>{item.title}</Typography>
								</AccordionSummary>

								<AccordionDetails style={{ overflow: 'auto' }}>
									<Typography className={classes.accordionDesc}>{item.details}</Typography>
								</AccordionDetails>
							</Accordion>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default InfoSlide
