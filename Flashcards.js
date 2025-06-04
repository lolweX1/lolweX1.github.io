	const cards = {
	"Gunpowder": "led to expansion of territory for land-based empires"
	,"": ""	
}
let count = 0;
let s = true;
console.log(Object.keys(cards).length);
function flashUpdate() {
	document.getElementById("flashTerm").innerHTML = Object.keys(cards)[count];
	document.getElementById("flashText").innerHTML = cards[Object.keys(cards)[count]];
}
function add(c) {
	count += c;
	if (count >= Object.keys(cards).length) {
		count = 0;
	}
	if (count < 0) {
		count = Object.keys(cards).length-1;
	}
	console.log(count);
	flashUpdate();
}
flashUpdate();

function swap() {
	if (s) {
		document.getElementById("flashTerm").style.display = "none";
		document.getElementById("flashText").style.display = "inline-block";
	} else {
		document.getElementById("flashTerm").style.display = "inline-block";
		document.getElementById("flashText").style.display = "none";
	}
	s = !s;
}
