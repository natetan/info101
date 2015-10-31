var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var menu3 = document.getElementById("menu3");
var menu4 = document.getElementById("menu4");
var menu5 = document.getElementById("menu5");
var menu6 = document.getElementById("menu6");

menu1.addEventListener("click", showActivity);
menu2.addEventListener("click", showActivity);
menu3.addEventListener("click", showActivity);
menu4.addEventListener("click", showActivity);
menu5.addEventListener("click", showActivity);
menu6.addEventListener("click", showActivity);

function showActivity() {
	var allItems = document.getElementsByClassName("navItem");
	for (var i = 0; i < allItems.length; i++) {
		allItems[i].className = "inactive";
	}
	var menus = this.attributes["menuName"].value
	var item = document.getElementById(menus);
	if (item.className == "inactive") {
		item.className = "active";
	} else {
		item.className = "inactive";
	}

}