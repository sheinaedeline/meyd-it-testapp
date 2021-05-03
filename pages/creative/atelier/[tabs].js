import React from 'react'
import { useRouter } from 'next/router'

import Index from './index'

const tabs = () => {
	const router = useRouter()
	const { tabs } = router.query

	return (
		<Index>
			<p>hello {tabs}</p>
		</Index>
	)
}

export default tabs
