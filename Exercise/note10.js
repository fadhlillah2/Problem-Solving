// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

// var balancedStringSplit = function (s) {
//     const charge = { L: -1, R: 1 };
//     let sum = 0,
//       c = 0;
//     for (let i = 0; i < s.length; i++) {
//       sum += charge[s[i]];
//       //untuk menentukan apakah elemen s bernilai 1 atau -1
//       if (sum == 0) c++;
//     }
//     return c;
//   };
//intinya disini huruf L bernilai -1 dan huruf R brnnilai +1 sehingga apabila menghalikan nilai 0 instruksikan komputer
//untuk mengeluarkan output increment (penjumlahan).
//contohnya sebagai berikut "RL"= +1 -1 = 0 maka terhitung 1 dan begitu seterusnya
//   console.log(balancedStringSplit("RLRRLLRLRL"));

//! #1 =========================================================================================

// input:  num1 [6,8,13,0,0] m=3;   num2 [2,5,6] n=3
// output:    [2,5,6,6,8,13]

//! 1
// function magic(num1, m, num2, n) {
//   const num3 = num1.concat(num2),
//     arr = [];
//   for (let i = 0; i < num3.length; i++) {
//     if (num3[i] !== 0) arr.push(num3[i]);
//   }
//   return arr.sort((a, b) => a - b);
// }
// console.log(magic([6, 0, 8, 13, 0, 0], 3, [2, 5, 0, 0, 0, 5, 6], 3));

//! #2 =========================================================================================

// function fusion(n) {
//     var str = "1";
//     for (var i = 0; i < n; i++) {
//       var strArray = str.split("");
//       str = "";
//       var count = 1;

//       for (var j = 0; j < strArray.length; j++) {
//         if (strArray[j] !== strArray[j + 1]) {
//           str += count + strArray[j];
//           count = 1;
//         } else {
//           count++;
//         }
//       }
//     }
//     return str;
//   }

//   console.log(fusion(5));

//! #3 =========================================================================================

//! Reverse Words in a String III
// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// var reverseWords = function (s) {
//   s = s.split(" ");
//   console.log(s);

//   const reverseWord = (word) => {
//     let str = "";
//     for (let i = word.length - 1; i >= 0; i--) {
//       str += word[i];
//     }
//     return str;
//   };

//   for (let i = 0; i < s.length; i++) {
//     s[i] = reverseWord(s[i]);
//   }
//   console.log(s);

//   return s.join(" ");
// };
// console.log(reverseWords("Let's take LeetCode contest"));

//! #4 =========================================================================================
//! Minimum Subsequence in Non-Increasing Order

// Example 1:
// Input: nums = [4,3,10,9,8]
// Output: [10,9]
// Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included, however, the subsequence [10,9] has the maximum total sum of its elements.

// Example 2:
// Input: nums = [4,4,7,6,7]
// Output: [7,7,6]
// Explanation: The subsequence [7,7] has the sum of its elements equal to 14 which is not strictly greater than the sum of elements not included (14 = 4 + 4 + 6). Therefore, the subsequence [7,6,7] is the minimal satisfying the conditions. Note the subsequence has to returned in non-decreasing order.

// Example 3:
// Input: nums = [6]
// Output: [6]

// const minSubsequence = (nums) => {
//   nums.sort((a, b) => b - a);

//   let ans = [nums[0]];
//   let sum = 0;

//   for (let i = 1; i < nums.length; i++) sum += nums[i];

//   for (let i = 1; i < nums.length; i++) {
//     let ansSum = ans.reduce((a, b) => a + b);
//     if (ansSum > sum) return ans;

//     ans.push(nums[i]);
//     sum -= nums[i];
//   }

//   return ans;
// };
// console.log(minSubsequence([4, 3, 10, 9, 8]));

//! #5 =========================================================================================
