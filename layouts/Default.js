/* Used so every page's layout is consistent.
	Used for layouts that have a header and a footer. */

/* eslint-disable react/prop-types */
// import layout components
import DefaultNavBar from '@/layouts/components/DefaultNavBar'
import DefaultFooter from '@/layouts/components/DefaultFooter'

const layoutStyle = {
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	width: '100%',
	overflow: 'hidden hidden',
}

const contentStyle = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
}

const Layout = (props) => (
	<div className="Layout" style={layoutStyle}>
		<DefaultNavBar />
		<div className="Content" style={contentStyle}>
			{props.children}
		</div>
		<DefaultFooter />
	</div>
)

export default Layout
