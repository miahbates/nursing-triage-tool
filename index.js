// grab button 
const triageButton = document.getElementById("triageButton");

// grab header excluding title using class intro
const intro = document.getElementsByClassName("intro")[0];

// grab symptom section
const symptoms = document.querySelector(".symptoms");

// when clicked hide header info and display symptom list
triageButton.addEventListener("click", function hideIntro() {
  intro.style.visibility = "hidden";
  symptoms.removeAttribute("hidden");
})


// switching between questions

let buttons = document.querySelectorAll('[data-to]');
const sections = document.querySelectorAll('[data-index]'); 

for (let i = 0; i < buttons.length; i++ ) {
  buttons[i].addEventListener('click', () => {
    // loop over sections and hide them all
    for (let j = 0; j < sections.length; j++) {
      sections[j].setAttribute('hidden');
    }
    // on the button clicked, find the target index to show
      let target = buttons[i].dataset.to;
      // query select to get the thing with [data-index="TARGET"]
      let matchingTarget = document.querySelector([`data-index=${target}`])
      // show that section
      matchingTarget.removeAttribute(hidden);
  })
}

//data set find value read only
//query selector grab element 

console.log("hello world");