import React from 'react'
import PropTypes from 'prop-types'
// import styling
import theme from '@/config/theme'
import { makeStyles } from '@material-ui/core/styles'
// import material ui components
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import TextField from '@material-ui/core/TextField'
// import custom components
import { TrashIcon } from '@/assets/icons/user-interface'

const useStyles = makeStyles({
	list: {
		backgroundColor: theme.palette.primary.light,
		marginTop: theme.spacing(4),
		marginLeft: theme.spacing(4),
	},
	listItem: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	listTextField: {
		width: '85%',
	},
	trashIcon: {
		width: '30px',
		height: 'auto',
	},
})

/**
 *
 * @param {key} string - The key prop for the list item
 * @param {onChangeText} func - onChange function for the TextField
 * @param {number} number - The number to be displayed on the list item avatar
 * @param {text} string - The text to be displayed on the TextField
 * @param {onDelete} func - onClick function for the trash icon
 * @returns a list item to display the description of the inspo markers
 */
const InspoMarkerText = ({ key, onChangeText, number, text, onDelete }) => {
	const classes = useStyles()

	return (
		<ListItem key={key} className={classes.listItem}>
			{/* the number */}
			<ListItemAvatar>
				<Avatar>{number}</Avatar>
			</ListItemAvatar>

			{/* the description */}
			<TextField
				className={classes.listTextField}
				multiline
				rowsMax={3}
				value={text || ''}
				onChange={onChangeText}
			/>

			{/* the trash button */}
			<ListItemSecondaryAction>
				<IconButton edge="end" onClick={onDelete}>
					<TrashIcon className={classes.trashIcon}/>
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	)
}

InspoMarkerText.propTypes = {
	key: PropTypes.string.isRequired,
	onChangeText: PropTypes.func,
	number: PropTypes.number,
	text: PropTypes.string,
	onDelete: PropTypes.func,
}

export default InspoMarkerText
