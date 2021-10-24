// Hide into button and show symptom questions.

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
})


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
  })
}

let patientScore = 0;

// let feverButton = document.getElementById('submit-fever');

// feverButton.addEventListener('click', () => {
//   let radioButtons = document.querySelectorAll("input[name='fever']");
//   radioButtons.forEach(radio => { 
//     if (radio.checked) {
//       patientScore += radio.value;
//     }
//   })

// })

let nextButtons = document.querySelectorAll('[data-name]');

nextButtons.forEach(nextButton => {
  nextButton.addEventListener('click', () => {
    let name = nextButton.dataset.name;
    let radioButtons = document.querySelectorAll(`input[name='${name}']`);
    radioButtons.forEach(radio => { 
      if (radio.checked) {
        patientScore += parseInt(radio.value);
      }
    })
    console.log('Your score is ', patientScore);
  })
})


// seperate event listeners which find target info from questions and push to an array
// one event listener which listens to what form was submit

// Data set find value - read only
// Query selector grab elements 

console.log("hello world");