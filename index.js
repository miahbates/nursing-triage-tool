// Hide intro button and show symptom questions.
// grab button 
const triageButton = document.getElementById("triageButton");

// grab header excluding title using class intro
const intro = document.getElementsByClassName("intro")[0];

// grab symptom section
const symptoms = document.querySelector(".symptoms");

// when clicked hide header info and display symptom list
triageButton.addEventListener("click", function hideIntro() {
  intro.setAttribute('hidden', true);
  symptoms.removeAttribute("hidden");
});

// Switching between symptom questions
// Access the buttons clicked and section information using data attributes and store them in variables.
let buttons = document.querySelectorAll('[data-to]');
const sections = document.querySelectorAll('[data-index]'); 

for (let i = 0; i < buttons.length; i++ ) {
  buttons[i].addEventListener('click', (e) => {
    e.preventDefault();
    // loop over sections and hide them all
    for (let j = 0; j < sections.length; j++) {
      sections[j].setAttribute('hidden', true);
    }
    // on the button clicked, find the target index to show
    let target = buttons[i].dataset.to;
    // query select to get the thing with [data-index=2]
    let matchingTarget = document.querySelector(`[data-index="${target}"]`)
    // show that section
    matchingTarget.removeAttribute('hidden');
  });
}

let patientScore = 0;

let nextButtons = document.querySelectorAll('[data-name]');

nextButtons.forEach(nextButton => {
  nextButton.addEventListener('click', () => {
    let name = nextButton.dataset.name;
    let radioButtons = document.querySelectorAll(`input[name='${name}']`);
    radioButtons.forEach(radio => { 
      if (radio.checked) {
        patientScore += parseInt(radio.value);
      }
    });
    console.log('Your score is ', patientScore);
  });
});

// Restart assessment 
// get all buttons
const restartAssessmentBtns = document.querySelectorAll('.restartAssessment');
// console.log(restartAssessmentBtn);

// loop over and find out which one is clicked
for (let i = 0; i < restartAssessmentBtns.length; i++ ) {
  restartAssessmentBtns[i].addEventListener('click', (e) => {
    e.preventDefault();
    // loop over sections and hide them all
    for (let j = 0; j < sections.length; j++) {
      sections[j].setAttribute('hidden', true);
    }
    intro.removeAttribute("hidden");
    // reset score to 0
    patientScore = 0;
  });
}

// get completed button 
const completedAssessment = document.querySelector('#completedAssessment');
// console.log(completedAssessment);

// empty array to store object with id and score
let arrayOfPatients = [];

// read local storage which is empty 
if (localStorage.arrayOfPatients) {
  arrayOfPatients = JSON.parse(localStorage.arrayOfPatients);
} 

console.log('p', arrayOfPatients);

// Event listener on completed assessment btn
completedAssessment.addEventListener('click', (event) => {
  // generate random id 
  const randomId = Date.now();

  // create object with id and patient score score 
  const patient = { id : randomId, score: patientScore };

  // add objects to patients array 
  arrayOfPatients.push(patient);
  console.log(arrayOfPatients);

  // update local storage with new value - make string as local storage only accepts string
  localStorage.arrayOfPatients = JSON.stringify(arrayOfPatients);
});

// make current page hidden 

// and show intro 

// set patient score to 0

// let feverButton = document.getElementById('submit-fever');

// feverButton.addEventListener('click', () => {
//   let radioButtons = document.querySelectorAll("input[name='fever']");
//   radioButtons.forEach(radio => { 
//     if (radio.checked) {
//       patientScore += radio.value;
//     }
//   })

// })

// restartAssessmentBtns.addEventListener('click', () => {
//   for (let i = 0; i < sections.length; i++) {
//     console.log(sections);
//     sections[i].setAttribute('hidden', true);
//   };
//   intro.setAttribute('hidden', false);
//   patientScore = 0;
// });

// Go to waiting room page
// loop over scores to see which is highest and prioritise accordingly.

// seperate event listeners which find target info from questions and push to an array
// one event listener which listens to what form was submit

// Data set find value - read only
// Query selector grab elements
