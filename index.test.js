// check if clicking triage button takes you to the chest pain section.
test("Check if clicking triage button takes you to the chest pain section" , () => {
  // arrange - create varibles/input and pass in what you think you are going to get
  // grab triage button 
  // grab chest pain section 

  const triageButton = document.querySelector("#triageButton");
  const chestPainSection = document.querySelector('[data-index="1"]');
  // console.log(triageButton, chestPainSection);
  
  // act
  // click the next question button
  // check if chest pain section contains hidden attribute - should be false
  
  triageButton.click();
  const chestPainHidden = chestPainSection.hasAttribute('hidden');
  // console.log(chestPainHidden);

  // assert - call helper function
  let expected = false;
  let result = chestPainHidden;
  
  equal(result, expected, "Chest pain section shown after clicking triage button");

});

// check if clicking restart button restarts the assesment.
test("Check if clicking restart button restarts the assesment" , () => {
  // arrange - create varibles/input and pass in what you think you are going to get
  // grab restart button
  // grab section intro

  const restartButton = document.querySelector(".restartAssessment");
  const intro = document.querySelector(".intro");
  // console.log(restartButtons, intro);

  // act
  // click the next question button
  // check if chest pain section contains hidden attribute - should be false
  restartButton.click();
  const introHidden = intro.hasAttribute('hidden');

  // assert - call helper function
  let expected = false;
  let result = introHidden;
  
  equal(result, expected, "Clicking restart button restarts the assesment");

});

// // check if patient added to the waiting room list 
// test("check if patient has been added to waiting room when assessment has been completed" , () => {
//   // arrange - create varibles/input and pass in what you think you are going to get
//   // grab complete assessment button 
//   // grab waiting room list
//   // check length of list and save as curret length

//   const goToWaitingRoomBtn = document.querySelector('.goToWaitingRoom');
//   const waitingRoomOrderedList = document.querySelector('#waitingRoomList').children;

//   console.log(goToWaitingRoomBtn, waitingRoomOrderedList);

//   let currentLength = waitingRoomOrderedList.length;

//   // act
//   // click the complete assessment button 

//   goToWaitingRoomBtn.click();

//   // assert - call helper function
//   // expected result should be current val + 1
//   // compare with helper function 
//   let expected = currentLength.length + 1;
//   let result = document.querySelector('#waitingRoomList').children;

//   equal(result, expected, "patient has been added to waiting room");

// });

// // check if patient added to the waiting room list 
// test("check if patient has been added to waiting room when assessment has been completed" , () => {
//   // arrange - create varibles/input and pass in what you think you are going to get
//   // grab complete assessment button 
//   // grab waiting room list
//   // check length of list and save as curret length

//   const goToWaitingRoomBtn = document.querySelector('.goToWaitingRoom');
//   const waitingRoomOrderedList = document.querySelector('#waitingRoomList').children;

//   console.log(goToWaitingRoomBtn, waitingRoomOrderedList);

//   let currentLength = waitingRoomOrderedList.length;

//   // act
//   // click the complete assessment button 

//   goToWaitingRoomBtn.click();

//   // assert - call helper function
//   // expected result should be current val + 1
//   // compare with helper function 
//   let expected = currentLength.length + 1;
//   let result = document.querySelector('#waitingRoomList').children;

//   equal(result, expected, "patient has been added to waiting room");

// });