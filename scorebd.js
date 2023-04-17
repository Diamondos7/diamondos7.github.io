// let tm1 = document.getElementById("score-home")
// let tm2 = document.getElementById("score-guest")
// let wn = document.getElementById("won")
// let count = 0
// let countt = 0

// function add1() {
// 	count += 1
// 	tm1.innerText = count
// 	console.log(tm1)
// }

// function add2() {
// 	count += 2
// 	tm1.innerText = count
// 	console.log(tm1)
// }

// function add3() {
// 	count += 3
// 	tm1.innerText = count
// 	console.log(tm1)
// }


// function add(){
// 	countt += 1
// 	tm2.innerText = countt
// 	console.log(countt)
// }

// function addd(){
// 	countt += 2
// 	tm2.innerText = countt
// 	console.log(countt)
// }

// function adddd(){
// 	countt += 3
// 	tm2.innerText = countt
// 	console.log(countt)
// }

// function win(){
// let number1Element = document.getElementById("score-home"); // Get the element with ID "number1"
// let number2Element = document.getElementById("sscore-guest"); // Get the element with ID "number2"

// let number1 = parseInt(number1Element.innerHTML); // Convert innerHTML of "number1" to integer
// let number2 = parseInt(number2Element.innerHTML); // Convert innerHTML of "number2" to integer

// 	if (number1 > number2) {
// 		console.log("The greatest number is: " + number1); // Output: "The greatest number is: 1234"
// 	} else if (number2 > number1) {
// 		console.log("The greatest number is: " + number2); // Output: "The greatest number is: 5678"
// 	} else {
// 		console.log("The numbers are equal"); // Output: "The numbers are equal"
// 	}

// }

let tm1 = document.getElementById("score-home")
let tm2 = document.getElementById("score-guest")
let wn = document.getElementById("won")
let count = 0
let countt = 0

function add1() {
	count += 1
	tm1.innerText = count
	console.log(tm1)
}

function add2() {
	count += 2
	tm1.innerText = count
	console.log(tm1)
}

function add3() {
	count += 3
	tm1.innerText = count
	console.log(tm1)
}

function add(){
	countt += 1
	tm2.innerText = countt
	console.log(countt)
}

function addd(){
	countt += 2
	tm2.innerText = countt
	console.log(countt)
}

function adddd(){
	countt += 3
	tm2.innerText = countt
	console.log(countt)
}

function win(){
	let number1Element = tm1; // Get the element with ID "score-home"
	let number2Element = tm2; // Get the element with ID "score-guest"

	let number1 = parseInt(number1Element.innerHTML); // Convert innerHTML of "score-home" to integer
	let number2 = parseInt(number2Element.innerHTML); // Convert innerHTML of "score-guest" to integer

	if (number1 > number2) {
        let message = "HomeWon!";
        wn.innerHTML = message;
        console.log(message); // Output: "The greatest number is: 1234"
    } else if (number2 > number1) {
        let message = "GuestTWON!";
        wn.innerHTML = message;
        console.log(message); // Output: "The greatest number is: 5678"
    } else {
        let message = "DRAW!!!";
        wn.innerHTML = message;
        console.log(message); // Output: "The numbers are equal"
    }
}

var c= "14"
var u= "465"
if (c=>u) {alert("Let the game begin!")}


// timer starts

let timer = document.getElementById("timer");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let intervalId;

let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  intervalId = setInterval(function() {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    timer.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
                        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
                        (seconds > 9 ? seconds : "0" + seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);



//timer ends


// let tm1 = document.getElementById("score-home")
// let tm2 = document.getElementById("score-guest")
// let count = 0
// let countt = 0
// function add1() {
// 	count += 1
// 	ome.inneText = count
// 	console.log(ome)
// }

// function add2() {
// 	count += 2
// 	home.inneText = count
// 	console.log(home)
// }

// function add3() {
// 	count += 3
// 	home.inneText = count
// 	console.log(home)
// }
// function add1() {
// 	countt += 1
// 	guest.inneText = count
// 	console.log(guest)
// }
// function add2() {
// 	countt += 2
// 	guest.inneText = count
// 	console.log(guest)
// }
// function add3() {
// 	countt += 3
// 	guest.inneText = count
// 	console.log(guest)
// }