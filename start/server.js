// module.exports = exports = this
var log = require('logger')(module);
var db = require("db");
var User = require('./user');
db.connect();
// Pre party end

function run() {
  var amal = new User('Амаль');
  amal.hello(amal);
console.log(db.gPhr("Run successful"));
}
if(module.parent) {
  exports.run = run
}
else {
  run();
}
