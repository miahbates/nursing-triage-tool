// grab button 
const triageButton = document.getElementById("triageButton");

// grab header
const intro = document.getElementsByClassName("intro")[0];

// when clicked hide header info
triageButton.addEventListener("click", function hideInto() {
  intro.style.visibility = "hidden";
})

console.log("hello world");