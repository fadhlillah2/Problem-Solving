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

//! Robot Return to Origin

// Example 1:
// Input: moves = "UD"
// Output: true
// Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

// Example 2:
// Input: moves = "LL"
// Output: false
// Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.

// Example 3:
// Input: moves = "RRDD"
// Output: false

// Example 4:
// Input: moves = "LDRRLRUULR"
// Output: false

//??? 1 hasn't finished
// var judgeCircle = function (moves) {
//   const sqr = { U: 1, D: -1, R: 1, L: -1 };
//   let a = 0;
//   for (let i = 0; i < moves.length; i++) {
//     if (sqr[moves[i]] == "U" && "D") a += sqr[moves[i]];
//   }

//   console.log(a);
//   if (a == 0) return true;
//   return false;
// };
// console.log(judgeCircle("RRDDU"));

//! 2
// var judgeCircle = function (moves) {
//   let x = 0;
//   let y = 0;

//   for (let i = 0; i < moves.length; i++) {
//     switch (moves[i]) {
//       case "R":
//         x++;
//         break;
//       case "L":
//         x--;
//         break;
//       case "U":
//         y++;
//         break;
//       case "D":
//         y--;
//         break;
//     }
//   }
//   return x == 0 && y == 0;
// };
// console.log(judgeCircle("RRLL"));

//! #2 =========================================================================================

// input: 3
// output : 3

// in: 4
//out: 5

//! 1
// function climbStairs(n) {
//   if (n == 1 || n == 0) return 1;
//   let first = 1;
//   let second = 2;

//   for (let i = 3; i <= n; i++) {
//     let third = first + second;
//     first = second;
//     second = third;
//   }
//   return second;
// }
// console.log(climbStairs(3));

//! 2

// function fibonacci(num) {
//   var curr = 1,
//     prev = 0,
//     temp;

//   while (num >= 0) {
//     // temp = curr;
//     // curr = curr + prev;
//     // prev = temp;

//     temp = prev;
//     prev = curr;
//     curr += temp;
//     num--;
//   }

//   return prev;
// }
// console.log(fibonacci(5));

//! #3 =========================================================================================

// var reverseString = function (s) {
//   let str = "";
//   for (let i = s.length - 1; i >= 0; i--) {
//     str += s[i];
//   }

//   // for (let i = 0; i < s.length; i++) {
//   //   str[i] += ",";
//   // }
//   return str;
// };
// console.log(reverseString(["h", "e", "l", "l", "o"]));

//! #4 =========================================================================================

// function toLowerCase(string) {
//   let str = "",
//     l = string.length;
//   for (letter of string) {
//     index = letter.charCodeAt(0);
//     if (index >= 65 && index <= 97) str += String.fromCharCode(index + 32);
//   }

//   return str;
// }
// console.log(toLowerCase("AAASDZZXCZXC"));

//! #5 =========================================================================================
