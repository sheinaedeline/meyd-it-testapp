import {
	InstagramIcon,
	LinkedInIcon,
	TwitterIcon,
} from '@/icons/brands'
import list from '@/assets/dummy/makings'

const overviewDetails = {
	name: 'Laura',
	story: 'Mollit ut quis commodo officia enim consectetur deserunt et non duis quis aute elit. Eu laborum enim nostrud proident id aliqua labore magna magna reprehenderit. Reprehenderit culpa duis aliquip enim occaecat sint excepteur sunt cupidatat culpa.' +
			'Ad nisi veniam officia officia occaecat enim duis nostrud irure consectetur sint. Aute voluptate exercitation sint aute nulla culpa nulla qui commodo sunt. Sunt ut ea amet labore esse qui proident proident fugiat labore duis. Esse anim quis officia cillum et consectetur amet ut occaecat incididunt. Exercitation Lorem sint cillum mollit excepteur ipsum in id ullamco velit aute in nulla ad. Ea consequat incididunt quis anim.' +
			'Voluptate amet do aute ut est eu labore adipisicing laborum excepteur anim nulla. Tempor ut eu proident laboris. Ipsum anim minim adipisicing consectetur irure elit sunt dolore commodo aute officia. Ipsum sint fugiat magna cupidatat velit ullamco ea commodo ad. Pariatur velit laborum eiusmod sit elit Lorem sit nulla. Nulla irure commodo laborum ad ea consectetur magna.',
	socials: [
		{
			name: 'Instagram',
			icon: InstagramIcon,
			href: '/Index',
		},
		{
			name: 'LinkedIn',
			icon: LinkedInIcon,
			href: '/Index',
		},
		{
			name: 'Twitter',
			icon: TwitterIcon,
			href: '/Index',
		},
	],
}

const collections = [
	{
		name: 'Winter',
		id: '1330586',
	},
	{
		name: 'Special Occasion',
		id: '9508416',
	},
	{
		name: 'Vintage Inspired',
		id: '589987',
	},
]

const makingArr = (numMakings) => {
	const arr = [0, 0, 0]

	for (let i = 0; i < numMakings; i++) {
		arr[i] = list.makings[i]
	}
	return arr
}

const makings = makingArr(6)

const creatives = [
	{
		name: 'Laura Simpson',
		role: 'founder',
		photoid: 'Xz8zwurX_SA',
	},
	{
		name: 'Emma Green',
		role: 'tailor',
		photoid: 'eNm7-NlAVo4',
	},
	{
		name: 'John Fischer',
		role: 'designer',
		photoid: 'Qy4wpL2B4ac',
	},
]

export default {
	overviewDetails: overviewDetails,
	collections: collections,
	makings: makings,
	creatives: creatives,
}
