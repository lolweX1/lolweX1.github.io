const sections = {
	"chemistry": document.getElementById("Chem")
	,"biology": document.getElementById("Bio")
	,"history": document.getElementById("History")
	,"physics": document.getElementById("Physics")
	,"home": document.getElementById("Home")
}

function showSection(sect) {
	for (i in Object.keys(sections)) {
		sections[Object.keys(sections)[i]].style.display = "None";
	}
	if (sect != "home") {
		clearInterval(Hstart);
	} else {
		Hstart = setInterval(HomeUpdate, HIntervalBreak);
	}
	sections[sect].style.display = "block";
}