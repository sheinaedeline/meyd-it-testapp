import React from 'react'
import PropTypes from 'prop-types'
// import custom components
import Layout from '@/layouts/Dashboard'
import Overview from '@/components/atelier/Overview'
import DetailsTabPanel from '@/components/clientProjects/DetailsTabPanel'
// import icons
import {
	BellIcon,
	HomeIcon,
	SettingsIcon,
} from '@/icons/user-interface'
import {
	InstagramIcon,
	LinkedInIcon,
	TwitterIcon,
} from '@/icons/brands'
import { CalendarIcon } from '@/icons/time'
import { HashIcon } from '@/icons/misc'

const Index = ({ children }) => {
	// The list of directories for the dashboard drawer
	const navDirectories = [
		{
			icon: BellIcon,
			href: '/Index',
			text: 'Notifications',
		},
		{
			icon: HomeIcon,
			href: '',
			text: 'Atelier',
		},
		{
			icon: CalendarIcon,
			href: '/Index',
			text: 'Calendar',
		},
		{
			icon: HashIcon,
			href: '/Index',
			text: 'Get Inspired',
		},
		{
			icon: SettingsIcon,
			href: '/Index',
			text: 'Settings',
		},
	]

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

	const tabs = [
		{
			id: 0,
			text: 'collections',
			component: <p>collections</p>,
		},
		{
			id: 1,
			text: 'makings',
			component: <p>Makings</p>,
		},
		{
			id: 2,
			text: 'creatives',
			component: <p>creatives</p>,
		},
	]

	return (
		<Layout directories={navDirectories}>
			<Overview details={overviewDetails} />
			<DetailsTabPanel tabs={tabs} url={'/creative/atelier'}/>
			{children}
		</Layout>
	)
}

Index.propTypes = {
	children: PropTypes.node,
}

export default Index
