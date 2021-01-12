function getIndexToIns(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
