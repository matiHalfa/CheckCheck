exports.myName = function () {
    return "Mati Halfa";
  };

  var events = require('events');
  var eventEmitter = new events.EventEmitter();
  
  //Create an event handler:
  var myEventHandler = function () {
    console.log('I hear a scream!');
  }
  
  //Assign the eventhandler to an event:
  eventEmitter.on('scream', myEventHandler);
  
  exports.fireEvent = function () {
    eventEmitter.emit('scream');
  };

  //Fire the 'scream' event:
  

