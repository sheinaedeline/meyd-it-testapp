// A page with the grid of shapes in the corner

import React from 'react'
import PropTypes from 'prop-types'
// import styling
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import custom components
import ShapePattern from '@/components/auth/ShapePattern'

const useStyles = makeStyles({
	darkRoot: {
		backgroundColor: theme.palette.primary.main,
		minHeight: '100vh',
		display: 'flex',
		width: '100%',
	},
	lightRoot: {
		backgroundColor: theme.palette.primary.lighten5,
		minHeight: '100vh',
		display: 'flex',
		width: '100%',
	},
	shapesDiv: {
		position: 'absolute',
		right: 0,
	},
	childrenDiv: {
		position: 'relative',
		zIndex: 1,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
})

/**
 *
 * @param {bool} dark - Dark mode or not
 * @returns A page with the grid of shapes in the corner
 */
const Layout = ({ dark, children }) => {
	const classes = useStyles()

	return (
		<div className={clsx(dark ? classes.darkRoot : classes.lightRoot)}>
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
	dark: PropTypes.bool,
}

export default Layout
