//!Richest Customer Wealth
// Example 1:
// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

// Example 2:
// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

// Example 3:
// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17

// const maximumWealth = (accounts) => {
//     let highestWealth = 0;
//     for (let i = 0; i < accounts.length; i++) {
//       const count = accounts[i].reduce((accum, curr) => accum + curr, 0);
//       if (highestWealth < count) {
//         highestWealth = count;
//       }
//     }
//     return highestWealth;
//   };
//   console.log(maximumWealth([1, 5], [7, 3], [3, 5]));

//! #1 ==========================================================================================

// function power3(n) {
//     var m = 1,
//       base = 4;
//     while (true) {
//       if (m < n) m *= base;
//       else if (m > n) return false;
//       else return true;
//     }
//   }
//   console.log(power3(15));

//! #2 ==========================================================================================

// 1,2,3,4,4 =>4

//! 1
// function unikNumb(nums) {
//   var obj = {};
//   for (num of nums) {
//     obj[num] = ++obj[num] || 1;
//   }
//   return obj;
// }
// console.log(unikNumb([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]));

// !2 sort condition
// function uniqueNumb(nums) {
//   var i = 0;
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] !== nums[i]) nums[++i] = nums[j];
//   }
//   return ++i;
// }
// console.log(uniqueNumb([1, 2, 3, 4, 5, 5, 5]));

//! #3 ==========================================================================================
//! #4 ==========================================================================================
//! #5 ==========================================================================================
