//!Count Largest Group
// Example 1:
// Input: n = 13
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.

// Example 2:
// Input: n = 2
// Output: 2
// Explanation: There are 2 groups [1], [2] of size 1.

// Example 3:
// Input: n = 15
// Output: 6

// Example 4:
// Input: n = 24
// Output: 5

// var countLargestGroup = function (n) {

//   function sumDigit(value) {
//     var sum = 0;

//     while (value) {
//       sum += value % 10;
//       value = Math.floor(value / 10);
//     }
//     return sum;
//   }

// };

//! 1
// const getSum = (num) =>
//   num === 0 ? 0 : (num % 10) + getSum(Math.floor(num / 10));
// const reducer = (max) => (total, sum) => total + (sum === max);

// const countLargestGroup = (n) => {
//   const results = [];

//   while (n > 0) {
//     const sum = getSum(n--) - 1;
//     results[sum] = (results[sum] || 0) + 1;
//   }

//   return results.reduce(reducer(Math.max(...results)), 0);
// };
// console.log(countLargestGroup(13));

//! 2
// const countLargestGroup = (n) => {
//   let map = new Map();
//   console.log(map), (max = 1), (maxCount = 0);
//   for (let i = 1; i <= n; i++) {
//     let sum = sumDigits(i),
//       sumCount = map.get(sum) + 1 || 1;
//     console.log(sumCount);
//     map.set(sum, sumCount);
//     if (sumCount === max) maxCount++;
//     else if (sumCount > max) maxCount = 1;
//     max = Math.max(max, sumCount);
//   }
//   return maxCount;
// };
// const sumDigits = (num) => {
//   let sum = 0;
//   while (num) {
//     sum += num % 10;
//     num = Math.trunc(num / 10);
//   }
//   return sum;
// };
// console.log(countLargestGroup(13));

//! #1 =================================================================================================

//!DI String Match
// Example 1:
// Input: "IDID"
// Output: [0,4,1,3,2]

// Example 2:
// Input: "III"
// Output: [0,1,2,3]

// Example 3:
// Input: "DDI"
// Output: [3,2,0,1]

// var diStringMatch = function (S) {
//     let result = [],
//       min = 0,
//       max = S.length;
//     for (i in S) {
//       if (S[i] === "I") {
//         result.push(min);
//         min += 1;
//       } else {
//         result.push(max);
//         max -= 1;
//       }
//     }
//     if (S[S.length - 1] === "I") {
//       result.push(min);
//     } else {
//       result.push(max);
//     }
//     return result;
//   };
//   console.log(diStringMatch("IDID"));

//! #1 =========================================================================================
//! #2 =========================================================================================
//! #3 =========================================================================================
//! #4 =========================================================================================
//! #5 =========================================================================================
