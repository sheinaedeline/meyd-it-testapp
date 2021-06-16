import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Post from '../[makingID]'
import DetailsTabPanels from '@/components/clientProjects/DetailsTabPanel'

const tabs = ({ children }) => {
	const router = useRouter()
	const { tabs } = router.query

	return (
		// <div>hello</div>
		<Post>
			{children}
		</Post>
	)
}

tabs.propTypes = {
	children: PropTypes.node,
}

export default tabs
