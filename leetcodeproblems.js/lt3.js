//! Make Two Arrays Equal by Reversing Sub-arrays

var canBeEqual = function (target, arr) {
  if (target.length !== arr.length) return false;

  var mapTar = {};
  var mapArr = {};

  for (var i = 0; i < arr.length; i++) {
    mapTar[target[i]] = mapTar[target[i]] + 1 || 1;
    mapArr[arr[i]] = mapArr[arr[i]] + 1 || 1;
  }
  for (var key in mapArr) {
    if (mapArr[key] !== mapTar[key]) return false;
  }

  return true;
};
