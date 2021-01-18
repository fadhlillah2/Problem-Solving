//!Sort an Array Alphabetically using the sort Method

function alphabeticalOrder(arr) {
  return arr
    .map((e) => e.charCodeAt())
    .sort(function (a, b) {
      return a - b;
    })
    .map((e) => String.fromCharCode(e));
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

console.log("abc".charCodeAt(2));
console.log([3, 1, 2].sort());
