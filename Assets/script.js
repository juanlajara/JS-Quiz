// When User Clicks Start Button
var timer = 0;
var parent = document.querySelectorAll("main");
var descrQuestion = document.querySelectorAll("desc");
var timeEl = document.querySelectorAll("pgeTimer");
var startBtnVar = document.querySelectorAll("StartBtn");

function StartQuiz() {
	// console.log("Test Btn Strts Qz Func");
	removeElement("startBtn");
	descrQuestion[0].setAttribute();

	//  a- Start the timer
	//  b- Present the 1st question
	//       List of the options to question 1
	//          1a-Onclick for the right answer - Next Question()
	//          1b-Onclick wrong answer - SubtractTime()
}
//  a- Start the timer
//  b- Present the 1st question
//       List of the options to question 1
//          1a-Onclick for the right answer - Next Question()
//          1b-Onclick wrong answer - SubtractTime()
//  c-Next Question Repeat b()
//  d-Quiz Ends when Timer = 0 or All Questions are Answered
//  e-present user the option to add Initials with current score

// var counter = document.querySelector("#counter");
// var addButton = document.querySelector("#add");
// var subtractButton = document.querySelector("#subtract");

// var count = 0;
// counter.textContent = count;
// if (localStorage.getItem("count")) {
//   count = localStorage.getItem("count");
//   counter.textContent = count;
// }

// addButton.addEventListener("click", function () {
//   count++;
//   counter.textContent = count;

//   localStorage.setItem("count", count);
// });

// subtractButton.addEventListener("click", function () {
//   count--;
//   counter.textContent = count;

//   localStorage.setItem("count", count);
// });
function removeElement(elementId) {
	// Removes an element from the document
	var element = document.getElementById(elementId);
	element.parentNode.removeChild(element);
}

function addElement(parentId, elementTag, elementId, html) {
	// Adds an element to the document
	var p = document.getElementById(parentId);
	var newElement = document.createElement(elementTag);
	newElement.setAttribute("id", elementId);
	newElement.innerHTML = html;
	p.appendChild(newElement);
}
