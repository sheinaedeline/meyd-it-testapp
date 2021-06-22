import React from 'react'
import { PropTypes } from 'prop-types'
import { useRouter } from 'next/router'
// import stylings
import theme from '@/config/theme'
import { makeStyles } from '@material-ui/core/styles'
// import material ui components
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
// import custom components
import Gallery from '@/components/homepage/Gallery'
import PhotoDetails from './PhotoDetails'

const useStyles = makeStyles({
	card: {
		margin: theme.spacing(2),
	},
	media: {
		height: 'auto',
		minWidth: '100%',
	},
})

/**
 *
 * @param {object} making - The making that the component should fetch its details from
 * @returns The moodboard component with the masonry gallery
 */
const Moodboard = ({ making, url }) => {
	const classes = useStyles()
	// const router = useRouter()
	const [isClicked, setIsClicked] = React.useState(false)
	const [selectedPhoto, setSelectedPhoto] = React.useState('')
	const handlePhotoClick = (photo) => {
		// router.push(`${url}/${photo}`, undefined, { shallow: true })
		setIsClicked(!isClicked)
		setSelectedPhoto(`https://source.unsplash.com/${photo}`)
		console.log(isClicked)
	}

	return (
		<div>
			{!isClicked
				? (
					<ResponsiveMasonry
						columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
						gutter="0"
					>
						<Masonry gutter="0">
							{making.moodboard.map((item, index) => (
								<Card key={index} className={classes.card} elevation={0}>
									<CardActionArea onClick={() => handlePhotoClick(item)}>
										<CardMedia
											component="img"
											className={classes.media}
											src={`https://source.unsplash.com/${item}`}
										/>
									</CardActionArea>
								</Card>
							))}
						</Masonry>
					</ResponsiveMasonry>
				)
				: <PhotoDetails photo={selectedPhoto} />}
		</div>
	)
}

Moodboard.propTypes = {
	making: PropTypes.object.isRequired,
	url: PropTypes.string,
}

export default Moodboard
