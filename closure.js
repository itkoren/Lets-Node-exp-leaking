// Closure Leak Example
var srcObj = null;

var switchObj = function () {
    var originalObj = srcObj;

    var haveOriginal = function () {
        if (originalObj) {
            console.log("have original");
        }
    };

    srcObj = {
        longStr: new Array(1000000).join("*"),
        someMethod: function () {
            console.log(someMessage);
        }
    };
};

setInterval(switchObj, 1000);