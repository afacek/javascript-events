window.onload = function(){
// alert("hi");
var karis1 = document.getElementById('karis');
karis1.addEventListener("click",showPic);

var willie1 = document.getElementById('willie');
willie1.addEventListener("click",showPic);

var nancie1 = document.getElementById('nancie');
nancie1.addEventListener("click",showPic);

var andrew1 = document.getElementById('andrew');
andrew1.addEventListener("click",showPic);

var diana1 = document.getElementById('diana');
diana1.addEventListener("click",showPic);


// showpic function will pic all the image using the this to get the clicked element.

function showPic(){
	
	var picId = this.attributes["data-img"].value;
	console.log(picId);
	var pic = document.getElementById(picId);

	if (pic.className === "hide") {
		pic.className = "";
	}
	else
	{
		pic.className = "hide";
	}
	

	}

}