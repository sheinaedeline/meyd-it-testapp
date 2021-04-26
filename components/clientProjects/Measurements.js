// The measurements component in the "measurements" tab in my makings page

/* eslint-disable react/display-name */
import React from 'react'
import PropTypes from 'prop-types'
// import styling
import {
	makeStyles,
} from '@material-ui/core/styles'
// import material-ui components
import Grid from '@material-ui/core/Grid'
import {
	DataGrid,
	GridToolbarContainer,
} from '@material-ui/data-grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
// import custom components
import { MannequinImage } from '@/assets/graphics'
import {
	ApproximatelyEqualIcon,
	SearchIcon,
} from '@/icons/user-interface'

const useStyles = makeStyles((theme) => ({
	gridContainer: {
		height: '100%',
	},
	mannequinPaper: {
		backgroundColor: theme.palette.secondary.main,
		height: '80vh',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
	},
	mannequin: {
		height: '100%',
		width: 'auto',
	},
	searchBar: {
		borderRadius: 0,
		paddingBottom: theme.spacing(2),
	},
	dataGrid: {
		border: 'none',
		height: '100%',
		color: theme.palette.primary.contrastText,
	},
	estimateIcon: {
		width: '20px',
		height: 'auto',
	},
}))

/**
 *
 * @param {array} measurements - An array of measurement objects (with part, approx, and size props)
 * @returns The mannequin and a sortable, searchable table of measurements
 */
const Measurements = ({ measurements }) => {
	const classes = useStyles()

	const searchBar = () => {
		return (
			<GridToolbarContainer>
				<TextField
					id="outlined-search"
					placeholder="Search"
					type="search"
					variant="outlined"
					fullWidth
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					}}
					className={classes.searchBar}
				/>
			</GridToolbarContainer>
		)
	}
	// The columns
	const tableHeads = [
		{
			field: 'part',
			headerName: 'Region',
			flex: 1,
		},
		{
			field: 'approx',
			headerName: ' ',
			type: 'boolean',
			flex: 0.5,
			renderCell: (params) => {
				if (params.value === true) {
					return < ApproximatelyEqualIcon className={classes.estimateIcon} />
				}
				return <Typography></Typography>
			},
		},
		{
			field: 'size',
			type: 'number',
			headerName: 'Size',
		},
	]

	return (
		<Grid container className={classes.gridContainer}>
			<Grid item xs={12} sm={6}>

				{/* The mannequin */}
				<Paper className={classes.mannequinPaper} square elevation={0}>
					<MannequinImage className={classes.mannequin}/>
				</Paper>
			</Grid>

			{/* The table of measurements */}
			<Grid item xs={12} sm={6}>
				<Paper square elevation={0} style={{ height: '100%' }}>
					<DataGrid
						rows={measurements}
						columns={tableHeads}
						hideFooter
						components={{
							Toolbar: searchBar,
						}}
						className={classes.dataGrid}
					/>
				</Paper>
			</Grid>
		</Grid>
	)
}

Measurements.propTypes = {
	measurements: PropTypes.array.isRequired,
}

export default Measurements
