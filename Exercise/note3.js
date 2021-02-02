//!NumIdenticalPairs

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed

// var numIdenticalPairs = function (nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j]) sum++;
//     }
//   }
//   return sum;
// };
// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

//!============================================================================================1

//! Kids With the Greatest Number of Candies

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation:
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids.
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.

// var kidsWithCandies = function (candies, extraCandies) {
//   let newArr = [];
//   for (let i = 0; i < candies.length; i++) {
//     let a = Math.max(...candies);
//     if (candies[i] + extraCandies >= a) newArr.push(true);
//     else newArr.push(false);
//   }
//   return newArr;
// };

// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

//!===============================================================================================================================2

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

// var maximumWealth = function (accounts) {
//   var max = 0,
//     temp = 0;
//   for (let i = 0; i < accounts.length; i++) {
//     temp = 0;
//     for (let j = 0; j < accounts[i].length; j++) {
//       temp += accounts[i][j];
//     }
//     max = temp > max ? temp : max;
//   }
//   return max;
// };

// console.log(
//   maximumWealth([
//     [1, 5],
//     [7, 3],
//     [3, 5],
//   ])
// );

//!Another Way (the space complexity would be O(1) since you are not creating an array)
// const maximumWealth = (accounts) => {
//   let highestWealth = 0;
//   for (let i = 0; i < accounts.length; i++) {
//     const count = accounts[i].reduce((accum, curr) => accum + curr, 0);
//     if (highestWealth < count) {
//       highestWealth = count;
//     }
//   }
//   return highestWealth;
// };
// console.log(maximumWealth([1, 5], [7, 3], [3, 5]));

//!=======================================================================================================3

//!How Many Numbers Are Smaller Than the Current Number
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// var smallerNumbersThanCurrent = function (nums) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     let c = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] > nums[j] && i != j) c++;
//     }
//     arr.push(c);
//   }
//   return arr;
// };
// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

//!==========================================================================================================4

//!Decompress Run-Length Encoded List
// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

// Input: nums = [1,1,2,3]
// Output: [1,3,3]

// var decompressRLElist = function (nums) {
//     let a = [];
//     for (let i = 0; i < nums.length; i += 2) {
//       while (nums[i]) {
//         a.push(nums[i + 1]);
//         nums[i]--;
//       }
//     }
//     return a;
//   };
//   console.log(decompressRLElist([1, 2, 3, 4]));

//!===========================================================================================5
