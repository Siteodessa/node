//  Healthy example -
//  function Request() {
//   var self = this;
//   this.bigData = new Array(1e6).join('*');
//   this.send = function(data) {
//     console.log(data);
//   }
//   this.onError = function(data) {
//     self.send("извините, у нас проблема")
//   }
// }
//
//
// setInterval(function(){
//   var request = new Request();
//   console.log(process.memoryUsage().heapUsed);
// }, 200)
//
//

//  It overflows memory
//
// var EventEmitter = require('events').EventEmitter;
//
// var db =new EventEmitter();
//
//
// function Request() {
//  var self = this;
//  this.bigData = new Array(1e6).join('*');
//  this.send = function(data) {
//    console.log(data);
//  }
// db.on('data', function(info){
//   self.send(info)
// })
// }
//
// setInterval(function(){
//   var request = new Request();
//   console.log(process.memoryUsage().heapUsed);
// }, 200)



// It balances memoryUsage, it looks like it s not working in console, but it generates a new request killing the prev request. So a request lives  until you kill it and if you use
// db.setMaxListeners(0);
// then you must remove the this.end function because you must use default end behaviour

var EventEmitter = require('events').EventEmitter;

var db =new EventEmitter();

function Request() {
 var self = this;
 this.bigData = new Array(1e6).join('*');
 this.send = function(data) {
   console.log(data);
 }
 function onData(info){
   self.send(info);
 }
 this.end = function(){
   db.removeListener('data', onData)
 }
db.on('data', onData)
}

setInterval(function(){
  var request = new Request();
  request.end();
  console.log(process.memoryUsage().heapUsed);
  console.log(db);
}, 200)
