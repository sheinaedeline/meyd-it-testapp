/* Used so every page's layout is consistent.
	Used for layouts that have a header and a footer. */

/* eslint-disable react/prop-types */
// import styling
import { makeStyles } from '@material-ui/core/styles'
// import layout components
import DefaultNavBar from '@/layouts/components/DefaultNavBar'
import DefaultFooter from '@/layouts/components/DefaultFooter'

const useStyles = makeStyles((theme) => ({
	layoutStyle: {
		backgroundColor: theme.palette.primary.lightest,
		margin: 0,
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
	},
	contentStyle: {
		display: 'flex',
		flexDirection: 'column',
	},
}))

const Layout = (props) => {
	const classes = useStyles()

	return (
		<div className={classes.layoutStyle}>
			<DefaultNavBar />
			<div className={classes.contentStyle}>
				{props.children}
			</div>
			<DefaultFooter />
		</div>
	)
}

export default Layout
