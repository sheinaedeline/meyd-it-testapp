import React from 'react'
import PropTypes from 'prop-types'
// import styling
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import material ui components
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	card: {
		margin: theme.spacing(2),
	},
	name: {
		color: theme.palette.primary.contrastText,
		margin: theme.spacing(2),
		marginBottom: theme.spacing(4),
	},
	role: {
		textTransform: 'lowercase',
		fontWeight: 'bold',
	},
	image: {
		height: '50vh',
	},
})

/**
 *
 * @param {array} creatives - The array of objects containing the creative's details (name, role, photoid)
 * @returns The component of a grid of card items
 */
const Creatives = ({ creatives }) => {
	const classes = useStyles()

	return (
		<Grid container>
			{creatives.map((item, i) => (
				<Grid item xs={12} sm={2} md={4} key={i}>
					<Card elevation={0} className={classes.card}>
						<CardActionArea>
							<CardContent>
								{/* The name */}
								<Typography variant="h4" align="center" className={classes.name}>
									{item.name}
								</Typography>

								{/* The role */}
								<Typography variant="body2" align="center" className={classes.role}>
									{item.role}
								</Typography>
							</CardContent>

							<CardMedia
								component="img"
								src={`https://source.unsplash.com/${item.photoid}`}
								className={classes.image}
							/>
						</CardActionArea>
					</Card>
				</Grid>
			))}
		</Grid>
	)
}

Creatives.propTypes = {
	creatives: PropTypes.array.isRequired,
}

export default Creatives
