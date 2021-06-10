import React from 'react'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import MUI components
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'
// import icons
import {
	FacebookIcon,
	InstagramIcon,
	LinkedInIcon,
	TwitterIcon,
} from '@/icons/brands'
import { MeyditLogoIcon } from '@/assets/meydit'
// import content
import CompanyDetails from '@/content/CompanyDetails'

const useStyles = makeStyles({
	root: {
		backgroundColor: theme.palette.primary.main,
		width: '100%',
		padding: theme.spacing(2),
	},
	// The company details under the meydit logo (address & email)
	detailsText: {
		color: theme.palette.text.secondary,
		margin: theme.spacing(2),
		backgroundColor: 'transparent',
	},
	meyditLogo: {
		width: '60%',
		height: 'auto',
		minWidth: '100px',
		maxWidth: '350px',
		alignContent: 'center',
		margin: theme.spacing(2),
	},
	paper: {
		justifyContent: 'center',
		backgroundColor: 'transparent',
		display: 'flex',
		overflow: 'hidden',
	},
	socMedIcon: {
		fill: 'transparent',
		margin: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			margin: theme.spacing(4),
		},
		color: theme.palette.primary.light,
	},
	importantLinks: {
		margin: theme.spacing(2),
		overflowWrap: 'break-word',
		[theme.breakpoints.up('sm')]: {
			fontSize: '130%',
		},
		fontSize: '100%',
		color: theme.palette.primary.light,
	},
	linkList: {
		justifyContent: 'center',
		color: theme.palette.primary.light,
	},
})

const DefaultFooter = () => {
	const classes = useStyles()

	const socMed = [
		InstagramIcon, FacebookIcon, TwitterIcon, LinkedInIcon,
	]

	const importantLinks = [
		'About Us', 'Get Inspired', 'Blog', 'Join/Sign In', 'Find a Designer',
	]

	const linkList = [
		{
			title: 'Learn More',
			links: [
				'Shipping', 'Policies', 'Investors', 'Careers', 'Press', 'Impact',
			],
		},
		{
			title: 'Help',
			links: [
				'Help Centre', 'Trust and Safety', 'Privacy Settings', 'FAQ',
			],
		},
		{
			title: 'Find Out More',
			links: [
				'Sitemap', 'Privacy Policy', 'Terms and Conditions', 'Contact', 'Copyright',
			],
		},
	]

	const acknowledgementText = 'We acknowledge the Traditional Owners of the Land where we work and ' +
          'live, the Cammeraygal people of Australia and pay our respects to ' +
          'Elders past and present. We celebrate the stories, culture and ' +
          'traditions of Aboriginal and Torres Strait Islander Elders of all ' +
          'communities who also work and live on this land.'

	const copyrightText = '©2021 Meyd.It All Rights Reserved'

	const socialMedia = (icon, id) => (
		<Link href="#" key={id}>
			<SvgIcon
				component= {icon}
				color="primary"
				className={classes.socMedIcon}
				fontSize="large" />
		</Link>
	)

	return (
		<Box>
			<Grid container className={classes.root} justify="center" alignItems="center">

				{/* The first item is the logo */}
				<Grid item xs={12} sm={4}>
					<Paper className={classes.paper} elevation={0}>
						<MeyditLogoIcon className={classes.meyditLogo}/>
					</Paper>
					<Paper className={classes.detailsText} elevation={0}>
						<Typography color="inherit" align="center"> Address: {CompanyDetails.address} </Typography>
						<Typography color="inherit" align="center"> Email: {CompanyDetails.email} </Typography>
					</Paper>
				</Grid>

				{/* The second item is the 3 list of links */}
				<Grid item xs={12} sm={8}>

					{/* All the lists are nested in a grid container containing 3 items */}
					<Grid container>

						{/* For each item in the linkList array, make a new grid item
							taking up 4 space with a title and a list of links. */}
						{linkList.map((item, index) => (
							<Grid item key={index} xs={4}>
								<List direction="column">

									{/* The title */}
									<ListItem className={classes.linkList}>
										<Typography color="inherit" style={{ fontWeight: 'bold' }} align="center">
											{item.title}
										</Typography>
									</ListItem>

									{/* The list of links */}
									{item.links.map((link, index) => (
										<ListItem key={index} className={classes.linkList}>
											<Typography align="center" color="inherit">
												<Link color="inherit" href="#"> {link} </Link>
											</Typography>
										</ListItem>
									))}

								</List>
								{/* End grid item containing each list of links */}
							</Grid>
						))}

						{/* End grid container with link grid items */}
					</Grid>

					{/* End grid item containing the container */}
				</Grid>

				{/* The third item is the important links */}
				<Grid item xs={12} md={6}>
					<Paper className={classes.paper} elevation={0}>
						{importantLinks.map((text, index) => (
							<Typography key={index} align="center" color="inherit" className={classes.importantLinks}>
								<Link href="#" color="inherit">
									{text}
								</Link>
							</Typography>
						))}
					</Paper>
				</Grid>

				{/* The fourth item is the social media links */}
				<Grid item xs={12} md={6}>
					<Paper className={classes.paper} elevation={0}>
						{socMed.map((item, index) => (
							socialMedia(item, index)
						))}
					</Paper>
				</Grid>
			</Grid>

			<Paper className={classes.paper} elevation={0}>
				<Typography align="center"> {acknowledgementText} </Typography>
			</Paper>

			<Paper className={classes.paper} elevation={0}>
				<Typography align="center"> {copyrightText} </Typography>
			</Paper>
		</Box>
	)
}

export default DefaultFooter
