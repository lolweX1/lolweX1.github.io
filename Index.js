function showSection(sect) {
	for (i in Object.keys(sections)) {
		sections[Object.keys(sections)[i]].style.display = "None";
		console.log("yeah")
	}
	if (sect == "home") {
		Hshow = true;
		HomeUpdate();
	} else {
		Hshow = false;
	}
	sections[sect].style.display = "block";
}