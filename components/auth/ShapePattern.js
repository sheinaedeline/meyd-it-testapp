// The grid of shapes in the corner of the auth page

import React from 'react'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import material ui components
import Box from '@material-ui/core/Box'

const shapeSize = '13vw'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'row',
	},
	columnDiv: {
		display: 'flex',
		flexDirection: 'column',
	},
	topLeft: {
		backgroundColor: theme.palette.primary.darken3,
		height: shapeSize,
		width: shapeSize,
		borderStartStartRadius: 'inherit',
		borderEndEndRadius: 'inherit',
	},
	topMid: {
		backgroundColor: theme.palette.primary.lighten2,
		height: shapeSize,
		width: shapeSize,
		borderStartEndRadius: 'inherit',
	},
	midMid: {
		backgroundColor: theme.palette.primary.darken2,
		height: shapeSize,
		width: shapeSize,
	},
	topRight: {
		backgroundColor: theme.palette.primary.darken4,
		height: shapeSize,
		width: shapeSize,
	},
	midRight: {
		backgroundColor: theme.palette.primary.lighten3,
		height: shapeSize,
		width: shapeSize,
		borderEndStartRadius: 'inherit',
		borderStartEndRadius: 'inherit',
	},
	secondLastRight: {
		backgroundColor: theme.palette.primary.lighten1,
		height: shapeSize,
		width: shapeSize,
	},
	bottomRight: {
		backgroundColor: theme.palette.primary.lighten4,
		height: shapeSize,
		width: shapeSize,
		borderStartStartRadius: 'inherit',
		borderStartEndRadius: 'inherit',
		borderEndEndRadius: 'inherit',
	},
})

/**
 *
 * @returns The grid of shapes on the top right of the auth pages
 */
const ShapePattern = () => {
	const classes = useStyles()

	const shape = (className) => (
		<Box className={className} borderRadius={'50%'} boxShadow={3}/>
	)

	return (
		<div className={classes.root}>
			{/* left */}
			{shape(classes.topLeft)}

			{/* middle */}
			<div className={classes.columnDiv}>
				{shape(classes.topMid)}
				{shape(classes.midMid)}
			</div>

			{/* right */}
			<div className={classes.columnDiv}>
				{shape(classes.topRight)}
				{shape(classes.midRight)}
				{shape(classes.secondLastRight)}
				<Box className={classes.bottomRight} borderRadius={'100%'} boxShadow={3}/>
			</div>
		</div>
	)
}

export default ShapePattern
