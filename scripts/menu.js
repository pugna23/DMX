var electro = document.getElementById("electro");
var iluminacion = document.getElementById("iluminacion");
var cable = document.getElementById("cable");

electro.addEventListener("mouseenter",picLink);
iluminacion.addEventListener("mouseenter",picLink);
cable.addEventListener("mouseenter",picLink);

function picLink(){
	var allImages = document.querySelectorAll("img");

	for (var i =0 ; i < allImages.length; i++) {
		allImages[i].className = "hide";
	};

	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if (pic.className == "hide"){
		pic.className = "";
	} else{
		pic.className="hide";
	}
}
