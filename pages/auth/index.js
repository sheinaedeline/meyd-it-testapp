import React from 'react'
// import Stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import Layout
import Layout from '@/layouts/Default'
// import MUI components
import {
	Grid,
	Button,
	Typography,
	Card,
	CardActionArea,
	Hidden,
} from '@material-ui/core'
// import Icons
import {
	MeyditLogoIcon,
	ClientIcon,
	CreativeIcon,
} from '@/assets/meydit'

const useStyles = makeStyles({
	gridItem: {
		height: 'calc(100vh - 64px)',
		[theme.breakpoints.down('sm')]: {
			height: 'calc(100vh - 54px)',
		},
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: '50%',
		height: 'auto',
	},
	card: {
		margin: theme.spacing(2),
		flexDirection: 'column',
		display: 'flex',
		justifyContent: 'center',
		height: '100%',
	},
	cardActionArea: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	icon: {
	},
})

const Index = () => {
	const classes = useStyles()

	// This component is the card which will have the person icon and login button in it.
	const loginCard = (bgColor, icon, buttonColor, buttonText, textColor, descText) => (
		<Card square elevation={0} className={classes.card} style={{ backgroundColor: bgColor }}>
			<CardActionArea className={classes.cardActionArea}>
				{icon}
				<Button color={buttonColor} variant="contained" disableElevation style={{ margin: theme.spacing(2) }}>
					{buttonText}
				</Button>
				<Typography color={textColor} style={{ margin: theme.spacing(2) }}>
					{descText}
				</Typography>
			</CardActionArea>
		</Card>
	)

	return (
		<Layout>
			<Grid container>

				{/* Grid item containing Meydit logo. This item is hidden on small screens. */}
				<Hidden smDown>
					<Grid item sm={5} className={classes.gridItem}
						style={{ backgroundColor: theme.palette.primary.main }}>
						<MeyditLogoIcon className={classes.logo}/>
					</Grid>
				</Hidden>

				{/* Grid item containing login buttons */}
				<Grid item xs={12} md={7} className={classes.gridItem}>
					<Grid container style={{ height: '60%' }} justify="center" alignContent="center">

						{/* The client login */}
						<Grid item xs={12} md={6} style={{ height: '100%' }}>
							{loginCard(
								theme.palette.secondary.main,
								<ClientIcon height="50%" />,
								'primary',
								"I'M A CLIENT",
								'textSecondary',
								'I NEED SOMETHING MADE.')}
						</Grid>

						{/* The creative login */}
						<Grid item xs={12} md={6} style={{ height: '100%' }}>
							{loginCard(
								theme.palette.primary.main,
								<CreativeIcon height="50%" />,
								'secondary',
								"I'M A CREATIVE",
								'textPrimary',
								'I CAN MAKE THINGS.')}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Layout>
	)
}

export default Index
