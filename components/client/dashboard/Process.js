import React from 'react'
// import styles
import {
	makeStyles,
	MuiThemeProvider,
	createMuiTheme,
} from '@material-ui/core/styles'
// import material ui components
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
// import custom components
import Tags from '@/components/client/dashboard/Tags'
import TheStory from '@/components/client/dashboard/TheStory'
import NameIt from '@/components/client/dashboard/NameIt'
import Review from './Review'
import theme from '@/config/theme'

const muiTheme = createMuiTheme({
	overrides: {
		MuiStepIcon: {
			root: {
				color: theme.palette.primary.main,
				'&$active': {
					color: '#00000061',
				},
				'&$completed': {
					color: theme.palette.primary.main,
				},
			},
		},
	},
})

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	button: {
		marginRight: theme.spacing(1),
	},
	finishButton: {
		backgroundColor: '#8460C2',
		color: '#ffffff',
		float: 'right',
		marginRight: '3%',
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		backgroundColor: theme.palette.primary.light,
	},
	container: {
		background: theme.palette.primary.light,
		padding: '3%',
	},
}))

export default function CustomizedSteppers () {
	const classes = useStyles()
	const [activeStep, setActiveStep] = React.useState(0)
	const steps = [
		{
			id: 0,
			name: 'TAGS',
			component: <Tags />,
		},
		{
			id: 1,
			name: 'THE STORY',
			component: <TheStory />,
		},
		{
			id: 2,
			name: 'NAME IT',
			component: <NameIt />,
		},
	]

	const getStepContent = (step) => {
		const result = steps.find((item) => item.id === step)
		return result.component
	}

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleReset = () => {
		setActiveStep(0)
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div className={classes.root}>
			<Container className={classes.container}>
				<MuiThemeProvider theme={muiTheme}>
					{/* The stepper for non mobile users, hidden on mobile screens */}
					<Hidden xsDown>
						<Stepper activeStep={activeStep} style={{
							color: theme.palette.primary.grey,
						}}>
							{steps.map((item) => (
								<Step key={item.id}>
									<StepLabel>{item.name}</StepLabel>
								</Step>
							))}
						</Stepper>
					</Hidden>

					{/* Stepper for mobile users, hidden on other screens */}
					<Hidden smUp>
						<Stepper activeStep={activeStep} alternativeLabel style={{
							color: theme.palette.primary.grey,
							width: '95%',
						}}>
							{steps.map((item) => (
								<Step key={item}>
									<StepLabel>{item.name}</StepLabel>
								</Step>
							))}
						</Stepper>
					</Hidden>
				</MuiThemeProvider>
				<div>
					{activeStep === steps.length
						? (
							<div>
								<Review />
								<Button
									onClick = {function (event) { handleReset(); scrollToTop() }}
									className={classes.button}>
								Reset
								</Button>
							</div>
						)
						: (
							<div>
								<Typography component={'span'} className={classes.instructions}>
									{getStepContent(activeStep)}
								</Typography>
								<div>
									<Button
										disabled={activeStep === 0}
										onClick = {function (event) { handleBack(); scrollToTop() }}
										className = {classes.button}
									>
										Back
									</Button>
									<Button
										variant="contained"
										color="primary"
										onClick = {function (event) { handleNext(); scrollToTop() }}
										className={classes.finishButton}
									>
										{activeStep === steps.length - 1 ? 'Finish' : 'Proceed To'}
									</Button>
								</div>
							</div>
						)
					}
				</div>

			</Container>
		</div>
	)
}
