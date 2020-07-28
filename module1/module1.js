const instructions = document.getElementById('instructions')
const goToScenarioButton = document.getElementById('go-to-scenario-button')
const gotItButton = document.getElementById('got-it-button')


const startPage = document.getElementById('start')
const scenarioPage = document.getElementById('questions')
const explanationPage = document.getElementById('explanation')
const finishPage = document.getElementById('finish')

const scenarioDescription = document.getElementById('scenario')
const answerButtonsElement = document.getElementById('options')

const ifAnswerCorrect = document.getElementById('if-correct')
const answerExplanation = document.getElementById('scenario-explanation')

let questionIndex = 0

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
	scenarioPage.classList.remove('hide')
	nextButton.classList.remove('hide')
}

function showScenario(scenario){
	resetState()
	instructions.classList.add('hide')
	goToScenarioButton.classList.add('hide')
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

