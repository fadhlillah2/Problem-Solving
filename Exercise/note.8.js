//!Make Two Arrays Equal by Reversing Sub-arrays
// Example 1:
// Input: target = [1,2,3,4], arr = [2,4,1,3]
// Output: true
// Explanation: You can follow the next steps to convert arr to target:
// 1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
// 2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
// 3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
// There are multiple ways to convert arr to target, this is not the only way to do so.

// Example 2:
// Input: target = [7], arr = [7]
// Output: true
// Explanation: arr is equal to target without any reverses.

// Example 3:
// Input: target = [1,12], arr = [12,1]
// Output: true

// Example 4:
// Input: target = [3,7,9], arr = [3,7,11]
// Output: false
// Explanation: arr doesn't have value 9 and it can never be converted to target.

// Example 5:
// Input: target = [1,1,1,1,1], arr = [1,1,1,1,1]
// Output: true

//!My Code Success
// var canBeEqual = function (target, arr) {
//   var a = target.sort(),
//     b = arr.sort();
//   for (let i = 0; i < target.length; i++) {
//     if (a[i] !== b[i]) return false;
//   }
//   return true;
// };
// console.log(canBeEqual([3, 7, 9], [3, 7, 11]));

//! #1 ====================================================================================================================

//! The K Weakest Rows in a Matrix
// Example 1:
// Input: mat =
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]],
// k = 3
// Output: [2,0,3]
// Explanation:
// The number of soldiers for each row is:
// row 0 -> 2
// row 1 -> 4
// row 2 -> 1
// row 3 -> 2
// row 4 -> 5
// Rows ordered from the weakest to the strongest are [2,0,3,1,4]

// Example 2:
// Input: mat =
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]],
// k = 2
// Output: [0,2]
// Explanation:
// The number of soldiers for each row is:
// row 0 -> 1
// row 1 -> 4
// row 2 -> 1
// row 3 -> 1
// Rows ordered from the weakest to the strongest are [0,2,3,1]

//?Perlu dipahami lebih lanjut tentang method
// let kWeakestRows = (A, K) => {
//   return A.map((row, i) => [row.reduce((a, b) => a + b), i]) //output: [ [ 1, 0 ], [ 4, 1 ], [ 1, 2 ], [ 1, 3 ] ]
//     .sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0])) //out: [ [ 1, 0 ], [ 1, 2 ], [ 1, 3 ], [ 4, 1 ] ]
//     .map((row) => row[1]) //out:  [ 0, 2, 3, 1 ]
//     .slice(0, K); //out : [ 0, 2 ]
// };
// console.log(
//   kWeakestRows(
//     [
//       [1, 0, 0, 0],
//       [1, 1, 1, 1],
//       [1, 0, 0, 0],
//       [1, 0, 0, 0],
//     ],
//     2
//   )
// );

//! #2 ====================================================================================================================

//!Prime Number Using Sieve of Eratosthenes algorithm from stac overflow
// var eratosthenes = function (n) {
//   // Eratosthenes algorithm to find all primes under n
//   var array = [],
//     upperLimit = Math.sqrt(n),
//     output = [];

//   // Make an array from 2 to (n - 1)
//   for (var i = 0; i < n; i++) {
//     array.push(true);
//     console.log(array);
//   }

//   // Remove multiples of primes starting from 2, 3, 5,...
//   for (var i = 2; i <= upperLimit; i++) {
//     if (array[i]) {
//       for (var j = i * i; j < n; j += i) {
//         array[j] = false;
//       }
//     }
//   }

//   // All array[i] set to true are primes
//   for (var i = 2; i < n; i++) {
//     if (array[i]) {
//       output.push(i);
//     }
//   }

//   return output;
// };
// console.log(eratosthenes(15));

//! use this code first!!
// function primeSequence(n) {
//   let hash = Array(n).fill(true);
//   console.log(hash);
//   hash[0] = false;
//   hash[1] = false;
//   for (let i = 2; i * i < n; i++) {
//     if (hash[i]) {
//       for (let j = i * i; j < n; j += i) {
//         hash[j] = false;
//       }
//     }
//   }

//   let a = [];

//   hash.filter((e, i) => {
//     if (e) a.push(i);
//   });
//   console.log(hash);

//   return a;
// }
// console.log(primeSequence(15));

//! #3 ====================================================================================================================

//!Sort Array By Parity II
// Example 1:
// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

// var sortArrayByParityII = function (A) {
//   let result = [],
//     even = [],
//     odd = [],
//     i = 0;

//   A.forEach((element, index) => {
//     element % 2 ? odd.push(element) : even.push(element);
//     //ingat element%2=0 maka akan dinyatakan false oleh komputer
//   });
//   console.log(odd);
//   console.log(even);

//   while (result.length < A.length) {
//     result.push(even[i]);
//     result.push(odd[i]);
//     i++;
//   }
//   return result;
// };
// console.log(sortArrayByParityII([4, 2, 5, 7]));

//! #4 ====================================================================================================================

//!Relative Sort Array
// Example 1:
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

// var relativeSortArray = function (arr1, arr2) {
//   let a = [],
//     arr = [...arr1];
//   for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < arr1.length; j++) {
//       if (arr2[i] === arr1[j]) {
//         a.push(arr1[j]);
//         arr.splice(arr.indexOf(arr2[i]), 1);
//       }
//     }
//   }
//   return a.concat(arr);
// };
// console.log(
//   relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
// );

//! #5 ====================================================================================================================
