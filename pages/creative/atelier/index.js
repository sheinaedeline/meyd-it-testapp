import React from 'react'
import PropTypes from 'prop-types'
// import custom components
import atelier from '@/assets/dummy/atelier'
import Collections from '@/components/atelier/Collections'
import Creatives from '@/components/atelier/Creatives'
import DetailsTabPanel from '@/components/clientProjects/DetailsTabPanel'
import Layout from '@/layouts/Dashboard'
import Makings from '@/components/atelier/Makings'
import Overview from '@/components/atelier/Overview'
// import icons
import {
	BellIcon,
	HomeIcon,
	SettingsIcon,
} from '@/icons/user-interface'
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

	const tabs = [
		{
			id: 0,
			text: 'collections',
			component: <Collections collections={atelier.collections}/>,
		},
		{
			id: 1,
			text: 'makings',
			component: <Makings makings={atelier.makings} />,
		},
		{
			id: 2,
			text: 'creatives',
			component: <Creatives creatives={atelier.creatives} />,
		},
	]

	return (
		<Layout directories={navDirectories}>
			<Overview details={atelier.overviewDetails} />
			<DetailsTabPanel tabs={tabs} url={'/creative/atelier'}/>
			{children}
		</Layout>
	)
}

Index.propTypes = {
	children: PropTypes.node,
}

export default Index
