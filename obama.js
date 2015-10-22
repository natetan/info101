var left1 = document.getElementById("left1");
var left2 = document.getElementById("left2");
var left3 = document.getElementById("left3");
var left4 = document.getElementById("left4");
var left5 = document.getElementById("left5");

left1.addEventListener("click", showContent);
left2.addEventListener("click", showContent);
left3.addEventListener("click", showContent);
left4.addEventListener("click", showContent);
left5.addEventListener("click", showContent);

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

function showContent() {
	var allContent = document.getElementsByClassName("information");
	for (var i = 0; i <allContent.length; i++) {
		allContent[i].className = "hide";
	}
	var pId = this.attributes["data-img"].value;
	var content = document.getElementById(pId);
	if (content.className === "hide") {
		content.className = "";
	} else {
		content.className = "hide";
	}
}