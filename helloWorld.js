var skyrimTrees = document.getElementById("skyrimTrees");
var bleakFalls = document.getElementById("bleakFalls");
var dragon = document.getElementById("dragon");

skyrimTrees.addEventListener("click", showPic);
bleakFalls.addEventListener("click", showPic);
dragon.addEventListener("click", showPic);

function showPic() {
	var allImages = document.querySelectorAll("img");
	for (var i = 0; i < allImages.length; i++) {
		allImages[i].className = "hide";
	}
	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if (pic.className === "hide") {
		pic.className = "";
	} else {
		pic.className = "hide";
	}
}

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	var sum = one + two;
	addSum.innerHTML = "Your sum is " + sum;
}