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
	let x = tm1;
    let y = tm2;

if (x > y) {
    wn.innerText=alert("The home team wins the /n match with a total score of" + x);
} else if(x < y) {
    wn.innerText=alert("The guest team wins the /n match with a total score of" + y);
}
else{alert("the game hasnt been concluded yet.");}

}



var c= "14"
var u= "465"
if (c=>u) {alert("Let the game begin!")}





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