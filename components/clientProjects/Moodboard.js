import React from 'react'
import { PropTypes } from 'prop-types'

import Gallery from '@/components/homepage/Gallery'

/**
 *
 * @param {object} making - The making that the component should fetch its details from
 * @returns The moodboard component with the masonry gallery
 */
const Moodboard = ({ making }) => {
	return (
		<div>
			<Gallery galleryItems={making.moodboard} photoOnly={true} isCollection={false} buttonActive={false}/>
		</div>
	)
}

Moodboard.propTypes = {
	making: PropTypes.object.isRequired,
}

export default Moodboard
