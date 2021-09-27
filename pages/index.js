// the landing point of the react app

// import layout
import Layout from '@/layouts/Default'
// import custom components
import Gallery from '@/components/homepage/Gallery'
import IconGrid from '@/components/homepage/IconGrid'
import Hero from '@/components/homepage/Hero'
import Values from '@/components/homepage/Values'
// import content
import GalleryItems from '@/content/GalleryItems'

export default function Home () {
	return (
		<Layout>
			<Hero />
			<IconGrid />
			<Values />
			<Gallery galleryItems={GalleryItems} photoOnly={false} isCollection={true}/>
		</Layout>
	)
}
