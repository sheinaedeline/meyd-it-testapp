// Define dashboard layout for both client and creative
/* Used so every page's layout is consistent.
	Used for layouts that have a header and a footer. */

/* eslint-disable react/prop-types */
// import layout components
import DashboardDrawer from '@/layouts/components/DashboardDrawer'
import DefaultFooter from '@/layouts/components/DefaultFooter'

const Layout = (props) => (
	<div className="Layout">
		<DashboardDrawer />
		<div className="Content">
			{props.children}
			<DefaultFooter />
		</div>
	</div>
)

export default Layout
