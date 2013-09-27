// add event to the window.onload
var addLoadEvents = function (func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
};
// change img basing on the img user's mouse
var slideImageEvents = function () {
	$("#nextImg").bind("click", preImgClick);
	$("#preImg").bind("click", nextImgClick);

	var focusThumbs = $("#imgThumb li");
	var length = focusThumbs.length;
	focusThumbs.each(function(index, element) {
		 element.onmouseover = function (index) {
		 	// remove the class 'current' of the unselected imgThumb
			$("#imgThumb li").removeClass("current");
			// add class 'current' to the selected imgThumb
			element.className = "current left";
			// change the img to display
			var imgDisplay = $("#imgDisplay img");
			var curImgSrc = element.firstChild.src;
			var preImgSrc = imgDisplay[0].src;
			if (curImgSrc != preImgSrc) {
				imgDisplay[0].src = curImgSrc;
			}
		} ;
	});
} ;

var changeDisplayImage = function (k) {
	var lis = $("#imgThumbList li");
	for (var i = 0; i < lis.length; ++ i) {
		lis[i].className = "normal left";
	}
	alert(k);
	lis[k].className = "current left";
	$("#imgDisplay img")[0].src = lis[k].firstChild.src;
} ;

var preImgClick = function () {
	var imgThumbList = $("#imgThumbList>ul");
	var minLeft = (imgThumbList.children("li").length - 1) * -99;
	var left = imgThumbList.position().left;
	if (left > minLeft) {
		left -= 99;
		var currentIndex = getCurrentDisplayImageIndex();
		if (currentIndex >= (-left % 99)) {
			changeDisplayImage(currentIndex + 1);
		}
		imgThumbList.css("left", left + "px");
	}
} ;

var nextImgClick = function () {
	var imgThumbList = $("#imgThumbList>ul");
	var left = imgThumbList.position().left;
	if (left < 0) {
		left += 99;
		var currentIndex = getCurrentDisplayImageIndex();
		if (currentIndex <= (-left % 99) + 300) {
			changeDisplayImage(currentIndex - 1);
		}
		imgThumbList.css("left", left + "px");
	}
} ;

var getCurrentDisplayImageIndex = function () {
	var lis = $("#imgThumbList li");
	for (var i = 0; i < lis.length; ++ i) {
		if (lis[i].className.indexOf("current") != -1) {
			return i;
		}
	}
	return 0;
} ;

addLoadEvents(slideImageEvents);