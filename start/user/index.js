//   user/index.js
var db = require('db');

function User(name) {
  this.name = name
}

User.prototype.hello = function (who) {
  console.log(db.gPhr("Hello") + ", " + who.name);
};

module.exports = User;


// console.log("user.js is required!");

// exports = User;  Не работает - ты меняешь само свойство
//    Работает так                 Или так
// __________________________________________
//    exports.User = User;          module.exports = User;




// console.log(module);
