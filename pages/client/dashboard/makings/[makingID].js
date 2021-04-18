import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

//  import custom components
import list from '@/assets/dummy/makings'
import Index from './index'
import MakingOverview from '@/components/clientProjects/MakingOverview'
import DetailsTabPanel from '@/components/clientProjects/DetailsTabPanel'

import { Link } from '@material-ui/core'

const Post = ({ children }) => {
	const router = useRouter()
	const { makingID } = router.query

	const [foundMaking, setFoundMaking] = React.useState(false)
	const making = list.makings.find((item) => item.id === makingID)

	const tabs = [
		{
			id: 0,
			text: 'moodboard',
		},
		{
			id: 1,
			text: 'measurements',
		},
		{
			id: 2,
			text: 'timeline',
		},
	]

	React.useEffect(() => {
		// Check if item exists
		if (making) {
			setFoundMaking(true)
		}
	})

	return (
		<Index>
			{foundMaking
				? (
					<div>
						<MakingOverview making={making} />
						<DetailsTabPanel tabs={tabs} makingID={makingID}>
							{children}
						</DetailsTabPanel>
					</div>
				)
				: (<p>Item not found</p>)}
		</Index>
	)
}

// Props validation to make sure correct prop types are being used
Post.propTypes = {
	children: PropTypes.node,
}

export default Post
