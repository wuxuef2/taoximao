var simpleJs = {};

var myWindowOnloadFunction = function (init) {
    var oldLoader = window.onload || function () {};
    window.onload = function () {
        init();
        oldLoader();
    }
};