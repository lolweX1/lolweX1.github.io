function showSection(sect) {
	for (i in Object.keys(sections)) {
		sections[Object.keys(sections)[i]].style.display = "None";
		console.log("yeah")
	}
	if (sect != "home") {
		clearInterval(Hstart);
	} else {
		Hstart = setInterval(HomeUpdate, 20);
	}
	sections[sect].style.display = "block";
}