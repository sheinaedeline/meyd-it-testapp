import { makeStyles } from '@material-ui/core/styles'
import {
	Button,
	Typography,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles({
	page: {
		width: 'calc(100% - 240px)',
		textAlign: 'center',
		color: '#a786df',
		fontSize: '4.5vh',
	},
})

const MakingsListEmpty = (props) => {
	const classes = useStyles()
	return (
		<div
			style={{
				height: '100vh',
			}}
		>
			<Typography paragraph className={classes.page}>
        Uh-oh, Looks like you don’t have any makings yet!
			</Typography>
			<Button
				style={{
					height: '7vh',
					width: '18vw',
					borderRadius: '25px',
					color: '#ffffff',
					backgroundColor: '#8460c2',
					textAlign: 'center',
					margin: '0 auto',
					display: 'flex',
					alignItems: 'center flexStart',
					flexWrap: 'wrap',
					flex: '1',
				}}
			>
				<AddIcon />
        START YOUR FIRST MAKING
			</Button>
		</div>
	)
}

export default MakingsListEmpty
