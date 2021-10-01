// The details of the item timeline item

import React from 'react'
import PropTypes from 'prop-types'
// import material ui components
import IconButton from '@material-ui/core/IconButton'
import Image from 'material-ui-image'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
// import styling
import theme from '@/config/theme'
import { makeStyles } from '@material-ui/core/styles'
// import custom components
import { XIcon } from '@/icons/user-interface'

const useStyles = makeStyles({
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
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
	xIcon: {
		padding: 0,
		margin: 0,
		alignSelf: 'end',
	},
})

/**
 *
 * @param {object} item - A timeline item
 * @returns A card containing the details of the selected timeline item
 */
const TimelineItemDescription = ({ item, onClose }) => {
	const classes = useStyles()

	return (
		<Paper elevation={0} square className={classes.paper}>

			{/* The close button */}
			<IconButton className={classes.xIcon} onClick={onClose}>
				<XIcon style={{ height: '40px' }} />
			</IconButton>

			{/* The title */}
			<Typography variant="h5" className={classes.descTitle}>
				{item.title}
			</Typography>

			{/* The date */}
			<Typography variant="body2">
				{item.date}
			</Typography>

			{/* The description (optional) */}
			{item.desc
				? (
					<Typography className={classes.descBody}>
						{item.desc}
					</Typography>
				)
				: null}

			{/* The photo (optional) */}
			{item.photo
				? <Image src={`https://source.unsplash.com/${item.photo}`}/>
				: null}
		</Paper>
	)
}

TimelineItemDescription.propTypes = {
	item: PropTypes.object.isRequired,
	onClose: PropTypes.func,
}

export default TimelineItemDescription
