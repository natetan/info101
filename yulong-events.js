var keyButton = document.getElementById("keyButton");
var backButton = document.getElementById("back");
keyButton.addEventListener("click", showKey);
backButton.addEventListener("click", showKey);

function showKey() {
	var colorKey = document.getElementById("colorKey");
	if (colorKey.className === "panel panel-info hide") {
		colorKey.className = "panel panel-info";
	} else {
		colorKey.className = "panel panel-info hide";
	}
}