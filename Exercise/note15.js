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
