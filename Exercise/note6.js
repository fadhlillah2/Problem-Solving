//!	Sort Array By Parity

// Example 1:
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// input
// [0,1]
// Output
// [0,1]

//?false code
// var sortArrayByParity = function (nums) {
//   var a = nums.sort();
//   console.log(a), (arr = []);
//   for (let i = 0; i < nums.length; i++) {
//     a[i] === undefined ? arr.push((a[i] = a[i + 1])) : arr.push(a[0]);
//   }
//   return arr;
// };
// console.log(sortArrayByParity([3, 1, 2, 4]));

// //!true path
// var sortArrayByParity = function (A) {
//   var arr1 = []; // for even
//   var arr2 = []; // for odd

//   for (var i = 0; i < A.length; i++) {
//     // for even check
//     if (A[i] % 2 == 0) {
//       arr1.push(A[i]);
//     }

//     // for odd check
//     else {
//       arr2.push(A[i]);
//     }
//   }

//   var res = arr1.concat(arr2);
//   return res;
// };
// console.log(sortArrayByParity([3, 1, 2, 4]));

//!====================================================================================1

//!Find N Unique Integers Sum up to Zero
// Example 1:
// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

// Example 2:
// Input: n = 3
// Output: [-1,0,1]

// Example 3:
// Input: n = 1
// Output: [0]

// var sumZero = function(n) {
//   var arr=[],c=0
//   for(let i=0;i<n;i++){

//     if(arr[i]>0)c++
//     else(arr[i]<0)c--

//   }return c

// };

// var sumZero = function (n) {
//   let res = n % 2 == 0 ? [] : [0];
//   for (let i = 1; i <= Math.floor(n / 2); i++) res.push(i, -i);
//   return res;
//   // Time Complexity: O(n)
//   // Space Complexity: O(1)
// };
// console.log(sumZero(6));

//!====================================================================================2

//!Array Partition I
// Example 1:
// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.

// Example 2:
// Input: nums = [6,2,6,5,1,2]
// Output: 9
// Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

// var arrayPairSum = function (nums) {
//   var a = nums.sort((a, b) => {
//     return a - b;
//   });
//   sum = 0;
//   for (let i = 0; i < nums.length; i += 2) {
//     sum += nums[i];
//   }
//   return sum;
// };
// console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));

//!====================================================================================3

//!	Final Prices With a Special Discount in a Shop
//Example 1:
// Input: prices = [8,4,6,2,3]
// Output: [4,2,4,2,3]
// Explanation:
// For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4.
// For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2.
// For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4.
// For items 3 and 4 you will not receive any discount at all.

// Example 2:
// Input: prices = [1,2,3,4,5]
// Output: [1,2,3,4,5]
// Explanation: In this case, for all items, you will not receive any discount at all.

// Example 3:
// Input: prices = [10,1,1,6]
// Output: [9,0,1,6]

//?false code
// var finalPrices = function (prices) {
//   let min = Math.min(...prices),
//     a,
//     arr = [];
//   for (let i = 0; i <= prices.indexOf(min); i++) {
//     console.log("a");
//   }
//   return;
// };
// console.log(finalPrices([8, 4, 6, 2, 3]));
// console.log(Math.min(...[8, 4, 6, 2, 3]));

//!True Code
// var finalPrices = function (prices) {
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[i] >= prices[j]) {
//         prices[i] -= prices[j];
//         break;
//       }
//     }
//   }
//   return prices;
// };
// console.log(finalPrices([8, 4, 6, 2, 3]));

//!====================================================================================4

//!	Maximum Number of Balls in a Box
// Example 1:
// Input: lowLimit = 1, highLimit = 10
// Output: 2
// Explanation:
// Box Number:  1 2 3 4 5 6 7 8 9 10 11 ...
// Ball Count:  2 1 1 1 1 1 1 1 1 0  0  ...
// Box 1 has the most number of balls with 2 balls.

// Example 2:
// Input: lowLimit = 5, highLimit = 15
// Output: 2
// Explanation:
// Box Number:  1 2 3 4 5 6 7 8 9 10 11 ...
// Ball Count:  1 1 1 1 2 2 1 1 1 0  0  ...
// Boxes 5 and 6 have the most number of balls with 2 balls in each.

// Example 3:
// Input: lowLimit = 19, highLimit = 28
// Output: 2
// Explanation:
// Box Number:  1 2 3 4 5 6 7 8 9 10 11 12 ...
// Ball Count:  0 1 1 1 1 1 1 1 1 2  0  0  ...
// Box 10 has the most number of balls with 2 balls.

// var countBalls = function (lowLimit, highLimit) {
//   let boxes = {};
//   let max = 0;
//   for (let i = lowLimit; i <= highLimit; ++i) {
//     let s = sumOfDigits(i);
//     if (!boxes[s]) {
//       boxes[s] = [];
//     }
//     boxes[s].push(i);
//     max = Math.max(max, boxes[s].length);
//   }
//   return max;
// };

// function sumOfDigits(n) {
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }

// console.log(sumOfDigits(11111111111111111));

//!====================================================================================5
