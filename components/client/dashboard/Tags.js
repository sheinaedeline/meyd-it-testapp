/** 
Making a new Project is in 3 steps. Step 1 involves 
getting the required tags and picture for the project
*/

import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { Typography, Box } from '@material-ui/core'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import CheckIcon from '@material-ui/icons/Check'
import UploadButton from '@/assets/icons/user-interface/upload.svg'
import React from 'react'

import TagAdder from './tags/tagadder'
//import UploadImages from '@/components/upload-images.component'
import UploadImages from '@/components/image-upload/App'

const Tags = () => {
	return (
		<div>
			<div className="container" style={{ display: 'block' }}>
				<UploadImages />
			</div>

			<div style={{ display: 'block', clear: 'both' }}>
				<Typography
					align="center"
					style={{
						margin: '50px',
						color: '#757575',
						fontSize: '14px',
						overflow: 'hidden',
						display: 'block',
						whiteSpace: 'normal',
					}}
				>
					or start adding tags right away...
				</Typography>
			</div>

			<TagAdder />
		</div>
	)
}

export default Tags
