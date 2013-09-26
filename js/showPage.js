var pageEventSeter = function () {
    setHeadImgWidth();
};

var setHeadImgWidth = function () {
    var screenWidth = document.body.clientWidth;
    //alert(screenWidth);
    //$("#headImg").attr("width", screenWidth + "px");
    $("#headImg").attr("width", screenWidth + "px");
    //document.getElementById("headImg").setAttribute("width", screenWidth + "px");
    document.getElementById("headImg").setAttribute("min-width", "960px");
};

myWindowOnloadFunction(pageEventSeter);
