import React from 'react'
import PropTypes from 'prop-types'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import material ui components
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import SvgIcon from '@material-ui/core/SvgIcon'
// import icons
import { CircleIcon } from '@/icons/shapes'

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
	socialsDiv: {
		display: 'flex',
		flexDirection: 'row',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
		},
		alignItems: 'center',
		maxWidth: '100%',
	},
	socialIconButton: {
		backgroundColor: theme.palette.secondary.main,
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
				<div className={classes.socialsDiv}>
					{details.socials.map((item) => (
						<Button
							key={item.name}
							elevation={0}
							className={classes.socialIconButton}
							href={item.href}
						>
							<SvgIcon className={classes.socialIcon} component={item.icon}/>
						</Button>
					))}
				</div>
			</Paper>
		</div>
	)
}

Overview.propTypes = {
	details: PropTypes.object.isRequired,
}

export default Overview
