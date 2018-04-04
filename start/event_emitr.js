// Arguments can be chained

// handlers work in direct order only



const EventEmitter = require('events').EventEmitter;


var server = new EventEmitter;


server.on('request', function(request){
  request.approved = true
})


server.on('request', function(request){
console.log(request);
})


server.emit('request', {from: "Клиент"});
server.emit('request', {from: "Еще Клиент"});


server.on('error', function(err) {
  // If you have this , then server remains working, ignoring the error. If you thhrow error through
  // server.emit('error', new Error("серверная ошибка"))
  // without "on" handler, server will stop
   console.log(err);
})


server.emit('error', new Error("серверная ошибка"))
