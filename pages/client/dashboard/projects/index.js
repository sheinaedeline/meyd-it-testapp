import React from 'react'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
// import material ui components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// import custom components
import Makings from '@/components/atelier/Makings'
import ClientLayout from '@/layouts/Client'
import { PlusIcon } from '@/icons/user-interface'
import list from '@/assets/dummy/makings'

const useStyles = makeStyles({
	topDiv: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: theme.spacing(2),
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
	buttonDiv: {
		flex: 1,
		justifyContent: 'flex-end',
		display: 'flex',
	},
	addButton: {
		color: '#a786df',
		borderColor: '#a786df',
	},
	plusIcon: {
		width: '20px',
		height: 'auto',
	},
	contentDiv: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: theme.spacing(6),
	},
	startMakingButton: {
		backgroundColor: theme.palette.primary.main,
		margin: theme.spacing(4),
		color: theme.palette.primary.light,
	},
})

const Index = () => {
	const classes = useStyles()
	const projects = list.makings

	return (
		<ClientLayout>

			{/* The text and button above the image masonry */}
			<div className={classes.topDiv}>

				<Typography style={{ marginBottom: theme.spacing(2) }}>
				MY MAKINGS
				</Typography>
				<div className={classes.buttonDiv}>

					<Button
						variant="outlined"
						href='../dashboard/makings/new'
						className={classes.addButton}
						startIcon={<PlusIcon className={classes.plusIcon} />}
					>
					NEW MAKINGS
					</Button>
				</div>
			</div>

			{/* If projects is empty, display button to add makings.
				Otherwise, display image gallery. */}
			{projects.length === 0 || !projects
				? (<div className={classes.contentDiv}>
					<Typography variant="h4" align="center">
					Uh-oh, looks like you don&apos;t have any makings yet!
					</Typography>

					<Button
						variant="contained"
						disableElevation
						className={classes.startMakingButton}
						startIcon={<PlusIcon className={classes.plusIcon} />}
					>
					START YOUR FIRST MAKING
					</Button>
				</div>)
				: <Makings makings={projects} /> }
		</ClientLayout>
	)
}

export default Index
