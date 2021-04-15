const list = [
	{
		id: 1,
		title: "Armin's Halloween Holiday",
		description: 'Et cillum mollit eu culpa magna sit. Aliqua ad non sint est veniam non nostrud est occaecat deserunt dolore. Irure ipsum tempor eiusmod culpa deserunt ex eiusmod. Qui ea Lorem pariatur tempor sunt velit eiusmod cillum minim reprehenderit aliquip labore fugiat. Consectetur reprehenderit aute minim cillum amet mollit nisi ex. Consectetur commodo pariatur qui esse consequat et enim magna consequat Lorem mollit fugiat cillum commodo.',
		photoid: 'tBAsD_VnxCY',
	},
	{
		id: 2,
		title: 'Cookie Commemoration With Kevin',
		description: 'Et cillum mollit eu culpa magna sit. Aliqua ad non sint est veniam non nostrud est occaecat deserunt dolore. Irure ipsum tempor eiusmod culpa deserunt ex eiusmod. Qui ea Lorem pariatur tempor sunt velit eiusmod cillum minim reprehenderit aliquip labore fugiat. Consectetur reprehenderit aute minim cillum amet mollit nisi ex. Consectetur commodo pariatur qui esse consequat et enim magna consequat Lorem mollit fugiat cillum commodo.',
	},
	{
		id: 3,
		title: 'Cosplay Carousal With Sushi',
		description: 'Et cillum mollit eu culpa magna sit. Aliqua ad non sint est veniam non nostrud est occaecat deserunt dolore. Irure ipsum tempor eiusmod culpa deserunt ex eiusmod. Qui ea Lorem pariatur tempor sunt velit eiusmod cillum minim reprehenderit aliquip labore fugiat. Consectetur reprehenderit aute minim cillum amet mollit nisi ex. Consectetur commodo pariatur qui esse consequat et enim magna consequat Lorem mollit fugiat cillum commodo.',
	},
	{
		id: 4,
		title: "Nicole's Pump It Up Party",
		description: 'Et cillum mollit eu culpa magna sit. Aliqua ad non sint est veniam non nostrud est occaecat deserunt dolore. Irure ipsum tempor eiusmod culpa deserunt ex eiusmod. Qui ea Lorem pariatur tempor sunt velit eiusmod cillum minim reprehenderit aliquip labore fugiat. Consectetur reprehenderit aute minim cillum amet mollit nisi ex. Consectetur commodo pariatur qui esse consequat et enim magna consequat Lorem mollit fugiat cillum commodo.',
	},
	{
		id: 5,
		title: "Shashank's Bachelor ",
		description: 'Et cillum mollit eu culpa magna sit. Aliqua ad non sint est veniam non nostrud est occaecat deserunt dolore. Irure ipsum tempor eiusmod culpa deserunt ex eiusmod. Qui ea Lorem pariatur tempor sunt velit eiusmod cillum minim reprehenderit aliquip labore fugiat. Consectetur reprehenderit aute minim cillum amet mollit nisi ex. Consectetur commodo pariatur qui esse consequat et enim magna consequat Lorem mollit fugiat cillum commodo.',
	},
	{
		id: 6,
		title: 'Painting It Pink With Ryan',
		description: 'Et cillum mollit eu culpa magna sit. Aliqua ad non sint est veniam non nostrud est occaecat deserunt dolore. Irure ipsum tempor eiusmod culpa deserunt ex eiusmod. Qui ea Lorem pariatur tempor sunt velit eiusmod cillum minim reprehenderit aliquip labore fugiat. Consectetur reprehenderit aute minim cillum amet mollit nisi ex. Consectetur commodo pariatur qui esse consequat et enim magna consequat Lorem mollit fugiat cillum commodo.',
	},
	{
		id: 7,
		title: "Archit's Footwear Festival",
		description: 'Et cillum mollit eu culpa magna sit. Aliqua ad non sint est veniam non nostrud est occaecat deserunt dolore. Irure ipsum tempor eiusmod culpa deserunt ex eiusmod. Qui ea Lorem pariatur tempor sunt velit eiusmod cillum minim reprehenderit aliquip labore fugiat. Consectetur reprehenderit aute minim cillum amet mollit nisi ex. Consectetur commodo pariatur qui esse consequat et enim magna consequat Lorem mollit fugiat cillum commodo.',
	},
]

export default {
	makings: list,
	making: list[0],
}

// Used in getStaticPaths function in index.js of makings page
export function getAllMakingIDs () {
	// Returns an array that looks like this:
	// [
	//   {
	//     params: {
	//       id: 'ssg-ssr'
	//     }
	//   },
	//   {
	//     params: {
	//       id: 'pre-rendering'
	//     }
	//   }
	// ]

	// This function must return an object with params key and the id
	return list.map(making => {
		return {
			params: {
				id: making.id.toString(),
			},
		}
	})
}

export function getMakingData (id) {
	const item = list.find((item) => item.id === id)

	return item
}
