// Example 1:
// Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].

// Example 2:
// Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
// Output: 0
// Explanation: No triplet satisfies all conditions.

// var countGoodTriplets = function (arr, a, b, c) {
//     let res = 0;
//     const { abs } = Math;
//     console.log(abs);
//     for (let i = 0; i < arr.length; i++)
//       for (let j = i + 1; j < arr.length; j++)
//         for (let k = j + 1; k < arr.length; k++)
//           if (
//             abs(arr[i] - arr[j]) <= a &&
//             abs(arr[j] - arr[k]) <= b &&
//             abs(arr[i] - arr[k]) <= c
//           )
//             res++;
//     return res;
//   };
//   console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));

//! #1 =======================================================================================================

//!Create array given array of index
// Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
// Output: [0,1,2,3,4]
// Explanation:
// nums       index     target
// 1            0        [1]
// 2            1        [1,2]
// 3            2        [1,2,3]
// 4            3        [1,2,3,4]
// 0            0        [0,1,2,3,4]

// var createTargetArray = function (nums, index) {
//   const arr = [];

//   nums.forEach((e, i) => {
//     if (arr[index[i]] === undefined) {
//       arr[index[i]] = e;
//     } else {
//       arr.splice(index[i], 0, e);
//     }
//   });
//   return arr;
// };
// console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));

// let b = [1, 2, 3, 4];
// b.splice(1, 3, 4, 4, 6);
// console.log(b);

// console.log(!undefined === ![][0]);

//! #2 =======================================================================================================

// function xorOperation(n, start) {
//     let xor = start;
//     for (let i = 0; i < n; i++) {
//       xor ^= start + 2 * i;
//     }
//     return xor;
//   }
//   console.log(xorOperation(5, 0));

//   console.log(0 ^ 2 ^ 4 ^ 6 ^ 8);

//! #3 =======================================================================================================

//! Permutator
// const permutator = (inputArr) => {
//     let result = [];

//     const permute = (arr, m = []) => {
//       if (arr.length === 0) {
//         result.push(m);
//       } else {
//         for (let i = 0; i < arr.length; i++) {
//           let curr = arr.slice();
//           let next = curr.splice(i, 1);
//           permute(curr.slice(), m.concat(next));
//         }
//       }
//     };

//     permute(inputArr);

//     return result;
//   };

//   console.log(permutator([]));

//! #4 =======================================================================================================
//! #5 =======================================================================================================
