import React from 'react'
import {
	makeStyles,
	MuiThemeProvider,
	createMuiTheme,
} from '@material-ui/core/styles'

import {
	Stepper,
	Step,
	StepLabel,
	Button,
	Typography,
	Container,
} from '@material-ui/core'

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
	const [activeStep, setActiveStep] = React.useState(1)
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

	return (
		<div className={classes.root}>
			<Container className={classes.container}>
				<MuiThemeProvider theme={muiTheme}>
					<Stepper activeStep={activeStep} style={{
						color: '#00000061',
					}}>
						{steps.map((item) => (
							<Step key={item}>
								<StepLabel>{item.name}</StepLabel>
							</Step>
						))}
					</Stepper>

					<div>
						{activeStep === steps.length
							? (
								<div>
									<Review />
									<Button onClick={handleReset} className={classes.button}>
								Reset
									</Button>
								</div>
							)
							: (
								<div>
									<Typography className={classes.instructions}>
										{getStepContent(activeStep)}
									</Typography>
									<div>
										<Button
											disabled={activeStep === 0}
											onClick={handleBack}
											className={classes.button}
										>
									Back
										</Button>
										<Button
											variant="contained"
											color="primary"
											onClick={handleNext}
											className={classes.button}
											style={{
												backgroundColor: '#8460C2',
												color: '#ffffff',
												float: 'right',
												marginRight: '3%',
											}}
										>
											{activeStep === steps.length - 1 ? 'Finish' : 'Proceed To'}
										</Button>
									</div>
								</div>
							)
						}
					</div>
				</MuiThemeProvider>
			</Container>
		</div>
	)
}
