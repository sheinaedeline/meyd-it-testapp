// The measurements component in the "measurements" tab in my makings page

/* eslint-disable react/display-name */
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
// import styling
import {
	makeStyles,
} from '@material-ui/core/styles'
import theme from '@/config/theme'
// import material-ui components
import {
	DataGrid,
	GridToolbarContainer,
} from '@material-ui/data-grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
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
		backgroundColor: theme.palette.primary.main,
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
		color: theme.palette.primary.contrastText,
	},
	estimateIcon: {
		width: '20px',
		height: 'auto',
	},
	noRowOverlay: {
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
	},
	dataTable: {
		padding: theme.spacing(4),
	},
}))

/**
 *
 * @param {array} measurements - An array of measurement objects (with part, approx, and size props)
 * @returns The mannequin and a sortable, searchable table of measurements
 */
const Measurements = ({ measurements, style }) => {
	const classes = useStyles()

	const [query, setQuery] = React.useState('')
	const [data, setData] = React.useState([])
	const [searchData, setSearchData] = React.useState([])

	const handleQueryChange = (event) => {
		setQuery(event.target.value)

		// For each item in the measurements array, run the contains function on that item.
		const filteredData = searchData.filter((item) => {
			return contains(item, event.target.value)
		})

		// Set the data displayed to the filtered data
		setData(filteredData)
	}

	// Take "part" from measurements array and check if at least some of the word
	// matches the search query
	const contains = ({ part }, txt) => {
		const lowCasePart = part.toLowerCase()

		if (lowCasePart.includes(txt.toLowerCase())) {
			return true
		}
		return false
	}

	// So that the "no rows" message doesn't display
	const rowOverlay = () => (
		<Box></Box>
	)

	// The searchbar component
	const searchBar = () => {
		return (
			<GridToolbarContainer>
				<TextField
					placeholder="Search"
					variant="outlined"
					fullWidth
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon style={{ height: '25px' }}/>
							</InputAdornment>
						),
					}}
					className={classes.searchBar}
					value={query}
					onChange={handleQueryChange}
				/>
			</GridToolbarContainer>
		)
	}

	// The columns
	const tableHeads = [
		{
			field: 'part',
			headerName: 'Region',
			flex: 0.4,
		},
		{
			field: 'approx',
			headerName: ' ',
			type: 'boolean',
			flex: 0.15,
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
			flex: 0.35,
			headerName: 'Size',
		},
	]

	React.useEffect(() => {
		// Initialise
		setData(measurements)
		setSearchData(measurements)
	}, [])

	return (
		<Grid container className={classes.gridContainer}>
			<Grid item xs={12} md={6}>

				{/* The mannequin */}
				<Paper className={classes.mannequinPaper} style={style || { height: '80vh' }} square elevation={0}>
					<MannequinImage className={classes.mannequin}/>
				</Paper>
			</Grid>

			{/* The table of measurements */}
			<Grid item xs={12} md={6}>
				<Paper square elevation={0} className={classes.dataTable} style={style || { height: '100%' }}>
					{searchBar()}
					<DataGrid
						rows={data}
						columns={tableHeads}
						hideFooter={data.length === 0}
						hideFooterRowCount
						hideFooterSelectedRowCount
						autoPageSize
						// autoHeight
						pagination
						className={classes.dataGrid}
						components={{
							NoRowsOverlay: rowOverlay,
						}}
						componentsProps={{
							pagination: { position: 'inherit' },
						}}
					/>

					{/* If there is no data to match the search query, display the message and button
						to clear the search */}
					{data.length === 0
						? (
							<Box className={classes.noRowOverlay}>

								<Typography align="center" style={{ color: theme.palette.primary.dark }}>
									Your search did not turn up any results.
								</Typography>
								<Button onClick={() => {
									setQuery('')
									setData(measurements)
								}}>Clear search</Button>
							</Box>
						)
						: null}
				</Paper>
			</Grid>

		</Grid>
	)
}

Measurements.propTypes = {
	measurements: PropTypes.array.isRequired,
	style: PropTypes.object,
}

export default Measurements
