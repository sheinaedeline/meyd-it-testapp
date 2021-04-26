/**
 * The tabs in the projects page
 */

import theme from '@/config/theme'
import React from 'react'
import { useRouter } from 'next/router'
import {
	makeStyles,
	withStyles,
} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SwipeableViews from 'react-swipeable-views'
// import custom components
import Slugify from '@/config/Slugify'

const TabPanel = (props) => {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`details-tabpanel-${index}`}
			aria-labelledby={`details-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

// Props validation to make sure correct prop types are being used
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	tabPanel: {
		backgroundColor: theme.palette.primary.light,
	},
}))

/**
 *
 * @param {array} tabs - The array of tabs it should display (contains the tab text and component to be displayed)
 * @param {number} makingID - The making ID in the URL
 * @returns The tabs underneath the making overview
 */
const DetailsTabPanel = ({ children, tabs, makingID }) => {
	const classes = useStyles()
	const router = useRouter()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
		event.preventDefault()
	}

	React.useEffect(() => {
		router.push(`/client/dashboard/makings/${makingID}/${Slugify(tabs[value].text)}`, undefined, { shallow: true })
	}, [value])

	const smallScreen = useMediaQuery(theme.breakpoints.down('xs'))

	return (
		<div className={classes.root}>
			<AppBar position="static" elevation={0}>
				<Tabs
					className={classes.tabPanel}
					variant={smallScreen ? 'scrollable' : 'fullWidth'}
					value={value}
					onChange={handleChange}
					scrollButtons="auto"
					aria-label="details tabs"
				>
					{tabs.map((item) => (
						<Tab
							label={item.text}
							key={'tab' + item.id}
						/>
					))}
				</Tabs>
			</AppBar>
			{tabs.map((item) => (
				<TabPanel value={value} index={item.id} key={'tab' + item.id}>
					{item.component}
				</TabPanel>
			))}
		</div>
	)
}

// Props validation to make sure correct prop types are being used
DetailsTabPanel.propTypes = {
	children: PropTypes.node,
	id: PropTypes.number,
	tabs: PropTypes.array.isRequired,
	makingID: PropTypes.string.isRequired,
}

export default DetailsTabPanel