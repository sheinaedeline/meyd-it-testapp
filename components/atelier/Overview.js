import React from 'react'
import PropTypes from 'prop-types'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import material ui components
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SvgIcon from '@material-ui/core/SvgIcon'

const useStyles = makeStyles({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: theme.spacing(3),
	},
	title: {
		fontWeight: 'bold',
		paddingBottom: theme.spacing(2),
	},
	storyTitle: {
		paddingBottom: theme.spacing(2),
		alignSelf: 'flex-start',
	},
	story: {
		paddingBottom: theme.spacing(2),
		color: theme.palette.primary.contrastText,
	},
	socialsGrid: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		maxWidth: '100%',
	},
	socialIconButton: {
		backgroundColor: theme.palette.primary.main,
		borderRadius: '50%',
		margin: theme.spacing(2),
	},
	socialIcon: {
		fill: 'transparent',
		color: theme.palette.primary.light,
		margin: '30%',
	},
})

const Overview = ({ details }) => {
	const classes = useStyles()

	return (
		<div>
			<Paper elevation={0} className={classes.paper}>
				{/* The title containing the user's name */}
				<Typography variant="h3" className={classes.title}>
					House of {details.name}
				</Typography>

				{/* The story */}
				<Typography variant="h6" className={classes.storyTitle}>
					The Story
				</Typography>
				<Typography className={classes.story}>{details.story}</Typography>

				{/* The social media links */}
				<Grid container className={classes.socialsGrid}>
					{details.socials.map((item) => (
						<Grid item key={item.name}>
							<Button
								elevation={0}
								className={classes.socialIconButton}
								href={item.href}
							>
								<SvgIcon className={classes.socialIcon} component={item.icon}/>
							</Button>
						</Grid>
					))}
				</Grid>
			</Paper>
		</div>
	)
}

Overview.propTypes = {
	details: PropTypes.object.isRequired,
}

export default Overview
