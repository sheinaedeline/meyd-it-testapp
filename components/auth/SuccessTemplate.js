// The template for the whole success page

import React from 'react'
import PropTypes from 'prop-types'
// import custom components
import Layout from '@/layouts/Auth'
import ShapePattern from '@/components/auth/ShapePattern'
import SuccessCard from '@/components/auth/SuccessCard'

/**
 *
 * @param {bool} dark - Dark mode or not
 * @returns The template for the whole success page
 */
const SuccessTemplate = ({ dark, href }) => {
	return (
		<Layout dark={dark}>
			<SuccessCard href={href}/>

			<div style={{ zIndex: -1, transform: 'scale(-1, -1)', position: 'absolute', left: 0, bottom: 0 }}>
				<ShapePattern />
			</div>
		</Layout>
	)
}

SuccessTemplate.propTypes = {
	dark: PropTypes.bool,
	href: PropTypes.string,
}

export default SuccessTemplate
