//!Count Negative Numbers in a Sorted Matrix
// Example 1:
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

// Example 2:
// Input: grid = [[3,2],[1,0]]
// Output: 0

// Example 3:
// Input: grid = [[1,-1],[-1,-1]]
// Output: 3

// Example 4:
// Input: grid = [[-1]]
// Output: 1

// var countNegatives = function (grid) {
//   var c = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       grid[i][j] < 0 ? c++ : grid;
//     }
//   }
//   return c;
// };
// console.log(
//   countNegatives([
//     [4, 3, 2, -1],
//     [3, 2, 1, -1],
//     [1, 1, -1, -2],
//     [-1, -1, -2, -3],
//   ])
// );

//! #1 =============================================================================================================

//! Sum of Unique Elements
// Example 1:
// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:
// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

// var sumOfUnique = function (nums) {
//   return nums.reduce(
//     (acc, cur) =>
//       nums.indexOf(cur) === nums.lastIndexOf(cur) ? acc + cur : acc,
//     0
//   );
// };
// console.log(sumOfUnique([1, 2, 3, 2, 1, 3, 4, 5]));

//! #2 =============================================================================================================

//! Squares of a Sorted Array
// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// var sortedSquares = function (nums) {
//   let arr = [],
//     a;
//   for (let i = 0; i < nums.length; i++) {
//     a = Math.pow(nums[i], 2);
//     arr.push(a);
//   }
//   return arr.sort((a, b) => {
//     return a - b;
//   });
// };
// console.log(sortedSquares([-4, -1, 0, 3, 10]));

//! #3 =============================================================================================================

//! Lucky Numbers in a Matrix
// Example 1:
// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column
// Example 2:
// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 3:
// Input: matrix = [[7,8],[1,2]]
// Output: [7]

//? ga jalan di leetcode
// var luckyNumbers = function (matrix) {
//   var arr = [];

//   for (let i = 0; i < matrix.length; i++) {
//     arr.push(Math.min(...matrix[i]));
//   }

//   return Math.max(...arr);
// };
// console.log(
//   luckyNumbers([
//     [3, 7, 8],
//     [9, 11, 13],
//     [15, 16, 17],
//   ])
// );

//?Another coolway but doesn't work in leetcode
// var luckyNumbers = function (matrix) {
//   let max;
//   for (let i = 0; i < matrix.length; i++) {
//     let min;
//     for (let j = 0; j < matrix[i].length; j++) {
//       min = !min ? matrix[i][j] : matrix[i][j] < min ? matrix[i][j] : min;
//       if (matrix[i][j] > 10000) return [];
//     }
//     max = !max ? min : min > max ? (max = min) : max;
//   }
//   return [max];
// };
// console.log(
//   luckyNumbers([
//     [37175, 88469, 34383, 59878],
//     [22895, 89898, 39729, 86750],
//     [47526, 17430, 59891, 31377],
//     [57626, 80390, 49184, 5802],
//   ])
// );

//!True Code
// let luckyNumbers = (A, ans = []) => {
//   let M = A.length,
//     N = A[0].length;
//   let min = Array(M).fill(Infinity);
//   let max = Array(N).fill(-Infinity);
//   for (let i = 0; i < M; ++i)
//     for (let j = 0; j < N; ++j)
//       console.log((min[i] = Math.min(min[i], A[i][j]))),
//         (max[j] = Math.max(max[j], A[i][j]));
//   for (let i = 0; i < M; ++i)
//     for (let j = 0; j < N; ++j)
//       if (min[i] == max[j])
//         // 🍀 lucky number 🍀
//         ans.push(A[i][j]);
//   return ans;
// };
// console.log(
//   luckyNumbers([
//     [3, 7, 8],
//     [9, 11, 13],
//     [15, 16, 17],
//   ])
// );

//!Map
// var luckyNumbers = function (matrix) {
//   const minArr = matrix.map((m, i) => Math.min(...m));
//   console.log(minArr);
//   const map = {};
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (map[j]) {
//         map[j].push(matrix[i][j]);
//       } else {
//         map[j] = [matrix[i][j]];
//       }
//     }
//   }
//   const res = [];
//   for (const col of Object.values(map)) {
//     const val = Math.max(...col);
//     if (minArr.includes(val)) res.push(val);
//   }
//   return res;
// };
// console.log(
//   luckyNumbers([
//     [3, 7, 8],
//     [9, 11, 13],
//     [15, 16, 17],
//   ])
// );

//! #4 =============================================================================================================

//!Maximum Product of Two Elements in an Array
// Example 1:
// Input: nums = [3,4,5,2]
// Output: 12
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.

// Example 2:
// Input: nums = [1,5,4,5]
// Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

//(nums[i]-1)*(nums[j]-1).
// var maxProduct = function(nums) {
//     if(nums)nums.splice
//     }
// };
// console.log(maxProduct([3,4,5,2]));

// var maxProduct = function (nums) {
//   console.log(nums.sort((a, b) => b - a)
//   );
//   return (nums[0] - 1) * (nums[1] - 1);
//   // Time Complexity: O(nlog(n))
//   // Space Complexity: O(1)
// };
// console.log(maxProduct([3, 4, 5, 2]));

//! #5 =============================================================================================================
