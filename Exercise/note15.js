//! Best Time to Buy and Sell Stock
// Example 1:
//   Input: [7,1,5,3,6,4]
//   Output: 5
//   Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit
//   = 6-1 = 5.
//   Not 7-1 = 6, as selling price needs to be larger than buying price.

//   Example 2:
//   Input: [7,6,4,3,1]
//   Output: 0
//   Explanation: In this case, no transaction is done, i.e. max profit = 0.

//! 1
// function maxProfit(nums) {
//   let min = Number.MAX_SAFE_INTEGER;
//   let max = 0;

//   for (let i = 0; i < nums.length; i++) {
//     // 7 1 5 3 6 4
//     min = Math.min(nums[i], min);
//     max = Math.max(nums[i] - min, max);
//   }
//   return max;
// }
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//! 2
// var maxProfit = function (prices) {
//   let min = prices[0];
//   let profit = 0;
//   // 7 1 5 3 6 4
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > prices[i - 1]) {
//       console.log((profit = Math.max(profit, prices[i] - min)));
//     } else {
//       min = Math.min(min, prices[i]);
//     }
//   }

//   return profit;
// };
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(Number.MAX_SAFE_INTEGER);

// ! 2 ====================================================================================================

//! 1
// var isPalindrome = function (x) {
//   const isNegative = x < 0 ? true : false;

//   if (isNegative) {
//     return false;
//   }

//   const temp = x;
//   let reversed = 0;

//   while (x > 0) {
//     reversed = reversed * 10 + (x % 10);
//     x = parseInt(x / 10);
//   }

//   return reversed == temp;
// };

//! 2
// var isPalindrome = function (x) {
//   if (x < 0) {
//     return false;
//   }

//   if (x < 10) {
//     return true;
//   }

//   if (x % 10 === 0 && x !== 0) {
//     return false;
//   }

//   const str = String(x);
//   let i = 0,
//     j = str.length - 1;

//   while (i < j) {
//     if (str[i] !== str[j]) {
//       return false;
//     }

//     i++;
//     j--;
//   }

//   return true;
// };
// console.log(isPalindrome(1111111));

//! 3 bg paji
// function isAnagramInt(x) {
//   if (x < 0) return false;
//   let res = 0,
//     y = x;
//   while (y) {
//     remain = y % 10;
//     console.log(remain);
//     res = remain + res * 10;
//     y = Math.floor(y / 10);
//   }
//   return res === x ? true : false;
// }
// console.log(isAnagramInt(125213));
