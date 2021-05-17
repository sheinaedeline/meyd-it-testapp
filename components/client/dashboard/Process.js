import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Tags from '@/components/client/dashboard/Tags'
import TheStory from '@/components/client/dashboard/TheStory'
import NameIt from '@/components/client/dashboard/NameIt'
import Review from './Review'
import Footer from '@/layouts/components/DefaultFooter'
import theme from '@/config/theme'
{
	/***
This is the process of the new projects section. 
This defines the breadcrumb trail up above, and the steps down below.
*/
}

const muiTheme = createMuiTheme({
	overrides: {
		MuiStepIcon: {
			root: {
				'color': '#8460C2', // or 'rgba(0, 0, 0, 1)'
				'&$active': {
					color: '#00000061',
				},
				'&$completed': {
					color: '#8460C2',
				},
			},
		},
	},
})

const useStyles = makeStyles((theme) => ({
	root: {
		width: 'calc(100% - 240px)',
		flexShrink: 0,
		float: 'right',
		backgroundColor: '#eeeeee',
	},
	button: {
		marginRight: theme.spacing(1),
	},
	completed: {
		display: 'inline-block',
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		backgroundColor: '#ffffff',
	},
}))

function getSteps() {
	return ['TAGS', 'THE STORY', 'NAME IT']
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return <Tags />
		case 1:
			return <TheStory />
		case 2:
			return <NameIt />
		default:
			return 'Unknown step'
	}
}

export default function HorizontalNonLinearStepper() {
	const classes = useStyles()
	const [activeStep, setActiveStep] = React.useState(0)
	const [completed, setCompleted] = React.useState({})
	const steps = getSteps()

	const totalSteps = () => {
		return steps.length
	}

	const completedSteps = () => {
		return Object.keys(completed).length
	}

	const isLastStep = () => {
		return activeStep === totalSteps() - 1
	}

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps()
	}

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed,
				  // find the first step that has been completed
				  steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1
		setActiveStep(newActiveStep)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleStep = (step) => () => {
		setActiveStep(step)
	}

	const handleComplete = () => {
		const newCompleted = completed
		newCompleted[activeStep] = true
		setCompleted(newCompleted)
		handleNext()
	}

	const handleReset = () => {
		setActiveStep(0)
		setCompleted({})
	}

	return (
		<div className={classes.root}>
			<div style={{ margin: '6vh', backgroundColor: '#ffffff' }}>
				<br />
				<MuiThemeProvider theme={muiTheme}>
					<Stepper
						nonLinear
						activeStep={activeStep}
						style={{
							color: '#00000061',
						}}
					>
						{steps.map((label, index) => (
							<Step key={label}>
								<StepLabel
									completed={completed[index]}
									style={{
										color: '#00000061',
									}}
								>
									{label}
								</StepLabel>
							</Step>
						))}
					</Stepper>
				</MuiThemeProvider>
				<div>
					{allStepsCompleted() ? (
						<div>
							<Review />

							<Button onClick={handleReset}>Reset</Button>
						</div>
					) : (
						<div
							style={{
								background: '#ffffff',
							}}
						>
							<Typography className={classes.instructions}>
								{getStepContent(activeStep)}
							</Typography>
							<div>
								<Button
									disabled={activeStep === 0}
									onClick={handleBack}
									className={classes.button}
									style={{
										marginLeft: '3%',
									}}
								>
									Back
								</Button>

								{activeStep !== steps.length && (
									<Button
										variant="contained"
										onClick={handleComplete}
										style={{
											backgroundColor: '#8460C2',
											color: '#ffffff',
											float: 'right',
											marginRight: '3%',
										}}
									>
										Proceed to
									</Button>
								)}
							</div>
						</div>
					)}
				</div>
				<br />
			</div>
			<Footer />
		</div>
	)
}
