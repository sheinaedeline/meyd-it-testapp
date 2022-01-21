/* Introduction for the homepage. The first thing you see when launching the website. */

// import stylings
import React from 'react'
import { makeStyles } from '@material-ui/core'
import theme from '@/config/theme'
import { createClient } from 'pexels'
// import MUI components
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Image from 'material-ui-image'

const LRPadding = '10%'
const imgHeight = '700px'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	image: {
		width: '100vw',
		height: '700px',
		position: 'inherit',
	},
	paper: {
		backgroundColor: '#000',
		height: imgHeight,
		width: '100%',
	},
	textDiv: {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	title: {
		color: theme.palette.primary.light,
		fontWeight: 'bold',
		padding: `13% ${LRPadding} 0 ${LRPadding}`,
		fontSize: '6em',
		[theme.breakpoints.down('md')]: {
			fontSize: '4em',
			padding: `25% ${LRPadding} 0 ${LRPadding}`,
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '3em',
			padding: `40% ${LRPadding} 0 ${LRPadding}`,
		},
	},
	subtitle: {
		color: theme.palette.primary.light,
		paddingLeft: LRPadding,
		fontSize: '3em',
		[theme.breakpoints.down('md')]: {
			fontSize: '2em',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5em',
		},
	},
	button: {
		color: theme.palette.primary.light,
		padding: theme.spacing(2),
		marginLeft: LRPadding,
		margin: theme.spacing(2),
		width: '200px',
	},
})

const Hero = () => {
	const classes = useStyles()
	const client = createClient('563492ad6f9170000100000185fb152d573a4e078b10af5ec8c3dba3')
	const [photoURL, setPhotoURL] = React.useState('')

	React.useEffect(() => {
		client.photos.show({ id: 3984851 }).then(photo => {
			setPhotoURL(photo.src.original)
		})
	}, [])

	return (
		<div className={classes.root}>
			<Image
				src={photoURL}
				imageStyle={{ width: '100%', height: `${imgHeight}`, opacity: '0.5', position: 'absolute' }}
				style={{ padding: '0' }}
				color="#000"
				cover />
			<Paper className={classes.paper} elevation={0} />

			{/* The text */}
			<div className={classes.textDiv}>
				<Typography className={classes.title}>
				Connect with experts to get the job done on MEYD.IT
				</Typography>

				<Typography className={classes.subtitle}>
					It&apos;s amazing what you can&apos;t create yourself
				</Typography>

				<Button variant="contained" color="primary" disableElevation className={classes.button}>
					GET STARTED NOW
				</Button>
			</div>
		</div>

	)
}

export default Hero
