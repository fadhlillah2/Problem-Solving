// !Data Structures: Create a Set Class
function Set() {
  var collection = [];

  this.add = function (val) {
    return collection.indexOf(val) !== -1
      ? console.log("failed")
      : console.log(Boolean(collection.push(val)));
  };

  this.remove = function (val) {
    return collection.indexOf(val)
      ? Boolean(collection.splice(collection.indexOf(val), 1))
      : false;
  };

  this.print = function () {
    return console.log(collection);
  };
}

let coba = new Set();
coba.add(2);
coba.add(4);
coba.add(2);
coba.add(4);
coba.add(0);
coba.print();

// true
// failed
// failed
// true
// [ 2, 4, 0 ]
