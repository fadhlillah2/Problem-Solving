// function pascals(numRows) {
//   if (numRows === 0) return [];
//   if (numRows === 1) return [[1]];
//   let result = [];
//   for (let row = 1; row <= numRows; row++) {
//     let arr = [];
//     for (let col = 0; col < row; col++) {
//       if (col === 0 || col === row - 1) {
//         arr.push(1);
//       } else {
//         arr.push(result[row - 2][col - 1] + result[row - 2][col]);
//       }
//     }
//     result.push(arr);
//   }
//   return result;
// }
// console.log(pascals(3));

//!Another way
// function pascalSeq(n) {
//   let pascal = [];
//   for (let i = 0; i < n; i++) {
//     pascal[i] = [];
//     pascal[i][0] = 1;
//     for (let j = 1; j < i; j++) {
//       pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
//     }
//     pascal[i][i] = 1;
//   }
//   return pascal;
// }
// console.log(pascalSeq(5));

//! #1 =========================================================================================

//!Average Salary Excluding the Minimum and Maximum Salary
// Example 1:
// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500

// Example 2:
// Input: salary = [1000,2000,3000]
// Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000)/1= 2000

// Example 3:
// Input: salary = [6000,5000,4000,3000,2000,1000]
// Output: 3500.00000

// Example 4:
// Input: salary = [8000,9000,2000,3000,6000,1000]
// Output: 4750.00000

//!solved by my code
// var average = function (salary) {
//   var r = salary.sort((a, b) => {
//     return a - b;
//   });
//   let tot = 0;
//   for (let i = 0; i < r.length; i++) {
//     r[0] = 0;
//     r[r.length - 1] = 0;
//     tot += r[i] / (r.length - 2);
//   }
//   return tot;
// };

// console.log(average([8000, 9000, 2000, 3000, 6000, 1000]));

//! #2 =========================================================================================

//! Sort Array by Increasing Frequency
// Example 1:
// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

// Example 2:
// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

// Example 3:
// Input: nums = [-1,1,-6,4,5,-6,1,4,1]
// Output: [5,-1,4,4,-6,-6,1,1,1]

//!a little bit hard to understand
// var frequencySort = function (nums) {
//   const map = new Map();
//   console.log(map);
//   for (let n of nums) {
//     console.log(map.set(n, map.get(n) + 1 || 1));
//   }
//   return nums.sort((a, b) => map.get(a) - map.get(b) || b - a);
// };
// console.log(frequencySort([1, 1, 2, 2, 2, 3]));

//!another way
// time O(n log n) space O(n)
// var frequencySort = function (nums) {
//   const map = {};
//   const result = [];

//   for (const num of nums) {
//     console.log((map[num] = map[num] + 1 || 1));
//   }

//   const entries = Object.entries(map);
//   console.log(entries);
//   entries.sort(([key1, value1], [key2, value2]) => {
//     if (value1 === value2) {
//       return key2 - key1;
//     }
//     return value1 - value2;
//   });
//   entries;

//   for (const [number, frequency] of entries) {
//     result.push(new Array(frequency).fill(number));
//     result;
//   }

//   return result.flat();
// };
// console.log(frequencySort([2, 3, 1, 3, 2]));

//! #3 =========================================================================================

//!Find Common Characters
// Example 1:
// Input: ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:
// Input: ["cool","lock","cook"]
// Output: ["c","o"]

// var commonChars = function (A) {
//   let res = [...A[0]];
//   console.log(res);
//   for (let i = 1; i < A.length; i++) { //??
//     res = res.filter((e) => {
//       const l = A[i].length;
//       console.log((A[i] = A[i].replace(e, "")));
//       return l > A[i].length;
//     });
//   }
//   return res;
// };
// commonChars(["bella", "label", "roller"]);

//! #4 =========================================================================================

//!Find Words That Can Be Formed by Characters
// Example 1:
// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation:
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

// Example 2:
// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation:
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

//!1
// var countCharacters = function (words, chars) {
//   const count = [];
//   for (const ch of chars) {
//     count[ch] = (count[ch] || 0) + 1;
//   }
//   let total = 0;
//   for (const word of words) {
//     const wordCount = [];
//     let canConstruct = true;
//     for (const ch of word) {
//       wordCount[ch] = (wordCount[ch] || 0) + 1;
//       if (!count[ch] || wordCount[ch] > count[ch]) {
//         canConstruct = false;
//         break;
//       }
//     }

//     if (canConstruct) total += word.length;
//   }
//   return total;
// };
// console.log(countCharacters(["cat", "tui ", "tah", "tree"], "atach"));

//!2
// var countCharacters = function (words, chars) {
//   return words
//     .filter((word) => {
//       let charsRemain = chars.split("");
//       let correctWord = true;

//       word.split("").forEach((letter) => {
//         if (!correctWord) return;
//         if (charsRemain.includes(letter)) {
//           charsRemain.splice(charsRemain.indexOf(letter), 1);
//         } else {
//           correctWord = false;
//         }
//       });

//       return correctWord;
//     })
//     .join("").length;
// };
// console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));

//! #5 =========================================================================================
