/* eslint-disable react/jsx-key */
/* Introduction for the homepage. The first thing you see when launching the website. */

// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import MUI components
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
	title: {
		fontWeight: 'bold',
		marginBottom: 50,
	},
	purpScheme: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.secondary,
		height: '100%',
	},
	whiteScheme: {
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.text.primary,
		height: '100%',
	},
	containerStyle: {
		// Full viewport height minus appbar height
		minHeight: 'calc(100vh - 64px)',
	},
})

const Introduction = () => {
	const classes = useStyles()

	/**
	 *
	 * @param {prop} colorScheme - style prop for Grid container
	 * @param {prop} contentAlignment - alignItems prop for Grid container
	 * @param {prop} textAlignment - align prop for heading typography
	 * @param {JSX element} heading - heading typography
	 * @param {JSX element} content - can be any component
	 * @param {string} contentWidth - the width of the content
	 * @returns Because the introduction bit is a grid of 2 items (text on the left and text on the right),
		each of those items can be a gridItem.
	 */
	const gridItem = (colorScheme, contentAlignment, textAlignment, heading, content, contentWidth) => (
		<Grid item md={6} xs={12}>
			{/* Each grid item is a grid with elements aligned in a column. */}
			<Grid container
				direction="column"
				className={colorScheme}
				justify="center"
				alignContent="center"
				alignItems={contentAlignment}>

				{/* Heading */}
				<Grid item style={{ width: '50%' }}>
					<Typography variant="h4" className={classes.title} align={textAlignment}>
						{heading}
					</Typography>
				</Grid>

				{/* Content. It can have multiple items in the content. */}
				{content.map((items, index) => (
					<Grid key={'grid-item-' + index} item style={{ width: contentWidth }}>
						{items}
					</Grid>
				))}
			</Grid>
		</Grid>
	)

	return (
		<Grid container spacing={0} className={classes.containerStyle}>
			{gridItem(
				classes.purpScheme,
				'stretch',
				'left',
				'FASHION MADE ESPECIALLY FOR YOU',
				[<Typography>
                    Authentic, sustainable and stylish outfits require awesome creatives.
                    Meyd.it helps source and manage slow fashion, that is made to measure
                    and on demand.
				</Typography>],
				'80%',
			)}

			{gridItem(
				classes.whiteScheme,
				'center',
				'center',
				'Browse creative makings and find your favourites',
				[
					<Button variant="contained" color="primary" disableElevation={true}>
						<Typography color="textSecondary">EXPLORE MAKINGS</Typography>
					</Button>,
					<Button>OR START YOUR MAKING RIGHT AWAY</Button>,
				],
			)}
		</Grid>

	)
}

export default Introduction
