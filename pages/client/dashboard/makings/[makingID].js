import React from 'react'
import { useRouter } from 'next/router'

//  import custom components
import list from '@/assets/dummy/makings'
import Index from './index'
import MakingOverview from '@/components/clientProjects/MakingOverview'

const Post = () => {
	const router = useRouter()
	const { makingID } = router.query

	const [foundMaking, setFoundMaking] = React.useState(false)
	const making = list.makings.find((item) => item.id === makingID)

	React.useEffect(() => {
		// Check if item exists
		if (making) {
			setFoundMaking(true)
		}
	})

	return (
		<Index>
			{foundMaking
				? (<MakingOverview making={making}/>)
				: (<p>Item not found</p>)}
		</Index>
	)
}

export default Post
