var getElement = function (id) { 
	return document.getElementById(id);
} ;

var addLoadEvent = function (func){
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

var moveElement = function (elementID, final_x, final_y, interval) {
	if (! document.getElementById) {
		return false;
	}
	if (! document.getElementById(elementID)) {
		return false;
	}
	var elem = document.getElementById(elementID);
	clearTimeout(elem.movement);
	if (! elem.style.left) {
		elem.style.left = "0px";
	}
	if (! elem.style.top) {
		elem.style.top = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y) {
		return true;
	}
	if (xpos < final_x) {
		var dist = Math.ceil((final_x - xpos) / 10);
		xpos = xpos + dist;
	}
	if (xpos > final_x) {
		var dist = Math.ceil((xpos - final_x) / 10);
		xpos = xpos - dist;
	}
	if (ypos < final_y) {
		var dist = Math.ceil((final_y - ypos) / 10);
		ypos = ypos + dist;
	}
	if (ypos > final_y) {
		var dist = Math.ceil((ypos - final_y) / 10);
		ypos = ypos - dist;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
	elem.movement = setTimeout(repeat, interval);
} ;

var classNormal = function (iFocusBtnID){
	var iFocusBtns= getElement(iFocusBtnID).getElementsByTagName('li');
	for (var i = 0; i < iFocusBtns.length; ++ i) {
		iFocusBtns[i].className='normal left';
	}
} ;

var classCurrent = function (iFocusBtnID, n){
	var iFocusBtns= getElement(iFocusBtnID).getElementsByTagName('li');
	iFocusBtns[n].className='current left';
} ;

var iFocusChange = function () {
	if (! getElement('showImg')) {
		return false;
	}
	getElement('showImg').onmouseover = function(){atuokey = true};
	getElement('showImg').onmouseout = function(){atuokey = false};
	var iFocusBtns = getElement('imgThumb').getElementsByTagName('li');
	var listLength = iFocusBtns.length;
	iFocusBtns[0].onmouseover = function() {
		moveElement('imgList', 0, 0, 5);
		classNormal('imgThumb');
		classCurrent('imgThumb', 0);
	}
	if (listLength>=2) {
		iFocusBtns[1].onmouseover = function() {
			moveElement('imgList', 0, -306, 5);
			classNormal('imgThumb');
			classCurrent('imgThumb', 1);
		}
	}
	if (listLength>=3) {
		iFocusBtns[2].onmouseover = function() {
			moveElement('imgList', 0, -612, 5);
			classNormal('imgThumb');
			classCurrent('imgThumb', 2);
		}
	}
	if (listLength>=4) {
		iFocusBtns[3].onmouseover = function() {
			moveElement('imgList', 0, -918, 5);
			classNormal('imgThumb');
			classCurrent('imgThumb', 3);
		}
	}
} ;


var atuokey = false;
addLoadEvent(iFocusChange);
