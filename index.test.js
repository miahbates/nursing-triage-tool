// check if clicking first next question button takes you to the chest pain section
test("check if clicking triage button takes you to the chest pain section" , () => {
  // arrange - create varibles/input and pass in what you think you are going to get
  // grab triage button 
  // grab chest pain section 
  // check if chest pain section contains !hidden attribute

  const triageButton = document.querySelector("#triageButton");
  const chestPainSection = document.querySelector('[data-index="1"]');
  // console.log(triageButton, chestPainSection);
  const checkAttribute = chestPainSection.hasAttribute('hidden');
  console.log(checkAttribute);

  // act
  // click the next question button
  
  triageButton.click();

  // assert - call helper function
  let expected = true;
  let result = checkAttribute;
  
  equal(result, expected, "chest pain section shown after clicking next question button");

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