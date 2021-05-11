import React from 'react'
import PropTypes from 'prop-types'
// import styling
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import custom components
import ShapePattern from '@/components/auth/ShapePattern'

const useStyles = makeStyles({
	root: {
		backgroundColor: theme.palette.primary.main,
		minHeight: '100vh',
		display: 'flex',
	},
	shapesDiv: {
		position: 'absolute',
		right: 0,
	},
	childrenDiv: {
		position: 'relative',
		zIndex: 1,
	},
})

const Layout = ({ children }) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div className={classes.shapesDiv}>
				<ShapePattern />
			</div>
			<div className={classes.childrenDiv}>
				{children}
			</div>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node,
}

export default Layout
