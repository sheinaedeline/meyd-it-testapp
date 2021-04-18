import React from 'react'
import { useRouter } from 'next/router'

import Post from '../[makingID]'
import DetailsTabPanels from '@/components/clientProjects/DetailsTabPanel'

const tabs = () => {
	const router = useRouter()
	const { tabs } = router.query

	return (
		<Post>
      hello {tabs}
		</Post>
	)
}

export default tabs
