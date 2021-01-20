//!Destroy the same element

const destroyer = (arr, ...valsToRemove) =>
  arr.filter((elem) => !valsToRemove.includes(elem));

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [ 1, 1 ]
