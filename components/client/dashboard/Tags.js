/**
Making a new Project is in 3 steps. Step 1 involves
getting the required tags and picture for the project
*/

import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
import { Typography } from '@material-ui/core'
// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import React from 'react'

import TagAdder from './tags/tagadder'
import UploadImages from '@/components/client/dashboard/tags/uploadImage'

const useStyles = makeStyles({
	addTagsText: {
		margin: theme.spacing(8),
		color: theme.palette.primary.grey,
		fontSize: '14px',
		display: 'block',
		whiteSpace: 'normal',
	},
})

const Tags = () => {
	const classes = useStyles()

	return (
		<div>
			<UploadImages />

			<div style={{ display: 'block', clear: 'both' }}>
				<Typography align="center" className={classes.addTagsText}>
					or start adding tags right away...
				</Typography>
			</div>

			<TagAdder />
		</div>
	)
}

export default Tags
