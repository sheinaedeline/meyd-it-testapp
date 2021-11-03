import React from 'react'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import MUI components
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import InputAdornment from '@mui/material/InputAdornment'
import {
	GridToolbarContainer,
} from '@material-ui/data-grid'
// import custom components
import FashionTagIcon from '../FashionTagIcon'
import { SearchIcon } from '@/assets/icons/user-interface'

const tags = [
	{
		id: 0,
		title: 'OCCASION',
		tags: ['Red Carpet', 'Bride', 'Festival', 'Cocktail', 'Mourning Wear',
			'Ceremonial', 'Graduation', 'Special', 'Black Tie', 'Public Relations',
			'Comic Con', 'Cosplay', 'Equestrian', 'Formal', 'Hiking', 'Mardi Gras', 'Halloween',
			'Riding',
		],
	},
	{
		id: 1,
		title: 'SEASON',
		tags: ['Spring', 'Summer', 'Autumn/Fall', 'Winter'],
	},
	{
		id: 2,
		title: 'STYLE',
		tags: ['Every Day', 'Smart Casual', 'Active Wear', 'Evening Wear', 'Swimwear',
			'Dress to Impress', 'Bohemian', 'Kidswear', 'Vintage', 'Size Positive', 'Adaptive',
			'Homewear', 'Steampunk', 'Workwear',
		],
	},
]

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: theme.spacing(5),
	},
	card: {
		width: '70vw',
		padding: theme.spacing(3),
		[theme.breakpoints.down('sm')]: {
			width: '90vw',
		},
	},
	tabs: {
		color: theme.palette.primary.lighten1,
		marginBottom: theme.spacing(3),
	},
	searchBar: {
		width: '50%',
		marginLeft: theme.spacing(3),
		[theme.breakpoints.down('md')]: {
			width: '90%',
		},
	},
	searchIcon: {
		height: '25px',
	},
	iconCard: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.primary.contrastText,
		padding: theme.spacing(2),
	},
	icon: {
		height: '100px',
	},
	buttonDiv: {
		width: '100%',
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		marginTop: theme.spacing(3),
	},
	button: {
		color: theme.palette.primary.light,
	},
})

const Questionnaire = () => {
	const classes = useStyles()
	const [selectedTab, setSelectedTab] = React.useState(0)

	const TabPanel = (index) => {
		return (
			selectedTab === index && (
				tags[index].tags.map((tag) => (
					<Grid item xs={4} sm={3} md={2} key={index}>
						<Card elevation={0}>
							<CardActionArea className={classes.iconCard}>
								<FashionTagIcon variant={tag} className={classes.icon}/>
								<Typography variant="body4">{tag}</Typography>
							</CardActionArea>
						</Card>
					</Grid>
				))
			)
		)
	}

	return (
		<div className={classes.root}>
			<Typography variant="h4" align="center" style={{ color: theme.palette.primary.contrastText }}>
        LET&apos;S FIGURE OUT WHAT YOU&apos;RE MAKING
			</Typography>

			<Card elevation={0} className={classes.card}>
				<Tabs
					value={selectedTab}
					onChange={(e, v) => setSelectedTab(v)}
					indicatorColor="secondary"
					textColor="secondary"
					variant="fullWidth"
					className={classes.tabs}
				>
					{tags.map((item) => (
						<Tab label={item.title} id={item.id} key={item.id} />
					))}
				</Tabs>

				<GridToolbarContainer>
					<TextField
						label="Search"
						className={classes.searchBar}
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon className={classes.searchIcon} />
								</InputAdornment>
							),
						}}
					/>
				</GridToolbarContainer>

				<Grid container>
					{tags.map((item) => (
						TabPanel(item.id)
					))}
				</Grid>

				<div className={classes.buttonDiv}>
					<Button
						disableElevation
						color="primary"
						variant="contained"
						className={classes.button}
					>
          NEXT
					</Button>
				</div>
			</Card>
		</div>
	)
}

export default Questionnaire
