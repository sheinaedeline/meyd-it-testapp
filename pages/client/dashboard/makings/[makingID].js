import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import axios from 'axios'
import Index from './index'
import MakingOverview from '@/components/clientProjects/MakingOverview'
import DetailsTabPanel from '@/components/clientProjects/DetailsTabPanel'
import list from '@/assets/dummy/makings'
import Moodboard from '@/components/clientProjects/Moodboard'
import Measurements from '@/components/clientProjects/Measurements'
import MakingTimeline from '@/components/clientProjects/MakingTimeline'

const Post = ({ children }) => {
	const router = useRouter()
	const { makingID } = router.query
	const making = list.makings.find((item) => item.id === makingID)
	const url = '/client/dashboard/makings/'

	const generateTabs = () => {
		const tabs = [
			{
				id: 0,
				text: 'moodboard',
				component: <Moodboard making={making} url={`${url}/moodboard`}/>,
			},
			{
				id: 1,
				text: 'measurements',
				component: <Measurements measurements={making.measurements}/>,
			},
			{
				id: 2,
				text: 'timeline',
				component: <MakingTimeline timeline={making.timeline} />,
			},
		]

		return tabs
	}

	return (
		<Index>
			{making
				? (
					<div>
						<MakingOverview making={making} />
						<DetailsTabPanel tabs={generateTabs()} making={making} url={`/client/dashboard/makings/${making.id}`}>
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
