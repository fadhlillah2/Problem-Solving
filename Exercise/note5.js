// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

// var sumOddLengthSubarrays = function (arr) {
//   let l = arr.length;
//   let temp = 0;
//   for (let i = 0; i < l; i++) {
//     temp += arr[i];
//     if()
//   }
//   return console.log(temp);
// };
// console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));

// var sumOddLengthSubarrays = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 2) {
//     for (let j = 0; j < arr.length - i; j++) {
//       let arr1 = [...arr];
//       sum += arr1.splice(j, i + 1).reduce((a, b) => a + b);
//     }
//   }
//   return sum;
// };
// console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));

//! #1 ====================================================================================================================

// function combination(nums) {
//   let ans = [[]],
//     appendArr;
//   for (num of nums) {
//     appendArr = [];
//     for (entry of ans) {
//       appendArr.push([...entry, num]);
//     }
//     ans.push(...appendArr);
//   }
//   return ans;
// }
// console.log(combination([1, 2, 3, 4, 5]));

// let a = combination([1, 2, 3, 4, 5]);
// console.log(typeof a);
// b = a.filter((row) => row.length % 2 == 1);
// console.log(b);
// console.log([[, 1]]);
// console.log(...[]);

//! #2 ====================================================================================================================

// input: [1, 2, 3];
// output: [1, 2, 4];

// input: [1,9];
// output: [2, 0];

// function addEnding(nums) {
//   var l = nums.length;
//   for (let i = l - 1; i >= 0; i--) {
//     nums[i]++;
//     if (nums[i] > 9) {
//       nums[i] = 0;
//     } else {
//       return nums;
//     }
//   }
//   nums.unshift(1);
//   //
//   return nums;
// }
// console.log(addEnding([1, 9, 7]));

//! #3 ====================================================================================================================

// Example 1:
// Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
// Output: 1
// Explanation: We have 3 students where:
// The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
// The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
// The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.

// Example 5:
// Input: startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,10,10,10,10,10,10,10,10], queryTime = 5
// Output: 5

// Input: startTime = [4], endTime = [4], queryTime = 5
// Output: 0

//!false code
// var busyStudent = function (startTime, endTime, queryTime) {
//   var c = 0;
//   for (let i = 0; i < startTime.length; i++) {
//     if (endTime[i] === queryTime) c++;
//     //kita kurangkan antaran akhir dan awal, apabila melebihi standar yg ingin ditentukan
//     //maka tambahkan nilai c yg semula 0 sebagai penghitung

//     endTime[i] - startTime[i] >= queryTime ? c++ : 0;
//   }
//   return c;
// };
// console.log(busyStudent([16], [60], 58));

//!true code
// var busyStudent = function (startTime, endTime, queryTime) {
//   var c = 0;
//   for (let i = 0; i < startTime.length; i++) {
//     while (startTime[i] <= endTime[i]) {
//       if (queryTime === startTime[i]) c++;
//       startTime[i]++;
//     }
//   }
//   return c;
// };
// console.log(
//   busyStudent(
//     [9, 8, 7, 6, 5, 4, 3, 2, 1],
//     [10, 10, 10, 10, 10, 10, 10, 10, 10],
//     5
//   )
// );

//! #4 ====================================================================================================================

// !Replace Elements with Greatest Element on Right Side
// Example 1:
// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation:
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.

// Example 2:
// Input: arr = [400]
// Output: [-1]
// Explanation: There are no elements to the right of index 0.

//?False code
// var replaceElements = function (arr) {
//   var newArr = [];
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; i++) {
//       if (arr[i] < arr[j]) newArr.push(-1);
//       else {
//         return newArr.push(arr[i]);
//       }
//     }
//   }
//   return newArr;
// };
// console.log(replaceElements([17, 18, 5, 4, 6, 1]));

// let a = [17, 18, 5, 4, 6, 1];
// console.log(a.sort((a, b) => b - a));

//!True code
// var replaceElements = function (arr) {
//   var len = arr.length;
//   // Pick the last element as the max element to start.
//   var maxTillNow = arr[len - 1];

//   // Assign the last index's value to be -1.
//   arr[len - 1] = -1;

//   // Go from the last, assign the previous max to the current index value.
//   for (var i = len - 2; i >= 0; --i) {
//     var temp = maxTillNow;
//     maxTillNow = maxTillNow < arr[i] ? arr[i] : maxTillNow;
//     arr[i] = temp;
//   }

//   return arr;
// };
// console.log(replaceElements([17, 18, 5, 4, 6, 1]));

//! #5 ====================================================================================================================

// function romanToInt(s) {
//   let dict = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     M: 1000,
//   };

//   let val = 0;
//   for (let i = 0; i < s.length; i++) {
//     dict[s[i]] < dict[s[i + 1]] ? (val -= dict[s[i]]) : (val += dict[s[i]]);
//   }
//   return val;
// }
// console.log(romanToInt("IX"));
