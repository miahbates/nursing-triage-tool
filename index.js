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


console.log("hello world");