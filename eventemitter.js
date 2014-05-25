// Event Listener Leak
// Include The 'events' Module
var events = require("events");
var emitter = new events.EventEmitter();

var i = 0;
function createObject() {

    var temp_func = function() {
        console.log("hi");
    };

    emitter.on("some_event", temp_func);

    if(++i < 99999) {
        setTimeout(createObject, 0);
    }
}

createObject();