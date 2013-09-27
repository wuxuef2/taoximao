var pageEventSeter = function () {
    setHeadImgWidth();
};

var setHeadImgWidth = function () {
    var screenWidth = document.body.clientWidth;    
    $("#headImg").attr("width", screenWidth + "px");
    document.getElementById("headImg").setAttribute("min-width", "960px");
};

myWindowOnloadFunction(pageEventSeter);
