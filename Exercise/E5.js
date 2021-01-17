//!Hash and Hash Table

var hash = (string) => {
  var hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash;
};

var HashTable = function () {
  this.collection = {};

  this.add = (key, value) => {
    var theHash = hash(key);
    if (!this.collection.hasOwnProperty(theHash)) {
      this.collection[theHash] = {};
    }
    this.collection[theHash][key] = value;
  };

  this.remove = (key) => {
    var hashedObj = this.collection[hash(key)];
    if (hashedObj.hasOwnProperty(key)) {
      delete hashedObj[key];
    }
    if (!Object.keys(hashedObj).length) {
      delete this.collection[hash(key)];
    }
  };

  this.lookup = function (key) {
    var theHash = hash(key);
    if (this.collection.hasOwnProperty(theHash)) {
      return this.collection[theHash][key];
    }
    return null;
  };
};

let coba = new HashTable();
coba.add("a", 1);
coba.add("b", 2);
coba.add("d", 3);
console.log(coba);
