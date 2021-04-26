const list = [
	{
		id: '1',
		title: "Armin's Halloween Holiday",
		tags: ['Costume', 'Halloween'],
		budget: '50',
		location: 'El Camino, Wynyard',
		description: 'Et cillum mollit eu culpa magna sit. Aliqua ad non sint est veniam non nostrud est occaecat deserunt dolore. Irure ipsum tempor eiusmod culpa deserunt ex eiusmod. Qui ea Lorem pariatur tempor sunt velit eiusmod cillum minim reprehenderit aliquip labore fugiat. Consectetur reprehenderit aute minim cillum amet mollit nisi ex. Consectetur commodo pariatur qui esse consequat et enim magna consequat Lorem mollit fugiat cillum commodo.',
		photoid: 'tBAsD_VnxCY',
		moodboard: ['4WHK59SS-Is', 'aLDuLRjZknE', '9XAnXWHu9_4', 'MYRG0ptGh50', 'NGucyc4mOdk', 'F_p4sI8Vj0Q'],
		measurements: [
			{
				id: 0,
				part: 'Bust',
				approx: true,
				size: 86,
			},
			{
				id: 1,
				part: 'Neck',
				approx: true,
				size: 23,
			},
			{
				id: 2,
				part: 'Waist',
				approx: true,
				size: 75,
			},
			{
				id: 3,
				part: 'Wrist',
				approx: false,
				size: 12,
			},
			{
				id: 4,
				part: 'Bicep',
				approx: false,
				size: 18,
			},
		],
		timeline: [
			{
				title: 'Discussion',
				desc: 'Minim adipisicing elit do sunt veniam consectetur ipsum id. Pariatur non eu culpa ad. Culpa mollit et consectetur aute reprehenderit cillum mollit aliqua deserunt ut.',
				date: '10/4/21',
				photo: 'LPWl2pEVGKc',
			},
			{
				title: 'Measurements',
				desc: 'Excepteur exercitation eiusmod minim magna cupidatat esse.',
				date: '12/4/21',
			},
			{
				title: 'Mask First Impressions',
				desc: 'Exercitation deserunt anim culpa dolore commodo cillum ut ut. Ea aliquip aliqua aliquip qui pariatur qui dolor quis reprehenderit ex sit quis deserunt officia. Amet nostrud sit aliquip ea ut ut laboris tempor aliqua laboris do irure excepteur proident. Duis cillum incididunt enim id reprehenderit officia in. Nulla commodo cillum esse eiusmod ad et ad irure. Sit amet exercitation nulla proident laboris id enim nostrud occaecat dolore.',
				date: '17/4/21',
				photo: '0EI_4R2r0qg',
			},
		],
	},
	{
		id: '2',
		title: 'Cookie Commemoration With Kevin',
		description: 'Et cillum mollit eu culpa magna sit. Aliqua ad non sint est veniam non nostrud est occaecat deserunt dolore. Irure ipsum tempor eiusmod culpa deserunt ex eiusmod. Qui ea Lorem pariatur tempor sunt velit eiusmod cillum minim reprehenderit aliquip labore fugiat. Consectetur reprehenderit aute minim cillum amet mollit nisi ex. Consectetur commodo pariatur qui esse consequat et enim magna consequat Lorem mollit fugiat cillum commodo.',
	},
	{
		id: '3',
		title: 'Cosplay Carousal With Sushi',
		description: 'Et cillum mollit eu culpa magna sit. Aliqua ad non sint est veniam non nostrud est occaecat deserunt dolore. Irure ipsum tempor eiusmod culpa deserunt ex eiusmod. Qui ea Lorem pariatur tempor sunt velit eiusmod cillum minim reprehenderit aliquip labore fugiat. Consectetur reprehenderit aute minim cillum amet mollit nisi ex. Consectetur commodo pariatur qui esse consequat et enim magna consequat Lorem mollit fugiat cillum commodo.',
	},
	{
		id: '4',
		title: "Nicole's Pump It Up Party",
		description: 'Et cillum mollit eu culpa magna sit. Aliqua ad non sint est veniam non nostrud est occaecat deserunt dolore. Irure ipsum tempor eiusmod culpa deserunt ex eiusmod. Qui ea Lorem pariatur tempor sunt velit eiusmod cillum minim reprehenderit aliquip labore fugiat. Consectetur reprehenderit aute minim cillum amet mollit nisi ex. Consectetur commodo pariatur qui esse consequat et enim magna consequat Lorem mollit fugiat cillum commodo.',
	},
	{
		id: '5',
		title: "Shashank's Bachelor Bonanza",
		description: 'Et cillum mollit eu culpa magna sit. Aliqua ad non sint est veniam non nostrud est occaecat deserunt dolore. Irure ipsum tempor eiusmod culpa deserunt ex eiusmod. Qui ea Lorem pariatur tempor sunt velit eiusmod cillum minim reprehenderit aliquip labore fugiat. Consectetur reprehenderit aute minim cillum amet mollit nisi ex. Consectetur commodo pariatur qui esse consequat et enim magna consequat Lorem mollit fugiat cillum commodo.',
	},
	{
		id: '6',
		title: 'Painting It Pink With Ryan',
		description: 'Et cillum mollit eu culpa magna sit. Aliqua ad non sint est veniam non nostrud est occaecat deserunt dolore. Irure ipsum tempor eiusmod culpa deserunt ex eiusmod. Qui ea Lorem pariatur tempor sunt velit eiusmod cillum minim reprehenderit aliquip labore fugiat. Consectetur reprehenderit aute minim cillum amet mollit nisi ex. Consectetur commodo pariatur qui esse consequat et enim magna consequat Lorem mollit fugiat cillum commodo.',
	},
	{
		id: '7',
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
