const sections = {
			"chemistry": document.getElementById("Chem")
			,"biology": document.getElementById("Bio")
			,"history": document.getElementById("History")
		}
		
		const classes = {
		}
		const students = {
		}

		function change(count, height, reverse) {
			console.log(document.getElementById("historyFlash").style.height);
			if (count != 0) {
				rev = reverse;
				tempHeight = height;
				if (height == 0 && rev == false) {
					rev = true;
				}
				if (rev) {
					tempHeight += 1;
				} else {
					tempHeight -= 1;
				}
				document.getElementById("historyFlash").style.height = "20vh";
				sleep(50);
				change(count-1, tempHeight, rev)
			}
		}
		function sleep(milliseconds) {
		  var start = new Date().getTime();
		  for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds){
			  break;
			}
		  }
		}
		
		function showSection(sect) {
			for (i in Object.keys(sections)) {
				sections[Object.keys(sections)[i]].display = "None";
			}
			console.log(sections[sect]);
			sections[sect].style.display = "block";
		}
		
		function log_classes(e) {
			e.preventDefault(); // Prevents form submission from reloading the page
			if (document.getElementById("ClassLog").value != "") {
				classes[document.getElementById("ClassLog").value.toLowerCase()] = "medium";
				document.getElementById("ClassLog").value = "";
			}
			if (document.getElementById("ClassRemove").value != "") {
				let removeObj = document.getElementById("ClassRemove").value.toLowerCase();
				if (!classes[removeObj]) {
					console.log("class is not found");
				} else {
					delete classes[removeObj]; //the if else is optional, but i added it bc why not
				}
				document.getElementById("ClassRemove").value = "";
			}
			for (let i = 0; i < Object.keys(classes).length; i++) {
				if(i == 0) {
					document.getElementById("ClassesAdded").innerHTML = "<b>Class List: </b> <br>" + Object.keys(classes)[i] + "<br>";
				} else {
					document.getElementById("ClassesAdded").innerHTML += Object.keys(classes)[i] + "<br>";
				}
			}
		}
		
		function log_students(e) {
			e.preventDefault(); // Prevents form submission from reloading the page
			if (document.getElementById("StudentLog").value != "") {
				students[document.getElementById("StudentLog").value.toLowerCase()] = "medium";
				document.getElementById("StudentLog").value = "";
			}
			if (document.getElementById("StudentRemove").value != "") {
				let removeObj = document.getElementById("StudentRemove").value.toLowerCase();
				if (!students[removeObj]) {
					console.log("class is not found");
				} else {
					delete students[removeObj]; //the if else is optional, but i added it bc why not
				}
				document.getElementById("StudentRemove").value = "";
			}
			for (let i = 0; i < Object.keys(students).length; i++) {
				if(i == 0) {
					document.getElementById("StudentsAdded").innerHTML = "<b>Student List: </b> <br>" + Object.keys(students)[i] + "<br>";
				} else {
					document.getElementById("StudentsAdded").innerHTML += Object.keys(students)[i] + "<br>";
				}
			}
		}
		
		function next_cg(currentNum) {
			if (currentNum+1 == 3) {
				populateSelect();
			}
			document.getElementById("cg_step_" + currentNum).style.display = "none";
			document.getElementById("cg_step_" + (currentNum+1)).style.display = "inline-block";
		}
		
		function back_cg(currentNum) {
			/*if (currentNum-1 == 3) {
				populateSelect();
			}*/
			console.log("wtf" + currentNum);
			document.getElementById("cg_step_" + currentNum).style.display = "none";
			document.getElementById("cg_step_" + (currentNum-1)).style.display = "inline-block";
		}
		
		function populateSelect() {
			for (let i = 0; i < Object.keys(students).length; i++) {
				let sel = document.createElement("select");
				let breakText = document.createElement("br");
				let name = Object.keys(students)[i];
				sel.id = "selectName" + name;
				sel.name = name;
				
				let label = document.createElement('label'); // Create the label element
				label.for = sel.id;
				label.textContent = Object.keys(students)[i] + " priority: ";
				
				//select.onchange = showSelection;
				document.getElementById("myForm").appendChild(breakText);
				document.getElementById("myForm").appendChild(label);
				document.getElementById("myForm").appendChild(sel);
				sel.innerHTML = '<option value="" selected disabled>medium</option>';
				let temp = ["low", "medium", "high"]
				for (let j = 0; j <temp.length; j++) {
					const opt = document.createElement("option");
					opt.value = temp[j];
					opt.textContent = temp[j];
					sel.appendChild(opt);
				}
			}
		}
		
		const teachers = {
			"Teachname": {
				"periods": {
					"period": "className or none"
				},
				"students": {
					"period": [],
				}
			}
		}
		function calc() {
		}
