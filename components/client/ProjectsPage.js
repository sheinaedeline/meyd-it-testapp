import React from 'react'
// import stylings
import { makeStyles } from '@material-ui/core/styles'
// import MUI components
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
// import icons
import AddIcon from '@material-ui/icons/Add'
// import custom components
import LayoutFooter from '@/layouts/components/DefaultFooter'
import MakingsList from '@/components/client/MakingsList'
// import MakingsListEmpty from '@/components/client/dashboard/MakingsListEmpty'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},

	projects: {
		width: 'calc(100% - 240px)',
		flexShrink: 0,
		float: 'right',
		backgroundColor: '#eeeeee',
	},

	page: {
		width: '78vw',
		textAlign: 'center',
		color: '#a786df',
		fontSize: '4.5vh',
	},

	centered: {
		textAlign: 'center',
		display: 'block',
		margin: '0 auto',
	},
}))

export default function PermanentDrawerLeft() {
	const classes = useStyles()

	return (
		<div className={classes.projects}>
			<Container
				style={{
					background: '#ffffff',
					width: '74vw',
					height: '8vh',
					marginTop: '3vh',
					marginBottom: '3vh',
					whiteSpace: 'nowrap',
					overflow: 'hidden',
				}}
			>
				<div
					style={{
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						marginTop: '2.5vh',
					}}
				>
					<Typography>
						A notification from Meydit
						<Link
							href="#"
							style={{
								float: 'right',
								textDecoration: 'none',
								color: '#8460C2',
							}}
						>
							ACTION
						</Link>
					</Typography>
				</div>
			</Container>

			<Container
				style={{
					width: '70vw',
					height: '8vh',
					marginTop: '3vh',
					marginBottom: '3vh',
					whiteSpace: 'nowrap',
					overflow: 'hidden',
				}}
			>
				<Typography>
					<Link
						href="#"
						style={{
							textDecoration: 'none',
							color: '#8460C2',
						}}
					>
						MY MAKINGS
					</Link>
					<Button
						variant="outlined"
						href="./makings/new"
						style={{
							float: 'right',
							borderRadius: '0px',
							color: '#a786df',
							borderColor: '#a786df',
						}}
					>
						<AddIcon />
						NEW MAKINGS
					</Button>
				</Typography>
			</Container>

			<MakingsList />

			<LayoutFooter />
		</div>
	)
}
