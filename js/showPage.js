var pageEventSeter = function () {
    setHeadImgWidth();
};

var setHeadImgWidth = function () {
    var screenWidth = document.body.clientWidth;    
    
    if (navigator.userAgent.indexOf("MSIE 7.0") > 0) {
        document.getElementById("headImg").style.width = screenWidth + "px";
    }
    else {
        $("#headImg").attr("width", screenWidth + "px");
        document.getElementById("headImg").setAttribute("min-width", "960px");
    }
};

myWindowOnloadFunction(pageEventSeter);
