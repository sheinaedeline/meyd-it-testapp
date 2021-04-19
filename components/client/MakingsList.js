import { makeStyles } from '@material-ui/core/styles'
import theme from '@/config/theme'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import {
	Box,
	CardActionArea,
	Typography,
	Card,
	CardMedia,
} from '@material-ui/core'

const useStyles = makeStyles({
	page: {
		width: 'calc(100% - 240px)',
		textAlign: 'center',
		color: '#a786df',
		fontSize: '4.5vh',
	},
	masonryItem: {
		paddingBottom: theme.spacing(4),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
	},
	media: {
		height: 'auto',
		// paddingTop: "50%",
		minWidth: '100%',
	},
})

const MakingsListEmpty = (props) => {
	const items = [
		{
			title: "Shashank's Bachelor Party",
			keyword: 'bride',
			collection: '9732420',
		},
		{
			title: 'Archit Footwear Festival',
			keyword: 'sundress',
			collection: '3616808',
		},
		{
			title: 'Cookie party with Kevin',
			keyword: 'bikini',
			collection: '90659313',
		},
		{
			title: 'Painting it Pink with Ryan',
			keyword: 'groom',
			collection: '9524253',
		},
	]
	const classes = useStyles()
	return (
		<Box className={classes.box}>
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
				style={{
					marginLeft: '15px',
					marginRight: '15px',
				}}
			>
				<Masonry gutter="100" className={classes.masonryContainer}>
					{items.map((item, i) => (
						<Box className={classes.masonryItem} key={item.title}>
							<Card className={classes.root}>
								<CardActionArea>
									<CardMedia
										component="img"
										className={classes.media}
										src={`/Makings/img${i}.svg`}
										title="Project"
									/>
									<Typography
										gutterBottom
										style={{
											textAlign: 'center',
											padding: '15px',
											font: 'cabin',
											fontSize: '16px',
										}}
									>
										{item.title}
									</Typography>
									<Typography
										style={{
											textAlign: 'center',
											padding: '15px',
											font: 'cabin',
											fontSize: '10px',
										}}
									>
										<b>PROJECT STATUS</b>
									</Typography>
								</CardActionArea>
							</Card>
						</Box>
					))}
				</Masonry>
			</ResponsiveMasonry>
		</Box>
	)
}

export default MakingsListEmpty
