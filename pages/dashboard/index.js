/* eslint-disable react/prop-types */
import React from 'react'

export default function Dashboard ({ test }) {
	return <div>The test is {test}</div>
}

export async function getServerSideProps ({ query }) {
	console.table(query)
	return { props: { test: 'Yo' } }
}
