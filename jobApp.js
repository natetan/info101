var terms = document.getElementById("terms");
terms.addEventListener("click", showContent);

function showContent() {
	var terms = document.getElementById("conditions");
	if(terms.className === "hide") {
		terms.className = "conditions bg-info";
	} else {
		terms.className = "hide";
	}
}