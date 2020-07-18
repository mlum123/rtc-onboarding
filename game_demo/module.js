const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const backButton = document.getElementById('back-button')
const goToScenarioButton = document.getElementById('go-to-scenario-button')
const gotItButton = document.getElementById('got-it-button')


const startPage = document.getElementById('start')
const readingPage = document.getElementById('reading')
const scenarioPage = document.getElementById('questions')
const explanationPage = document.getElementById('explanation')
const finishPage = document.getElementById('finish')

const readingPoint = document.getElementById('reading-point')
const readingExplanation = document.getElementById('reading-explanation')

const scenarioDescription = document.getElementById('scenario')
const answerButtonsElement = document.getElementById('options')

const ifAnswerCorrect = document.getElementById('if-correct')
const answerExplanation = document.getElementById('scenario-explanation')

let readingIndex = 0
let questionIndex = 0

startButton.addEventListener('click', startModule)
nextButton.addEventListener('click', () => {
	readingIndex ++
	showReading(readings[readingIndex])
})

backButton.addEventListener('click', () => {
	readingIndex --
	showReading(readings[readingIndex])
	
})

goToScenarioButton.addEventListener('click', () => {
	showScenario(scenarios[questionIndex])
})

gotItButton.addEventListener('click', () => {
	questionIndex ++
	if (questionIndex <scenarios.length){
		nextQuestion(scenarios[questionIndex])
	}
	else{
		explanationPage.classList.add('hide')
		finishPage.classList.remove('hide')
	}
})
	

function startModule(){
	startPage.classList.add('hide')
	readingPage.classList.remove('hide')
	nextButton.classList.remove('hide')
	showReading(readings[readingIndex])
}

function showReading(reading){
	readingPoint.innerText = reading.point
	readingExplanation.innerText = reading.details
	if (readingIndex +1 >= readings.length){
		nextButton.classList.add('hide')
		goToScenarioButton.classList.remove('hide')
	}
	else{
		nextButton.classList.remove('hide')
		goToScenarioButton.classList.add('hide')
	}
	
	if (readingIndex > 0){
		backButton.classList.remove('hide')
	}
	if (readingIndex == 0){
		backButton.classList.add('hide')
	}
}

function showScenario(scenario){
	resetState()
	goToScenarioButton.classList.add('hide')
	backButton.classList.add('hide')
	readingPage.classList.add('hide')
	scenarioPage.classList.remove('hide')
	scenarioDescription.innerText = scenario.question
	scenario.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btn')
		if (answer.correct){
			button.dataset.correct = answer.correct
			
		}
		button.addEventListener('click', selectAnswer)
		answerButtonsElement.appendChild(button)
		
	})
}

function selectAnswer(e){
	const selectedButton = e.target
	const correct = selectedButton.dataset.correct
	if (correct){
		ifAnswerCorrect.innerText = 'You are right!'
	}
	else{
		ifAnswerCorrect.innerText = 'Oops! You missed the correct answer'
	}
	showExplanation(explanations[questionIndex])
}

function showExplanation(explanation){
	scenarioPage.classList.add('hide')
	explanationPage.classList.remove('hide')
	gotItButton.classList.remove('hide')
	answerExplanation.innerText = explanation
}

function nextQuestion(scenario){
	gotItButton.classList.add('hide')
	explanationPage.classList.add('hide')
	showScenario(scenario)
}

function resetState(){
	while (answerButtonsElement.firstChild){
		answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	}
}

const readings = [
	{
		point:'Show up',
		details: ' Showing up and being on time is the bare minimum of professionalism. When you commit to attending something, such as an event, meeting or webinar, breaking your word is disrespectful of others’ time and breaks their confidence in you, and RTC. Honor your commitments and build trust that will take you far in your career. Note: Breaking this trust within the RTC community can result in suspension of access to opportunities like company events, webinars, office hours, etc. and could even result in being removed from the Fellowship program.'
	},
	{
		point:'Canceling',
		details: 'If something unforeseeable happens that requires you to cancel, give at least 24 hours’ notice. Keep in mind that a last-minute cancellation is almost as disrespectful as not showing up. If you have a difficult time remembering things, implement calendar reminders. Showing you are organized, responsible and trustworthy goes very far in creating good working relationships.'
	},
	{
		point:'Show your appreciation', 
		details: 'Take the time to get the name(s) of your host(s) and send them a quick note of thanks via email or LinkedIn if their information is accessible. Tell them about something specific and ideally unique that you learned from or appreciated about the event. This doesn’t happen nearly enough so it will make you stand out in a positive light and expand your network!'
	}
]

const scenarios = [
	{
		question:' Marie signed up to attend an RTC webinar to hear from women in tech. However, a few hours before, her friend asks her to go on a hike at the same time that the webinar will be taking place. What should Marie do?',
		answers:[
			{text: 'Attend the webinar', correct: true},
			{text: 'Friends come first, so go on the hike with her friend!', correct: false}
		]
	},
	{
		question:' Nicole has scheduled a one-on-one meeting with an RTC alum. She knows that she’s often forgetful, so what should she do to make sure she attends the meeting?',
		answers:[
			{text: 'Tell the RTC alum to remind her the day before the meeting', correct: false},
			{text: 'Set a calendar reminder', correct: true}
		]
	},
	{
		question:'  What’s a great way to stand out to your host?',
		answers:[
			{text: 'Show up late', correct: false},
			{text: 'Forget to attend', correct: false},
			{text: 'Send them a quick note of thanks via email or LinkedIn. Tell them about something specific and ideally unique that you learned from or appreciated about the event', correct: true},
			{text: 'Cancel within 24 hours of the originally scheduled meeting', correct: false},
		]
	}
]

const explanations = ['Breaking your word is disrespectful of others’ time and breaks their confidence in you and RTC.  If a problem arises and you can no longer attend the webinar, send an email to the host before it begins so someone else may have the opportunity to attend.',
					'Showing you are organized, responsible and trustworthy goes very far in creating good working relationships. You should be responsible for holding yourself accountable to attend your engagements.',
					' This doesn’t happen nearly enough so it will make you stand out in a positive light and expand your network!']

