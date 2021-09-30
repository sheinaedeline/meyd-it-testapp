import React from 'react'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import MUI components
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Rating from '@mui/material/Rating'
import Avatar from '@mui/material/Avatar'
import Image from 'material-ui-image'

const makers = [
	{
		avatar: `https://source.unsplash.com/collection/4935382/?sig=${Math.floor(Math.random() * 10)}`,
		rating: '3.5K',
		name: 'GD Studio',
		description: 'Deserunt enim ad mollit adipisicing aute pariatur laboris elit anim deserunt. Sint duis ea do deserunt. Id commodo nisi dolor reprehenderit. Irure officia reprehenderit incididunt ipsum tempor in duis nisi culpa commodo. Velit cillum fugiat occaecat et veniam non proident proident cillum anim ut laborum. Aute tempor id culpa dolor tempor aute minim tempor dolore et. Sit deserunt nulla duis velit fugiat ipsum sint ad.',
		gallery: 'https://source.unsplash.com/collection/9270094/',
	},
	{
		avatar: `https://source.unsplash.com/collection/4935382/?sig=${Math.floor(Math.random() * 10)}`,
		rating: '2.5K',
		name: 'Black Forge Props & Cosplay',
		description: 'Deserunt enim ad mollit adipisicing aute pariatur laboris elit anim deserunt. Sint duis ea do deserunt. Id commodo nisi dolor reprehenderit. Irure officia reprehenderit incididunt ipsum tempor in duis nisi culpa commodo. Velit cillum fugiat occaecat et veniam non proident proident cillum anim ut laborum. Aute tempor id culpa dolor tempor aute minim tempor dolore et. Sit deserunt nulla duis velit fugiat ipsum sint ad.',
		gallery: 'https://source.unsplash.com/collection/4844585/',
	},
	{
		avatar: `https://source.unsplash.com/collection/4935382/?sig=${Math.floor(Math.random() * 10)}`,
		rating: '2.5K',
		name: 'Lovely Bride Wedding Dresses',
		description: 'Deserunt enim ad mollit adipisicing aute pariatur laboris elit anim deserunt. Sint duis ea do deserunt. Id commodo nisi dolor reprehenderit. Irure officia reprehenderit incididunt ipsum tempor in duis nisi culpa commodo. Velit cillum fugiat occaecat et veniam non proident proident cillum anim ut laborum. Aute tempor id culpa dolor tempor aute minim tempor dolore et. Sit deserunt nulla duis velit fugiat ipsum sint ad.',
		gallery: 'https://source.unsplash.com/collection/59789318/',
	},
]

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.primary.contrastText,
		padding: theme.spacing(5),
		paddingTop: theme.spacing(3),
	},
	gridItem: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: 'inherit',
	},
	makerContainer: {
		marginTop: theme.spacing(4),
	},
	cardActionArea: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		color: theme.palette.primary.contrastText,
		padding: theme.spacing(4),
		height: '100%',
	},
	titleButton: {
		textDecoration: 'underline',
		color: theme.palette.primary.contrastText,
		fontSize: '2em',
	},
	becomeMakerButton: {
		marginTop: theme.spacing(2),
		color: theme.palette.primary.light,
		fontSize: '1.5em',
	},
})

const MakersGrid = () => {
	const classes = useStyles()

	const generateGallery = (num, src) => {
		const temp = []
		for (let i = 0; i < num; i++) {
			temp.push(
				<Grid item xs={4} key={i}>
					<Image
						src={`${src}/?sig=${Math.floor(Math.random() * 50)}`}
						cover
					/>
				</Grid>,
			)
		}
		return temp
	}

	return (
		<div className={classes.root}>
			<Typography variant="h3" align="center">MEET SOME MAKERS!</Typography>
			<Typography variant="h6" align="center">
        Discover the story behind the people that are making the Meyd.it
        community great, how, and why they do what they do.
			</Typography>

			<Grid container spacing={4} className={classes.makerContainer}>
				{makers.map((maker, id) => (
					<Grid item xs={12} md={4} className={classes.gridItem} key={id}>
						<Card elevation={0} style={{ backgroundColor: theme.palette.primary.lighten5, height: '100%' }}>
							<CardActionArea className={classes.cardActionArea}>

								{/* The avatar */}
								<Avatar
									src={maker.avatar}
									sx={{ width: '150px', height: '150px' }}
								/>

								{/* The rating */}
								<Rating name="3.5K Reviews" value={4} readOnly />
								<Typography variant="body4">{maker.rating.toUpperCase()} Reviews</Typography>

								{/* The name */}
								<Button className={classes.titleButton}>
									{maker.name}
								</Button>

								{/* The description */}
								<Typography align="center">
									{maker.description}
								</Typography>

								{/* The picture grid */}
								<Grid container style={{ marginTop: theme.spacing(3) }}>
									{generateGallery(6, maker.gallery)}
								</Grid>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>

			<Button
				variant="contained"
				disableElevation
				color="primary"
				className={classes.becomeMakerButton}
			>
        BECOME A MAKER
			</Button>

		</div>
	)
}

export default MakersGrid
