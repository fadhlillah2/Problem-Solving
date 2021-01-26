// function movesZeroes(nums) {
//   for (let i = 0, j = 0; j < nums.length; i++) {
//     if (i > nums.length - 1) nums[j++] = 0;
//     else if (nums[i] != 0) nums[j++] = nums[i];
//   }
//   return nums;
// }
// console.log(moves([0, 1, 0, 2, 0, 3]));

// ======================================================================================

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// var runningSum = function (nums) {
//   let box = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i == 0) box.push(nums[0]);
//     //dengan menggunakan if/else maka dapat kita mensyaratkan satu atau lebih kondisi
//     //pengecualian
//     else {
//       nums[i] += nums[i - 1];
//       //artinya suku setelahnya merupakan penjumlahan dari suku-suku sebelumnya
//       box.push(nums[i]);
//     }
//   }
//   return box;
// };
// console.log(runningSum([1, 2, 3, 4]));

// ============================================================================================

// var shuffle = function (nums, n) {
//   let box = [];
//   for (let i = 0; i < n; i++) {
//     //dibatasi i<n karena nilai n adalah 2 kali nilai nums.
//     box.push(nums[i], nums[i + n]);
//     //dengan ngepush seperti diatas maka akan terbentuk array baru dengan urutan yg sama
//     //seperti diatas.
//   }
//   return box;
// };
// console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

//=============================================================================================

// function anagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const result = {};
//   for (let i = 0; i < str1.length; i++) {
//     let char = str1[i];
//     result[char] = result[char] ? (result[char] += 1) : (result[char] = 1);
//   }

//   for (let i = 0; i < str2.length; i++) {
//     let char = str2[i];
//     if (!result[char]) {
//       return false;
//     } else {
//       result[char] = -1;
//     }
//   }
//   return true;
// }

// console.log(anagram("akal", "laka"));

//Other way
// var isAnagram = (s, t) => {
//   if (s.length != t.length) return false;
//   count = {};
//   //untuk membuat sebuah objek null yang akan diisi
//   for (c of s) {
//     count[c] = (count[c] || 0) + 1;
//   }
//   //(for of) berguna sebagai looping value setiap elemen pada arr
//   for (c of t) {
//     if (!count[c]) false;
//   }
//   return true;
// };
// console.log(isAnagram("aku", "kusa"));

// ==================================================================================

function isDuplicate(nums) {
  count = {};
  for (c of nums) {
    count[c] = count[c] || 0;
  }
  for (c in nums) {
    if (nums[c] > 1) return true;
  }
  return false;
}
console.log(isDuplicate([1, 2, 3, 3, 4]));
