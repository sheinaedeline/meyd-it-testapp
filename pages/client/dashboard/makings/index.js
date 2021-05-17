// The page that shows the full details of the selected client project

import React from 'react'
import PropTypes from 'prop-types'
// import custom components
import ClientLayout from '@/layouts/Client'

const Index = ({ children }) => {
	return (
		<ClientLayout>
			{children}
		</ClientLayout>
	)
}

Index.propTypes = {
	children: PropTypes.node,
}

export default Index
