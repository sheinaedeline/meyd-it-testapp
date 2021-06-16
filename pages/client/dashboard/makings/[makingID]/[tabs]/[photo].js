import React from 'react'
import { useRouter } from 'next/router'
// import custom components
import Post from '../../[makingID]'

const photo = () => {
	const router = useRouter()
	const { photo } = router.query

	return (
		<Post>
			hello {photo}
		</Post>
	)
}

export default photo
