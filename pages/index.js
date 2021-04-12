// the landing point of the react app

// import layout
import Layout from '@/layouts/Default'
// import custom components
import Gallery from '@/components/homepage/Gallery'
import IconGrid from '@/components/homepage/IconGrid'
import Introduction from '@/components/homepage/Introduction'
import Values from '@/components/homepage/Values'

export default function Home () {
	return (
		<Layout>
			<Introduction />
			<IconGrid />
			<Values />
			<Gallery />
		</Layout>
	)
}
