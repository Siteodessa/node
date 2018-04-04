function makeCounter() {
  var currentCount = 1;

  return { //we return an object instead of a function
    getNext: function() {
      return currentCount++;
    },

    set: function(value) {
      currentCount = value;
    },

    reset: function() {
      currentCount = 1;
    }
  };
}

var counter = makeCounter();

alert( counter.getNext() ); // 1
alert( counter.getNext() ); // 2

counter.set(5);
alert( counter.getNext() ); // 5






function makeCounter() {
  var currentCount = 1;

  // возвращаемся к функции
  function counter() {
    return currentCount++;
  }

  // ...и добавляем ей методы!
  counter.set = function(value) {
    currentCount = value;
  };

  counter.reset = function() {
    currentCount = 1;
  };

  return counter;
}

var counter = makeCounter();

alert( counter() ); // 1
alert( counter() ); // 2

counter.set(5);
alert( counter() ); // 5















function sum(a) {

  return function(b) {
    return a + b; // возьмет a из внешнего LexicalEnvironment
  };

}

alert( sum(1)(2) );
alert( sum(5)(-1) );



















function makeBuffer() {
  var text = '';

  return function(piece) {
    if (arguments.length == 0) { // вызов без аргументов
      return text;
    }
    text += piece;
  };
};

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
alert( buffer() ); // 'Замыкания Использовать Нужно!'

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

alert( buffer2() ); // '010'






function makeBuffer() {
  var text = '';

  function buffer(piece) {
    if (arguments.length == 0) { // вызов без аргументов
      return text;
    }
    text += piece;
  };

  buffer.clear = function() {
    text = "";
  }

  return buffer;
};

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""











// SORTING  - we have an array with objects and want to sort objects

var users = [{
  name: "Zeus",
  surname: 'Thundergod',
  age: 20
}, {
  name: "Drow",
  surname: 'Ranger',
  age: 25
}, {
  name: "Beast",
  surname: 'Master',
  age: 18
}];




// simple sort
// by name field name (Zeus, Beast, Drow)
users.sort(function(a, b) {
  return a.name > b.name ? 1 : -1;
});

// by age  (Beast, Zeus, Drow)
users.sort(function(a, b) {
  return a.age > b.age ? 1 : -1;
});

//like a boss SORTING


function byField(field) {
    return function(a, b) {
      return a[field] > b[field] ? 1 : -1;
    }
  }


  // and call

  users.sort(byField('name'));
users.forEach(function(user) {
  alert( user.name );
});

users.sort(byField('age'));
users.forEach(function(user) {
  alert( user.name );
});


// HEre we remove those from arra y who don't satisfy the conditions.

function filter(arr, func) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (func(val)) {
      result.push(val);
    }
  }

  return result;
}

var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0;
})); // 2, 4, 6














// here we take from and before two postitions in array

function filter(arr, func) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (func(val)) {
      result.push(val);
    }
  }

  return result;
}

function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
  }

var arr = [1, 2, 3, 4, 5, 6, 7];
alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6





// Here we  will get only the common elements of an array


function filter(arr, func) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (func(val)) {
      result.push(val);
    }
  }

  return result;
}

function inArray(arr) {
    return function(x) {
      return arr.indexOf(x) != -1;
    };
  }

var arr = [1, 2, 3, 4, 5, 6, 7];
alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
