import React from 'react'
import PropTypes from 'prop-types'
// import custom components
import Layout from '@/layouts/Auth'
import SuccessCard from '@/components/auth/SuccessCard'
import ShapePattern from '@/components/auth/ShapePattern'

const SuccessTemplate = ({ dark }) => {
	return (
		<Layout dark={dark}>
			<SuccessCard />

			<div style={{ zIndex: -1, transform: 'scale(-1, -1)', position: 'absolute', left: 0, bottom: 0 }}>
				<ShapePattern />
			</div>
		</Layout>
	)
}

SuccessTemplate.propTypes = {
	dark: PropTypes.bool,
}

export default SuccessTemplate
