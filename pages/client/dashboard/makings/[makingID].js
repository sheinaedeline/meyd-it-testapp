import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import axios from 'axios'
import Index from './index'
import MakingOverview from '@/components/clientProjects/MakingOverview'
import DetailsTabPanel from '@/components/clientProjects/DetailsTabPanel'
import list from '@/assets/dummy/makings'

const Post = ({ children }) => {
	const router = useRouter()
	const { makingID } = router.query
	const making = list.makings.find((item) => item.id === makingID)

	return (
		<Index>
			{making
				? (
					<div>
						<MakingOverview making={making} />
						<DetailsTabPanel making={making} url={`/client/dashboard/makings/${making.id}`}>
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
	making: PropTypes.object,
}

// export const getServerSideProps = async ({ query: { makingID } }) => {
// 	const url = `http://localhost:1337/makings/${makingID}`
// 	const res = await axios.get(url)
// 	const making = res.data

// 	return { props: { making } }
// }

export default Post
