/* eslint-disable react/prop-types */
import React from 'react'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
// import MUI components
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import SvgIcon from '@material-ui/core/SvgIcon'
// import icons
import { MenuIcon } from '@/icons/ui'

const useStyles = makeStyles({
	list: {
		width: 250,
	},
})

const DefaultNavDrawer = ({ children }) => {
	const classes = useStyles()
	const [state, setState] = React.useState({
		left: false,
	})

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return
		}
		setState({ ...state, [anchor]: open })
	}

	const list = (anchor) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<List>
				{children.map((text, index) => (
					<ListItem button key={'list-item-' + index}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	)

	return (
		<div>
			<Box display={{ xs: 'block', md: 'none' }}>
				<Button onClick={toggleDrawer('left', true)}>
					<SvgIcon component={MenuIcon} color="secondary" />
				</Button>
			</Box>
			<Drawer anchor="left" open={state.left} onClose={toggleDrawer('left', false)}>
				{list('left')}
			</Drawer>
		</div>
	)
}

export default DefaultNavDrawer
