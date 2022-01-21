// the landing point of the react app

// import layout
import Layout from '@/layouts/Default'
// import custom components
import Hero from '@/components/homepage/Hero'
import InfoSlide from '@/components/homepage/InfoSlide'
import Values from '@/components/homepage/Values'
import MakersGrid from '@/components/homepage/MakersGrid'
import Questionnaire from '@/components/homepage/Questionnaire'

export default function Home () {
	return (
		<Layout>
			<Hero />
			<InfoSlide />
			<Values />
			<MakersGrid />
			<Questionnaire />
		</Layout>
	)
}
